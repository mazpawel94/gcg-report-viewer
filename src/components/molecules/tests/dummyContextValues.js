function setActualMoveIndex(index) {
  contextValues.actualMoveIndex = index;
}
function setActualOptionIndex(index) {
  contextValues.actualOptionIndex = index;
}
export const contextValues = {
  moves: [
    {
      index: 0,
      letters: "RĘCZONA",
      move: "-> Pawel_Mazurek            RĘCZONA  0   ",
      nick: "Pawel_Mazurek",
      pointsBefore: "0",
      choiceOptions: [
        {
          coordinates: "*8C",
          evaluate: "best",
          freeLetters: "",
          index: 0,
          movePoints: "84",
          percent: "76.69%",
          word: "RĘCZONA",
        },
        {
          coordinates: "8H",
          evaluate: "8.16",
          freeLetters: "",
          index: 1,
          movePoints: "76",
          percent: "74.32%",
          word: "RĘCZONA",
        },
        {
          coordinates: "8G",
          evaluate: "11.7",
          freeLetters: "",
          index: 2,
          movePoints: "76",
          percent: "72.85%",
          word: "RĘCZONA",
        },
      ],
    },
    {
      index: 1,
      letters: "KOLEŃ",
      move: "-> Maciej_Skrzypczak        KOLEŃ    0   ",
      nick: "Maciej_Skrzypczak",
      pointsBefore: "0",
      choiceOptions: [
        {
          coordinates: "9F",
          evaluate: "best",
          freeLetters: "KOL",
          index: 0,
          movePoints: "32",
          percent: "25.08%",
          word: "EŃ",
        },
        {
          coordinates: "F8",
          evaluate: "12.7",
          freeLetters: "KOL",
          index: 1,
          movePoints: "23",
          percent: "20.57%",
          word: "(Z)EŃ",
        },
      ],
    },
    {
      index: 2,
      letters: "HONOUAŚ",
      move: "-> Pawel_Mazurek            HONOUAŚ  84  ",
      nick: "Pawel_Mazurek",
      pointsBefore: "84",
      choiceOptions: [
        {
          coordinates: "*6J",
          evaluate: "best",
          freeLetters: "NOUAŚ",
          index: 0,
          movePoints: "28",
          percent: "74.39%",
          word: "HO",
        },
        {
          coordinates: "E5",
          evaluate: "3.63",
          freeLetters: "HOU",
          index: 1,
          movePoints: "20",
          percent: "73.88%",
          word: "NOŚ(C)A",
        },
      ],
    },
  ],
  actualMoveIndex: 0,
  actualOptionIndex: 0,
  setActualMoveIndex,
  setActualOptionIndex,
  getActualMove: () => ({
    letters: "ABCD",
  }),
};
