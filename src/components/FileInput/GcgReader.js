const regActualPlayer = /->(\s*.*)/gi;
const allRegex = /(->(\s*.*))| ((best)|(\d+\.\d*))(.*)/gi;
const letterOnBoard = /\(.+\)/g;
const blank = /[a-z ąęóśłżźćń]/g;
class GcgReader {

    convertTextByRegex = (text) => text.match(allRegex);

    findFreeLetters = (move, letters) => {
        const cleanMoveArray = move
            .replace(letterOnBoard, '')
            .replace(blank, '?')
            .split('');
        const lettersArray = letters.split('');
        cleanMoveArray.forEach(letter => lettersArray.splice(lettersArray.indexOf(letter), 1));
        return lettersArray.join('');
    }

    pushMoveByLineToArray = (line, movesArray) => {
        const atoms = line.replace(/\*/g, ' *').split(/\s+/).filter(el => el !== '');

        //add played move
        if (line.match(regActualPlayer)) {
            movesArray.push({
                index: movesArray.length,
                nick: atoms[1],
                letters: atoms[2],
                pointsBefore: atoms[3],
                move: line,
                choiceOptions: []
            });
        }
        //add option to move 
        else {
            const actualIndex = movesArray.length - 1;
            movesArray[actualIndex].choiceOptions.push({
                evaluate: atoms[0],
                coordinates: atoms[1],
                word: atoms[2],
                movePoints: atoms[3],
                percent: atoms.length > 4 ? (atoms[4][atoms[4].length - 1] === '%' ? atoms[4] : '0%') : '',
                freeLetters: this.findFreeLetters(atoms[2], movesArray[actualIndex].letters)
            });
        }
    }
    showPossibilities(movesArray) {
        console.log(movesArray);
    }
    readReport = (e, callback) => {
        const movesArray = [];
        const game = e.target.files[0];
        if (!game) return 0;
        const reader = new FileReader();
        reader.onload = (e) => {
            const lines = this.convertTextByRegex(e.target.result);
            lines.forEach((line) =>
                this.pushMoveByLineToArray(line, movesArray)
            )
            callback(movesArray);
        }
        reader.readAsText(game);
    };
}

export default GcgReader;
