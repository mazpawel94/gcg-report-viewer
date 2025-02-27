export const BOARD_SIZE = 650;

export const POINTS = {
  A: 1,
  Ą: 5,
  B: 3,
  C: 2,
  Ć: 6,
  D: 2,
  E: 1,
  Ę: 5,
  F: 5,
  G: 3,
  H: 3,
  I: 1,
  J: 3,
  K: 2,
  L: 2,
  Ł: 3,
  M: 2,
  N: 1,
  Ń: 7,
  O: 1,
  Ó: 5,
  P: 2,
  R: 1,
  S: 1,
  Ś: 5,
  T: 2,
  U: 3,
  W: 1,
  Y: 2,
  Z: 1,
  Ź: 9,
  Ż: 5,
  '?': 0,
};

export const FIELDS_PARAMS = {
  word2: {
    color: '#e8b442',
    text: 'PODWÓJNA PREMIA SŁOWNA',
  },
  word3: {
    color: '#c02929',
    text: 'POTRÓJNA PREMIA SŁOWNA',
  },
  letter2: {
    color: '#7590c7',
    text: 'PODWÓJNA PREMIA LITEROWA',
  },
  letter3: {
    color: '#0078c1',
    text: 'POTRÓJNA PREMIA LITEROWA',
  },
  middle: {
    color: '#e8b442',
    text: '',
  },
};

export const word2Fields = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [10, 10],
  [11, 11],
  [12, 12],
  [13, 13],
  [1, 13],
  [2, 12],
  [3, 11],
  [4, 10],
  [10, 4],
  [11, 3],
  [12, 2],
  [13, 1],
];
export const word2Indexes = [...word2Fields, [7, 7]].map((el) => el[0] * 15 + el[1]);

export const word3Fields = [
  [0, 0],
  [0, 7],
  [0, 14],
  [7, 0],
  [7, 14],
  [14, 0],
  [14, 7],
  [14, 14],
];
export const word3Indexes = word3Fields.map((el) => el[0] * 15 + el[1]);

export const wordMultiplerByIndex = Array(15 * 15)
  .fill(1)
  .map((el, i) => (word2Indexes.includes(i) ? 2 : word3Indexes.includes(i) ? 3 : 1));

export const letter2Fields = [
  [0, 3],
  [0, 11],
  [2, 6],
  [2, 8],
  [3, 0],
  [3, 7],
  [3, 14],
  [6, 2],
  [6, 6],
  [6, 8],
  [6, 12],
  [7, 3],
  [7, 11],
  [8, 2],
  [8, 6],
  [8, 8],
  [8, 12],
  [11, 0],
  [11, 7],
  [11, 14],
  [12, 6],
  [12, 8],
  [14, 3],
  [14, 11],
];
export const letter2Indexes = letter2Fields.map((el) => el[0] * 15 + el[1]);

export const letter3Fields = [
  [1, 5],
  [1, 9],
  [5, 1],
  [5, 5],
  [5, 9],
  [5, 13],
  [9, 1],
  [9, 5],
  [9, 9],
  [9, 13],
  [13, 5],
  [13, 9],
];
export const letter3Indexes = letter3Fields.map((el) => el[0] * 15 + el[1]);

export const letterMultiplerByIndex = Array(15 * 15)
  .fill(1)
  .map((el, i) => (letter2Indexes.includes(i) ? 2 : letter3Indexes.includes(i) ? 3 : 1));

export const size = 570 / 15;
