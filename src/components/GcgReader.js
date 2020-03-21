const regActualPlayer = /->(\s*.*)/gi;
const allRegex = /(->(\s*.*))| ((best)|(\d+\.\d*))(.*)/gi;

class GcgReader {

    convertTextByRegex(text) {
        return text.match(allRegex);
    }

    pushMoveByLineToArray = (lines, i, movesArray) => {
        const atoms = lines[i].replace(/\*/g, ' *').split(/\s+/).filter(el => el !== '');
        if (lines[i].match(regActualPlayer)) {
            movesArray.push({
                index: movesArray.length,
                nick: atoms[1],
                letters: atoms[2],
                points_before: atoms[3],
                move: lines[i],
                choiceOptions: []
            });
        }
        else {
            movesArray[movesArray.length - 1].choiceOptions.push({
                evaluate: atoms[0],
                coordinates: atoms[1],
                word: atoms[2],
                move_points: atoms[3],
                percent: atoms.length > 4 ? (atoms[4][atoms[4].length - 1] === '%' ? atoms[4] : '0%') : ''
                // free_letters: atoms[4][atoms[4].length - 1] === '%' ? atoms[4] : '0%'
            });
        }
    }
    showPossibilities(movesArray) {
        console.log(movesArray);
    }
    readReport = (e) => {
        const movesArray = [];
        const game = e.target.files[0];
        if (!game) return 0;
        const reader = new FileReader();
        reader.onload = (e) => {
            const lines = this.convertTextByRegex(e.target.result);
            lines.forEach((line, i) =>
                this.pushMoveByLineToArray(lines, i, movesArray)
            )
            this.showPossibilities(movesArray);
        };
        reader.readAsText(game);
    };
}

export default GcgReader;
