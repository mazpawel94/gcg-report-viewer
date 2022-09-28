import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { convertToBoardCoordinates, convertBoardWordToRack } from '../../../services/gameService';

const removeSigns = (word) => word.replace(/[\(,\),\!]/g, '');

const createTxtFromMoves = (array) => {
  const name1 = array[0].player;
  const name2 = array[1].player;
  const rows = array.map(
    (el) => `>${el.player}: ${el.letters} ${el.coordinates} ${removeSigns(el.word)} +${el.points} ${el.sumPoints} `,
  );

  const file = `#character-encoding UTF-8
#player1 ${name1} ${name1}
#player2 ${name2} ${name2}
${rows.join('\r\n')}`;
  return file;
};

const findPosition = (startPos, distance) =>
  startPos.vertical ? { x: startPos.x, y: startPos.y + distance } : { y: startPos.y, x: startPos.x + distance };

const useGameEntry = () => {
  const pointsRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [points, setPoints] = useState('');
  const [players, setPlayers] = useState([
    { name: 'player_1', current: true, letters: '' },
    { name: 'player_2', current: false, letters: '' },
  ]);
  const [startPosition, setStartPosition] = useState({
    x: 5,
    y: 5,
    vertical: true,
  });
  const [currentWord, setCurrentWord] = useState('');
  const [moves, setMoves] = useState([]);
  const [occupiedFields, setOccupiedFields] = useState([]);
  const currentPlayer = useMemo(() => players.find((el) => el.current), [players, moves.length]);

  const addOcupiedFields = (startPos, wordLength) => {
    const convertedCoords = Array(wordLength)
      .fill({})
      .map((el, i) => findPosition(startPos, i));
    setOccupiedFields((prev) => [...prev, ...convertedCoords]);
  };

  const changeCurrentPlayer = () => {
    const playerIndex = players.findIndex((player) => player.current); //zrobione w ten sposób na wypadek, gdyby kiedyś miałą być dodana obsługa >=3 graczy
    players[playerIndex] = {
      ...players[playerIndex],
      current: false,
      letters: inputValue,
    };
    const newPlayerIndex = playerIndex + 1 === players.length ? 0 : playerIndex + 1;
    players[newPlayerIndex] = { ...players[newPlayerIndex], current: true };
    setInputValue(players[newPlayerIndex].letters);
  };

  const addMove = useCallback(
    ({ loss = false }) => {
      if (!points) return;
      const prevDots = generateDots(startPosition, 1, true);
      const convertedWord = removeSigns(currentWord);
      const finalPosition = {
        ...startPosition,
        ...findPosition(startPosition, -prevDots.length),
      };
      const playerName = players.find((player) => player.current).name;
      setMoves((prev) => [
        ...prev,
        {
          player: playerName,
          letters: `${inputValue}${convertBoardWordToRack(convertedWord)}`,
          word: `${loss ? '!' : ''}${prevDots ? `(${prevDots})` : ''}${currentWord}`,
          points: parseInt(points),
          coordinates: convertToBoardCoordinates(finalPosition),
          sumPoints: prev
            .filter((el) => el.player === playerName)
            .reduce((acc, curr) => acc + curr.points, parseInt(points)),
        },
      ]);
      if (!loss) addOcupiedFields(startPosition, convertedWord.length);
      setCurrentWord('');
      setPoints('');
      changeCurrentPlayer();
    },
    [points, inputValue, currentWord, startPosition],
  );

  const handleExchange = () => {
    //do uzupełnienia, napisane na szybko, żeby sprawdzić całość w boju
    setMoves((prev) => [
      ...prev,
      {
        player: currentPlayer.name,
        letters: `A`,
        word: '-7',
        points: 0,
        coordinates: '',
        sumPoints: prev.filter((el) => el.player === currentPlayer.name).reduce((acc, curr) => acc + curr.points, 0),
      },
    ]);
    changeCurrentPlayer();
  };

  const handleLoss = () => {
    addMove({ loss: true });
    setMoves((prev) => {
      const lastMove = [...prev].pop();
      return [
        ...prev,
        {
          player: lastMove.player,
          letters: lastMove.letters,
          word: '--',
          points: -parseInt(lastMove.points),
          coordinates: '',
          sumPoints: lastMove.sumPoints - parseInt(lastMove.points),
        },
      ];
    });
  };

  const handleOnChange = ({ target }) => {
    const lastChar = target.value.split('').pop();
    if (/^[0-9]$/i.test(lastChar)) {
      setPoints(lastChar);
      pointsRef.current?.focus();
      return;
    }
    if (target.value.length > 7) return pointsRef.current?.focus();
    setInputValue(target.value.toUpperCase());
  };

  const handleBoardClick = useCallback((x, y) => {
    setStartPosition((prev) =>
      prev.x === x && prev.y === y ? { x, y, vertical: !prev.vertical } : { x, y, vertical: false },
    );
  }, []);

  const handleArrowClick = useCallback(() => setStartPosition((prev) => ({ ...prev, vertical: !prev.vertical })), []);

  const generateDots = (startPosition, distance, back = false) => {
    let dots = '';
    const dir = back ? -1 : 1;
    let nextCoordinate = findPosition(startPosition, distance * dir);
    while (occupiedFields.some((field) => field.x === nextCoordinate.x && field.y === nextCoordinate.y)) {
      dots = `${dots}.`;
      nextCoordinate = findPosition(startPosition, (distance + dots.length) * dir);
    }
    return dots;
  };

  const handlePutNewLetter = useCallback(
    (letter) => {
      if (!inputValue.includes(letter) && !inputValue.includes('?')) return;
      const isBlank = !inputValue.includes(letter);
      setCurrentWord((prev) => {
        const newLetter = isBlank ? letter.toLowerCase() : letter;
        const wordLength = removeSigns(prev).length + 1;
        const dots = generateDots(startPosition, wordLength);
        return `${prev}${newLetter}${dots ? `(${dots})` : ''}`;
      });
      setInputValue((prev) => (isBlank ? prev.replace('?', '') : prev.replace(letter, '')));
    },
    [inputValue, startPosition.x, startPosition.y, startPosition.vertical, occupiedFields],
  );

  const setName = ({ target }) => {
    setPlayers((prev) => {
      const newA = [...prev.filter((el) => !el.current), { ...currentPlayer, name: target.value }];
      return newA;
    });
  };

  const resetCurrentWord = useCallback(
    (e) => {
      e?.preventDefault();
      setCurrentWord('');
      setInputValue((prev) => `${prev}${convertBoardWordToRack(currentWord)}`);
    },
    [currentWord],
  );

  const downloadGame = () => {
    const text = createTxtFromMoves(moves);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'game.gcg');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleKeyDown = (e) => {
    const charCode = e.keyCode;
    if (e.target.nodeName === 'INPUT' || charCode < 64 || charCode > 123) return;
    handlePutNewLetter(e.key.toUpperCase());
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [inputValue, startPosition]);

  return {
    pointsRef,
    inputValue,
    startPosition,
    wordPosition: convertToBoardCoordinates(startPosition),
    currentWord,
    moves,
    points,
    playerName: currentPlayer.name,
    handleBoardClick,
    handlePutNewLetter,
    handleOnChange,
    handleArrowClick,
    handleExchange,
    handleLoss,
    resetCurrentWord,
    addMove,
    setName,
    setPoints,
    downloadGame,
  };
};

export default useGameEntry;
