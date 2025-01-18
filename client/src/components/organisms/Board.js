import { useContext } from 'react';

import context from '../../context';
import { isMoveWithWord } from '../../services/gameService';
import ToolButtons from '../organisms/ToolButtons';
import useBoard from './hooks/useBoard';
import KonvaBoard from './KonvaBoard';
import Word from './Word';
import WordsOnBoard from './WordsOnBoard';

const Board = ({ asBackground = false }) => {
  const { moves, withoutNewMove, boardIsFront, actualOption, stageRef } = useBoard(asBackground);
  const contextForBridgeContext = useContext(context);
  return (
    <>
      {moves?.length ? <ToolButtons stageRef={stageRef} /> : null}
      {/* {asBackground ? (
        <>
          <Rack3d />
          <Rack3d top />
        </>
      ) : null} */}
      <KonvaBoard plainView={boardIsFront} contextValue={contextForBridgeContext} stageRef={stageRef}>
        {actualOption ? <WordsOnBoard /> : null}
        {!withoutNewMove && actualOption && isMoveWithWord(actualOption) ? (
          <Word letters={actualOption.word} coordinates={actualOption.coordinates} isNewMove />
        ) : null}
      </KonvaBoard>
    </>
  );
};

export default Board;
