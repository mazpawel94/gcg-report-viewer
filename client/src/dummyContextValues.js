function setActualMoveIndex(index) {
  contextValues.actualMoveIndex = index;
}
function setActualOptionIndex(index) {
  contextValues.actualOptionIndex = index;
}

const moves = [
  {
    index: 0,
    nick: 'Pawel_Mazurek',
    letters: 'RĘCZONA',
    pointsBefore: '0',
    move: '-> Pawel_Mazurek            RĘCZONA  0   ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*8C',
        word: 'RĘCZONA',
        movePoints: '84',
        percent: '76.69%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '8.16',
        coordinates: '8H',
        word: 'RĘCZONA',
        movePoints: '76',
        percent: '74.32%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '11.7',
        coordinates: '8G',
        word: 'RĘCZONA',
        movePoints: '76',
        percent: '72.85%',
        freeLetters: '',
      },
      {
        index: 3,
        evaluate: '12.4',
        coordinates: '8D',
        word: 'RĘCZONA',
        movePoints: '76',
        percent: '72.26%',
        freeLetters: '',
      },
      {
        index: 4,
        evaluate: '13.8',
        coordinates: '8E',
        word: 'RĘCZONA',
        movePoints: '74',
        percent: '72.00%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '14.3',
        coordinates: '8F',
        word: 'RĘCZONA',
        movePoints: '76',
        percent: '71.71%',
        freeLetters: '',
      },
      {
        index: 6,
        evaluate: '17.2',
        coordinates: '8B',
        word: 'RĘCZONA',
        movePoints: '78',
        percent: '69.93%',
        freeLetters: '',
      },
    ],
  },
  {
    index: 1,
    nick: 'Maciej_Skrzypczak',
    letters: 'KOLEŃ',
    pointsBefore: '0',
    move: '-> Maciej_Skrzypczak        KOLEŃ    0   ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '9F',
        word: 'EŃ',
        movePoints: '32',
        percent: '25.08%',
        freeLetters: 'KOL',
      },
      {
        index: 1,
        evaluate: '12.7',
        coordinates: 'F8',
        word: '(Z)EŃ',
        movePoints: '23',
        percent: '20.57%',
        freeLetters: 'KOL',
      },
      {
        index: 2,
        evaluate: '13.4',
        coordinates: '*7G',
        word: 'KOLEŃ',
        movePoints: '29',
        percent: '19.91%',
        freeLetters: '',
      },
      {
        index: 3,
        evaluate: '14.5',
        coordinates: 'E8',
        word: '(C)LEŃ',
        movePoints: '24',
        percent: '19.89%',
        freeLetters: 'KO',
      },
      {
        index: 4,
        evaluate: '14.3',
        coordinates: '7I',
        word: 'KOLEŃ',
        movePoints: '27',
        percent: '19.87%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '16.7',
        coordinates: '7I',
        word: 'LEŃ',
        movePoints: '17',
        percent: '19.65%',
        freeLetters: 'KO',
      },
      {
        index: 6,
        evaluate: '15.8',
        coordinates: '7I',
        word: 'KLEŃ',
        movePoints: '19',
        percent: '19.59%',
        freeLetters: 'O',
      },
      {
        index: 7,
        evaluate: '16.7',
        coordinates: 'G7',
        word: 'K(O)Ń',
        movePoints: '19',
        percent: '19.30%',
        freeLetters: 'OLE',
      },
      {
        index: 8,
        evaluate: '15.4',
        coordinates: '9G',
        word: 'KOLEŃ',
        movePoints: '29',
        percent: '19.17%',
        freeLetters: '',
      },
      {
        index: 9,
        evaluate: '17.8',
        coordinates: '9I',
        word: 'LEŃ',
        movePoints: '17',
        percent: '19.15%',
        freeLetters: 'KO',
      },
    ],
  },
  {
    index: 2,
    nick: 'Pawel_Mazurek',
    letters: 'HONOUAŚ',
    pointsBefore: '84',
    move: '-> Pawel_Mazurek            HONOUAŚ  84  ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*6J',
        word: 'HO',
        movePoints: '28',
        percent: '74.39%',
        freeLetters: 'NOUAŚ',
      },
      {
        index: 1,
        evaluate: '3.63',
        coordinates: 'E5',
        word: 'NOŚ(C)A',
        movePoints: '20',
        percent: '73.88%',
        freeLetters: 'HOU',
      },
      {
        index: 2,
        evaluate: '4.42',
        coordinates: 'E5',
        word: 'NOŚ(C)O',
        movePoints: '20',
        percent: '73.69%',
        freeLetters: 'HUA',
      },
      {
        index: 3,
        evaluate: '3.14',
        coordinates: 'G6',
        word: 'U(KO)Ś',
        movePoints: '16',
        percent: '73.46%',
        freeLetters: 'HONOA',
      },
      {
        index: 4,
        evaluate: '5.64',
        coordinates: 'F7',
        word: 'O(Z)ON',
        movePoints: '20',
        percent: '72.58%',
        freeLetters: 'HUAŚ',
      },
      {
        index: 5,
        evaluate: '6.45',
        coordinates: 'E8',
        word: '(C)HANU',
        movePoints: '20',
        percent: '72.56%',
        freeLetters: 'OOŚ',
      },
      {
        index: 6,
        evaluate: '7.55',
        coordinates: 'F7',
        word: 'O(Z)ONU',
        movePoints: '23',
        percent: '72.37%',
        freeLetters: 'HAŚ',
      },
      {
        index: 7,
        evaluate: '5.42',
        coordinates: '6K',
        word: 'OŚ',
        movePoints: '14',
        percent: '72.13%',
        freeLetters: 'HNOUA',
      },
      {
        index: 8,
        evaluate: '9.06',
        coordinates: 'E8',
        word: '(C)HOANO',
        movePoints: '18',
        percent: '71.75%',
        freeLetters: 'UŚ',
      },
      {
        index: 9,
        evaluate: '10.0',
        coordinates: 'C4',
        word: 'HONO(R)U',
        movePoints: '14',
        percent: '71.66%',
        freeLetters: 'AŚ',
      },
    ],
  },
  {
    index: 3,
    nick: 'Maciej_Skrzypczak',
    letters: 'EOK',
    pointsBefore: '29',
    move: '-> Maciej_Skrzypczak        EOK       29  ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*5J',
        word: 'EKO',
        movePoints: '33',
        percent: '20.21%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '1.66',
        coordinates: '5K',
        word: 'KEO',
        movePoints: '28',
        percent: '19.69%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '9.19',
        coordinates: 'K5',
        word: 'K(OŃ)',
        movePoints: '20',
        percent: '17.74%',
        freeLetters: 'EO',
      },
      {
        index: 3,
        evaluate: '8.84',
        coordinates: '7F',
        word: 'O(KOLEŃ)',
        movePoints: '16',
        percent: '17.38%',
        freeLetters: 'EK',
      },
      {
        index: 4,
        evaluate: '9.75',
        coordinates: '5K',
        word: 'KO',
        movePoints: '26',
        percent: '17.13%',
        freeLetters: 'E',
      },
      {
        index: 5,
        evaluate: '11.2',
        coordinates: '9H',
        word: 'OK',
        movePoints: '15',
        percent: '17.02%',
        freeLetters: 'E',
      },
      {
        index: 6,
        evaluate: '11.1',
        coordinates: 'K4',
        word: 'OK(OŃ)',
        movePoints: '22',
        percent: '16.91%',
        freeLetters: 'E',
      },
      {
        index: 7,
        evaluate: '10.6',
        coordinates: '9F',
        word: 'EKO',
        movePoints: '18',
        percent: '16.89%',
        freeLetters: '',
      },
      {
        index: 8,
        evaluate: '11.2',
        coordinates: '9H',
        word: 'EKO',
        movePoints: '16',
        percent: '16.49%',
        freeLetters: '',
      },
      {
        index: 9,
        evaluate: '13.4',
        coordinates: '6E',
        word: 'EKO',
        movePoints: '12',
        percent: '15.95%',
        freeLetters: '',
      },
    ],
  },
  {
    index: 4,
    nick: 'Pawel_Mazurek',
    letters: 'ROŚNAAU',
    pointsBefore: '112',
    move: '-> Pawel_Mazurek            ROŚNAAU  112 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*F8',
        word: '(Z)AŚ',
        movePoints: '17',
        percent: '77.81%',
        freeLetters: 'RONAU',
      },
      {
        index: 1,
        evaluate: '7.86',
        coordinates: 'E5',
        word: 'NOŚ(C)A',
        movePoints: '20',
        percent: '75.35%',
        freeLetters: 'RAU',
      },
      {
        index: 2,
        evaluate: '7.57',
        coordinates: '4L',
        word: 'OŚ',
        movePoints: '16',
        percent: '74.85%',
        freeLetters: 'RNAAU',
      },
      {
        index: 3,
        evaluate: '9.82',
        coordinates: 'G6',
        word: 'U(KO)ŚNA',
        movePoints: '18',
        percent: '74.44%',
        freeLetters: 'ROA',
      },
      {
        index: 4,
        evaluate: '10.4',
        coordinates: '4K',
        word: 'ORANA',
        movePoints: '27',
        percent: '74.02%',
        freeLetters: 'ŚU',
      },
      {
        index: 5,
        evaluate: '12.1',
        coordinates: '4K',
        word: 'ORNA',
        movePoints: '23',
        percent: '73.89%',
        freeLetters: 'ŚAU',
      },
      {
        index: 6,
        evaluate: '11.8',
        coordinates: 'G6',
        word: 'U(KO)Ś',
        movePoints: '16',
        percent: '73.48%',
        freeLetters: 'RONAA',
      },
      {
        index: 7,
        evaluate: '15.3',
        coordinates: '4K',
        word: 'ORU',
        movePoints: '25',
        percent: '72.51%',
        freeLetters: 'ŚNAA',
      },
      {
        index: 8,
        evaluate: '16.1',
        coordinates: '9F',
        word: 'ARO',
        movePoints: '14',
        percent: '72.18%',
        freeLetters: 'ŚNAU',
      },
      {
        index: 9,
        evaluate: '15.4',
        coordinates: '4K',
        word: 'ONA',
        movePoints: '21',
        percent: '72.17%',
        freeLetters: 'RŚAU',
      },
    ],
  },
  {
    index: 5,
    nick: 'Maciej_Skrzypczak',
    letters: 'AĆIŁMM',
    pointsBefore: '62',
    move: '-> Maciej_Skrzypczak        AĆIŁMM  62  ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '9I',
        word: 'ĆMIŁ',
        movePoints: '33',
        percent: '29.10%',
        freeLetters: 'AM',
      },
      {
        index: 1,
        evaluate: '1.34',
        coordinates: 'L1',
        word: 'ĆMIŁ(O)',
        movePoints: '38',
        percent: '28.39%',
        freeLetters: 'AM',
      },
      {
        index: 2,
        evaluate: '2.53',
        coordinates: '9I',
        word: 'ĆMIŁA',
        movePoints: '35',
        percent: '27.76%',
        freeLetters: 'M',
      },
      {
        index: 3,
        evaluate: '6.72',
        coordinates: '9I',
        word: 'ĆMI',
        movePoints: '30',
        percent: '26.13%',
        freeLetters: 'AŁM',
      },
      {
        index: 4,
        evaluate: '12.5',
        coordinates: '9H',
        word: 'IMĆ',
        movePoints: '21',
        percent: '24.43%',
        freeLetters: 'AŁM',
      },
      {
        index: 5,
        evaluate: '10.1',
        coordinates: '*9I',
        word: 'ĆMIŁAM',
        movePoints: '37',
        percent: '24.35%',
        freeLetters: '',
      },
      {
        index: 6,
        evaluate: '13.3',
        coordinates: 'F8',
        word: '(ZAŚ)MIAĆ',
        movePoints: '29',
        percent: '23.94%',
        freeLetters: 'ŁM',
      },
      {
        index: 7,
        evaluate: '13.8',
        coordinates: '9I',
        word: 'ĆMAMI',
        movePoints: '34',
        percent: '23.12%',
        freeLetters: 'Ł',
      },
      {
        index: 8,
        evaluate: '14.9',
        coordinates: '9I',
        word: 'MAMIĆ',
        movePoints: '27',
        percent: '22.99%',
        freeLetters: 'Ł',
      },
      {
        index: 9,
        evaluate: '17.5',
        coordinates: '10F',
        word: '(Ś)MIAĆ',
        movePoints: '27',
        percent: '22.23%',
        freeLetters: 'ŁM',
      },
    ],
  },
  {
    index: 6,
    nick: 'Pawel_Mazurek',
    letters: 'AURAONY',
    pointsBefore: '129',
    move: '-> Pawel_Mazurek            AURAONY   129 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: '0.177',
        coordinates: 'L8',
        word: 'A(Ł)UNY',
        movePoints: '22',
        percent: '72.02%',
        freeLetters: 'RAO',
      },
      {
        index: 1,
        evaluate: '0.755',
        coordinates: 'L8',
        word: 'U(Ł)ANY',
        movePoints: '26',
        percent: '71.91%',
        freeLetters: 'RAO',
      },
      {
        index: 2,
        evaluate: 'best',
        coordinates: '*4K',
        word: 'ORANY',
        movePoints: '31',
        percent: '71.77%',
        freeLetters: 'UA',
      },
      {
        index: 3,
        evaluate: '1.79',
        coordinates: 'N9',
        word: '(M)ARUNY',
        movePoints: '24',
        percent: '71.34%',
        freeLetters: 'AO',
      },
      {
        index: 4,
        evaluate: '3.23',
        coordinates: 'D3',
        word: 'AURYN(Ę)',
        movePoints: '26',
        percent: '70.86%',
        freeLetters: 'AO',
      },
      {
        index: 5,
        evaluate: '3.01',
        coordinates: '10M',
        word: 'AU',
        movePoints: '23',
        percent: '70.59%',
        freeLetters: 'RAONY',
      },
      {
        index: 6,
        evaluate: '3.90',
        coordinates: 'L8',
        word: 'U(Ł)ANA',
        movePoints: '24',
        percent: '70.43%',
        freeLetters: 'ROY',
      },
      {
        index: 7,
        evaluate: '3.80',
        coordinates: '10M',
        word: 'AUR',
        movePoints: '24',
        percent: '70.13%',
        freeLetters: 'AONY',
      },
      {
        index: 8,
        evaluate: '5.42',
        coordinates: '4K',
        word: 'ORANA',
        movePoints: '27',
        percent: '69.76%',
        freeLetters: 'UY',
      },
      {
        index: 9,
        evaluate: '5.59',
        coordinates: '10M',
        word: 'AUA',
        movePoints: '24',
        percent: '69.09%',
        freeLetters: 'RONY',
      },
    ],
  },
  {
    index: 7,
    nick: 'Maciej_Skrzypczak',
    letters: 'BET',
    pointsBefore: '99',
    move: '-> Maciej_Skrzypczak        BET       99  ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '3M',
        word: 'BET',
        movePoints: '26',
        percent: '23.37%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '1.78',
        coordinates: '8M',
        word: 'BET',
        movePoints: '25',
        percent: '22.33%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '6.13',
        coordinates: '6F',
        word: 'BET',
        movePoints: '20',
        percent: '20.95%',
        freeLetters: '',
      },
      {
        index: 3,
        evaluate: '5.66',
        coordinates: '*O1',
        word: 'BET(Y)',
        movePoints: '24',
        percent: '20.53%',
        freeLetters: '',
      },
      {
        index: 4,
        evaluate: '10.2',
        coordinates: '7B',
        word: 'BET',
        movePoints: '17',
        percent: '19.75%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '11.0',
        coordinates: 'M1',
        word: 'BET(A)',
        movePoints: '14',
        percent: '19.26%',
        freeLetters: '',
      },
      {
        index: 6,
        evaluate: '13.1',
        coordinates: 'H4',
        word: 'BET(ON)',
        movePoints: '11',
        percent: '18.56%',
        freeLetters: '',
      },
      {
        index: 7,
        evaluate: '15.5',
        coordinates: '6G',
        word: 'ET',
        movePoints: '11',
        percent: '18.17%',
        freeLetters: 'B',
      },
      {
        index: 8,
        evaluate: '15.1',
        coordinates: '3M',
        word: 'BE',
        movePoints: '18',
        percent: '18.05%',
        freeLetters: 'T',
      },
      {
        index: 9,
        evaluate: '14.9',
        coordinates: '6F',
        word: 'BE',
        movePoints: '14',
        percent: '17.62%',
        freeLetters: 'T',
      },
    ],
  },
  {
    index: 8,
    nick: 'Pawel_Mazurek',
    letters: 'AUWAWES',
    pointsBefore: '160',
    move: '-> Pawel_Mazurek            AUWAWES   160 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: '0.305',
        coordinates: '*B8',
        word: 'WSUWA',
        movePoints: '26',
        percent: '74.53%',
        freeLetters: 'AE',
      },
      {
        index: 1,
        evaluate: 'best',
        coordinates: 'N2',
        word: 'WE(N)US',
        movePoints: '25',
        percent: '73.73%',
        freeLetters: 'AAW',
      },
      {
        index: 2,
        evaluate: '2.32',
        coordinates: 'B5',
        word: 'WSUWA',
        movePoints: '22',
        percent: '73.40%',
        freeLetters: 'AE',
      },
      {
        index: 3,
        evaluate: '5.32',
        coordinates: 'B6',
        word: 'SUWA',
        movePoints: '21',
        percent: '71.97%',
        freeLetters: 'AWE',
      },
      {
        index: 4,
        evaluate: '4.77',
        coordinates: 'L8',
        word: 'S(Ł)AWA',
        movePoints: '16',
        percent: '71.69%',
        freeLetters: 'UWE',
      },
      {
        index: 5,
        evaluate: '5.90',
        coordinates: '10M',
        word: 'SUW',
        movePoints: '24',
        percent: '71.54%',
        freeLetters: 'AAWE',
      },
      {
        index: 6,
        evaluate: '4.71',
        coordinates: 'N2',
        word: 'WE(N)A',
        movePoints: '15',
        percent: '71.27%',
        freeLetters: 'UAWS',
      },
      {
        index: 7,
        evaluate: '9.40',
        coordinates: '10M',
        word: 'AUA',
        movePoints: '24',
        percent: '69.94%',
        freeLetters: 'WWES',
      },
      {
        index: 8,
        evaluate: '9.93',
        coordinates: 'N6',
        word: 'SWE(M)U',
        movePoints: '16',
        percent: '69.26%',
        freeLetters: 'AAW',
      },
      {
        index: 9,
        evaluate: '10.3',
        coordinates: 'N2',
        word: 'WA(N)A',
        movePoints: '15',
        percent: '69.11%',
        freeLetters: 'UWES',
      },
    ],
  },
  {
    index: 9,
    nick: 'Maciej_Skrzypczak',
    letters: 'A',
    pointsBefore: '123',
    move: '-> Maciej_Skrzypczak        A         123 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*xch',
        word: '???????',
        movePoints: '0',
        percent: '12.92%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '2.18',
        coordinates: 'J9',
        word: '(M)A',
        movePoints: '5',
        percent: '12.32%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '3.34',
        coordinates: 'N9',
        word: '(M)A',
        movePoints: '5',
        percent: '12.31%',
        freeLetters: '',
      },
      {
        index: 3,
        evaluate: '3.06',
        coordinates: '12A',
        word: 'A(A)',
        movePoints: '3',
        percent: '11.97%',
        freeLetters: '',
      },
      {
        index: 4,
        evaluate: '2.64',
        coordinates: '10A',
        word: 'A(U)',
        movePoints: '4',
        percent: '11.94%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '2.60',
        coordinates: '12B',
        word: '(A)A',
        movePoints: '2',
        percent: '11.92%',
        freeLetters: '',
      },
      {
        index: 6,
        evaluate: '4.44',
        coordinates: 'M3',
        word: 'A(A)',
        movePoints: '4',
        percent: '11.46%',
        freeLetters: '',
      },
      {
        index: 7,
        evaluate: '5.33',
        coordinates: 'N8',
        word: 'A(M)',
        movePoints: '3',
        percent: '11.30%',
        freeLetters: '',
      },
      {
        index: 8,
        evaluate: '5.14',
        coordinates: 'M9',
        word: '(A)A',
        movePoints: '2',
        percent: '11.26%',
        freeLetters: '',
      },
      {
        index: 9,
        evaluate: '4.52',
        coordinates: 'L3',
        word: 'A(RO)',
        movePoints: '3',
        percent: '11.12%',
        freeLetters: '',
      },
    ],
  },
  {
    index: 10,
    nick: 'Pawel_Mazurek',
    letters: 'EAIIICŁ',
    pointsBefore: '186',
    move: '-> Pawel_Mazurek            EAIIICŁ  186 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*N2',
        word: 'CE(N)IŁA',
        movePoints: '39',
        percent: '87.17%',
        freeLetters: 'II',
      },
      {
        index: 1,
        evaluate: '2.45',
        coordinates: 'N2',
        word: 'CE(N)IŁ',
        movePoints: '37',
        percent: '86.07%',
        freeLetters: 'AII',
      },
      {
        index: 2,
        evaluate: '7.69',
        coordinates: 'N6',
        word: 'IŁA(M)I',
        movePoints: '12',
        percent: '84.05%',
        freeLetters: 'EIC',
      },
      {
        index: 3,
        evaluate: '10.2',
        coordinates: '13B',
        word: 'ŁACIE',
        movePoints: '26',
        percent: '83.05%',
        freeLetters: 'II',
      },
      {
        index: 4,
        evaluate: '10.8',
        coordinates: '10J',
        word: 'II',
        movePoints: '11',
        percent: '82.70%',
        freeLetters: 'EAICŁ',
      },
      {
        index: 5,
        evaluate: '14.6',
        coordinates: 'N9',
        word: '(M)AICIE',
        movePoints: '20',
        percent: '81.42%',
        freeLetters: 'IŁ',
      },
      {
        index: 6,
        evaluate: '14.8',
        coordinates: '12A',
        word: 'Ł(A)CIE',
        movePoints: '22',
        percent: '81.23%',
        freeLetters: 'AII',
      },
      {
        index: 7,
        evaluate: '16.6',
        coordinates: 'B8',
        word: '(WSUWA)ŁA',
        movePoints: '22',
        percent: '80.47%',
        freeLetters: 'EIIIC',
      },
      {
        index: 8,
        evaluate: '17.9',
        coordinates: 'A12',
        word: 'ACIE',
        movePoints: '21',
        percent: '80.20%',
        freeLetters: 'IIŁ',
      },
      {
        index: 9,
        evaluate: '16.0',
        coordinates: 'F8',
        word: '(ZAŚ)CIEŁA',
        movePoints: '21',
        percent: '79.90%',
        freeLetters: 'II',
      },
    ],
  },
  {
    index: 11,
    nick: 'Maciej_Skrzypczak',
    letters: 'KLAT',
    pointsBefore: '123',
    move: '-> Maciej_Skrzypczak        KLAT      123 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: '0.377',
        coordinates: 'A12',
        word: 'TALK',
        movePoints: '32',
        percent: '8.010%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: 'best',
        coordinates: '*A12',
        word: 'KLAT',
        movePoints: '32',
        percent: '7.899%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '9.47',
        coordinates: '12A',
        word: 'T(A)LK',
        movePoints: '18',
        percent: '6.186%',
        freeLetters: 'A',
      },
      {
        index: 3,
        evaluate: '10.8',
        coordinates: '12A',
        word: 'L(A)TKA',
        movePoints: '20',
        percent: '5.550%',
        freeLetters: '',
      },
      {
        index: 4,
        evaluate: '9.05',
        coordinates: 'D4',
        word: 'TAKL(Ę)',
        movePoints: '24',
        percent: '5.486%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '13.2',
        coordinates: '12A',
        word: 'T(A)KLA',
        movePoints: '20',
        percent: '5.293%',
        freeLetters: '',
      },
      {
        index: 6,
        evaluate: '13.5',
        coordinates: 'D4',
        word: 'KLAT(Ę)',
        movePoints: '24',
        percent: '5.241%',
        freeLetters: '',
      },
      {
        index: 7,
        evaluate: '15.7',
        coordinates: '12A',
        word: 'T(A)KA',
        movePoints: '16',
        percent: '5.139%',
        freeLetters: 'L',
      },
      {
        index: 8,
        evaluate: '16.2',
        coordinates: '12A',
        word: 'K(A)TA',
        movePoints: '16',
        percent: '4.817%',
        freeLetters: 'L',
      },
      {
        index: 9,
        evaluate: '19.2',
        coordinates: '3M',
        word: 'K(ET)',
        movePoints: '16',
        percent: '4.691%',
        freeLetters: 'LAT',
      },
    ],
  },
  {
    index: 12,
    nick: 'Pawel_Mazurek',
    letters: 'IIIIDD?',
    pointsBefore: '225',
    move: '-> Pawel_Mazurek            IIIIDD?   225 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: 'J9',
        word: '(M)IDI',
        movePoints: '8',
        percent: '93.46%',
        freeLetters: 'IID?',
      },
      {
        index: 1,
        evaluate: '0.306',
        coordinates: 'N9',
        word: '(M)IDI',
        movePoints: '8',
        percent: '93.30%',
        freeLetters: 'IID?',
      },
      {
        index: 2,
        evaluate: '2.75',
        coordinates: '12A',
        word: '(KA)DI',
        movePoints: '12',
        percent: '92.50%',
        freeLetters: 'IIID?',
      },
      {
        index: 3,
        evaluate: '2.51',
        coordinates: '10J',
        word: 'II',
        movePoints: '11',
        percent: '92.47%',
        freeLetters: 'IIDD?',
      },
      {
        index: 4,
        evaluate: '3.69',
        coordinates: '10N',
        word: 'II',
        movePoints: '9',
        percent: '92.29%',
        freeLetters: 'IIDD?',
      },
      {
        index: 5,
        evaluate: '4.51',
        coordinates: '8L',
        word: 'ID',
        movePoints: '12',
        percent: '92.14%',
        freeLetters: 'IIID?',
      },
      {
        index: 6,
        evaluate: '4.39',
        coordinates: '12A',
        word: '(KA)ID',
        movePoints: '12',
        percent: '92.13%',
        freeLetters: 'IIID?',
      },
      {
        index: 7,
        evaluate: '5.01',
        coordinates: '*M6',
        word: 'ID',
        movePoints: '14',
        percent: '92.04%',
        freeLetters: 'IIID?',
      },
      {
        index: 8,
        evaluate: '7.05',
        coordinates: '10J',
        word: 'ID',
        movePoints: '13',
        percent: '91.33%',
        freeLetters: 'IIID?',
      },
      {
        index: 9,
        evaluate: '10.6',
        coordinates: '10N',
        word: 'ID',
        movePoints: '10',
        percent: '90.15%',
        freeLetters: 'IIID?',
      },
    ],
  },
  {
    index: 13,
    nick: 'Maciej_Skrzypczak',
    letters: 'PUJESZ',
    pointsBefore: '155',
    move: '-> Maciej_Skrzypczak        PUJESZ    155 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*12A',
        word: '(KA)PUJESZ',
        movePoints: '30',
        percent: '10.76%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '0.327',
        coordinates: 'D2',
        word: 'ZEPSUJ(Ę)',
        movePoints: '32',
        percent: '10.73%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '6.25',
        coordinates: 'O6',
        word: 'UJE',
        movePoints: '34',
        percent: '9.557%',
        freeLetters: 'PSZ',
      },
      {
        index: 3,
        evaluate: '6.29',
        coordinates: 'E6',
        word: 'SU(C)ZEJ',
        movePoints: '30',
        percent: '9.107%',
        freeLetters: 'P',
      },
      {
        index: 4,
        evaluate: '7.13',
        coordinates: '10M',
        word: 'JUS',
        movePoints: '28',
        percent: '8.899%',
        freeLetters: 'PEZ',
      },
      {
        index: 5,
        evaluate: '7.50',
        coordinates: 'E7',
        word: 'S(C)ZEP',
        movePoints: '22',
        percent: '8.873%',
        freeLetters: 'UJ',
      },
      {
        index: 6,
        evaluate: '6.58',
        coordinates: 'D4',
        word: 'PSUJ(Ę)',
        movePoints: '28',
        percent: '8.780%',
        freeLetters: 'EZ',
      },
      {
        index: 7,
        evaluate: '7.23',
        coordinates: 'D4',
        word: 'PUSZ(Ę)',
        movePoints: '24',
        percent: '8.491%',
        freeLetters: 'JE',
      },
      {
        index: 8,
        evaluate: '5.11',
        coordinates: 'N9',
        word: '(M)USZEJ',
        movePoints: '34',
        percent: '8.449%',
        freeLetters: 'P',
      },
      {
        index: 9,
        evaluate: '8.10',
        coordinates: 'D4',
        word: 'SZUJ(Ę)',
        movePoints: '26',
        percent: '8.243%',
        freeLetters: 'PE',
      },
    ],
  },
  {
    index: 14,
    nick: 'Pawel_Mazurek',
    letters: 'IIIDPP?',
    pointsBefore: '239',
    move: '-> Pawel_Mazurek            IIIDPP?   239 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*10M',
        word: 'DIP',
        movePoints: '15',
        percent: '93.45%',
        freeLetters: 'IIP?',
      },
      {
        index: 1,
        evaluate: '5.96',
        coordinates: 'D5',
        word: 'PIP(Ę)',
        movePoints: '10',
        percent: '91.26%',
        freeLetters: 'IID?',
      },
      {
        index: 2,
        evaluate: '6.93',
        coordinates: 'C12',
        word: '(P)IP',
        movePoints: '10',
        percent: '90.95%',
        freeLetters: 'IIDP?',
      },
      {
        index: 3,
        evaluate: '6.73',
        coordinates: '13C',
        word: 'ID',
        movePoints: '17',
        percent: '90.78%',
        freeLetters: 'IIPP?',
      },
      {
        index: 4,
        evaluate: '7.56',
        coordinates: '15A',
        word: '(T)IPI',
        movePoints: '7',
        percent: '90.67%',
        freeLetters: 'IDP?',
      },
      {
        index: 5,
        evaluate: '10.1',
        coordinates: '10J',
        word: 'ID',
        movePoints: '13',
        percent: '90.33%',
        freeLetters: 'IIPP?',
      },
      {
        index: 6,
        evaluate: '9.25',
        coordinates: '10N',
        word: 'II',
        movePoints: '9',
        percent: '90.31%',
        freeLetters: 'IDPP?',
      },
      {
        index: 7,
        evaluate: '10.3',
        coordinates: '3M',
        word: 'P(ET)',
        movePoints: '16',
        percent: '89.96%',
        freeLetters: 'IIIDP?',
      },
      {
        index: 8,
        evaluate: '10.6',
        coordinates: '10J',
        word: 'II',
        movePoints: '11',
        percent: '89.76%',
        freeLetters: 'IDPP?',
      },
      {
        index: 9,
        evaluate: '11.6',
        coordinates: 'J9',
        word: '(M)IDI',
        movePoints: '8',
        percent: '89.62%',
        freeLetters: 'IPP?',
      },
    ],
  },
  {
    index: 15,
    nick: 'Maciej_Skrzypczak',
    letters: 'SOLE',
    pointsBefore: '185',
    move: '-> Maciej_Skrzypczak        SOLE      185 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*11D',
        word: 'SOLE',
        movePoints: '34',
        percent: '16.87%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '2.42',
        coordinates: '11D',
        word: 'SOL',
        movePoints: '30',
        percent: '16.36%',
        freeLetters: 'E',
      },
      {
        index: 2,
        evaluate: '16.1',
        coordinates: '13C',
        word: 'EL',
        movePoints: '17',
        percent: '11.10%',
        freeLetters: 'SO',
      },
      {
        index: 3,
        evaluate: '13.2',
        coordinates: '11E',
        word: 'OLE',
        movePoints: '28',
        percent: '11.04%',
        freeLetters: 'S',
      },
      {
        index: 4,
        evaluate: '14.7',
        coordinates: '11B',
        word: '(W)OLE',
        movePoints: '26',
        percent: '10.93%',
        freeLetters: 'S',
      },
      {
        index: 5,
        evaluate: '19.5',
        coordinates: '11E',
        word: 'EL',
        movePoints: '24',
        percent: '10.28%',
        freeLetters: 'SO',
      },
      {
        index: 6,
        evaluate: '15.9',
        coordinates: '13C',
        word: 'OLE',
        movePoints: '23',
        percent: '10.23%',
        freeLetters: 'S',
      },
      {
        index: 7,
        evaluate: '17.2',
        coordinates: '6F',
        word: 'LOS',
        movePoints: '15',
        percent: '9.878%',
        freeLetters: 'E',
      },
      {
        index: 8,
        evaluate: '21.0',
        coordinates: '11D',
        word: 'SE',
        movePoints: '16',
        percent: '9.334%',
        freeLetters: 'OL',
      },
      {
        index: 9,
        evaluate: '20.9',
        coordinates: 'H11',
        word: 'S(Z)EOL',
        movePoints: '18',
        percent: '9.216%',
        freeLetters: '',
      },
    ],
  },
  {
    index: 16,
    nick: 'Pawel_Mazurek',
    letters: 'PIANIĄ?',
    pointsBefore: '254',
    move: '-> Pawel_Mazurek            PIANIĄ?  254 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*E2',
        word: 'PIeNIĄ(C)A',
        movePoints: '78',
        percent: '98.32%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '6.24',
        coordinates: '13H',
        word: 'AlPINIĄ',
        movePoints: '74',
        percent: '97.54%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '17.9',
        coordinates: 'C7',
        word: 'P(R)Ą',
        movePoints: '26',
        percent: '95.29%',
        freeLetters: 'IANI?',
      },
      {
        index: 3,
        evaluate: '21.7',
        coordinates: 'C12',
        word: '(P)IPĄ',
        movePoints: '20',
        percent: '95.24%',
        freeLetters: 'ANI?',
      },
      {
        index: 4,
        evaluate: '25.3',
        coordinates: 'F8',
        word: '(ZAŚLE)PIĄ',
        movePoints: '20',
        percent: '94.22%',
        freeLetters: 'ANI?',
      },
      {
        index: 5,
        evaluate: '26.2',
        coordinates: 'D4',
        word: 'PIAN(Ę)',
        movePoints: '20',
        percent: '93.93%',
        freeLetters: 'IĄ?',
      },
      {
        index: 6,
        evaluate: '27.6',
        coordinates: 'J9',
        word: '(M)Ą',
        movePoints: '17',
        percent: '93.49%',
        freeLetters: 'PIANI?',
      },
      {
        index: 7,
        evaluate: '25.3',
        coordinates: 'D4',
        word: 'PINI(Ę)',
        movePoints: '20',
        percent: '93.41%',
        freeLetters: 'AĄ?',
      },
      {
        index: 8,
        evaluate: '27.7',
        coordinates: 'C6',
        word: 'PA(R)Ą',
        movePoints: '26',
        percent: '92.88%',
        freeLetters: 'INI?',
      },
      {
        index: 9,
        evaluate: '29.6',
        coordinates: 'C5',
        word: 'NAI(R)Ą',
        movePoints: '26',
        percent: '92.73%',
        freeLetters: 'PI?',
      },
    ],
  },
  {
    index: 17,
    nick: 'Maciej_Skrzypczak',
    letters: 'WYBJ',
    pointsBefore: '219',
    move: '-> Maciej_Skrzypczak        WYBJ      219 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: '2.58',
        coordinates: '*6B',
        word: 'WYB(I)J',
        movePoints: '18',
        percent: '0.7235%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '2.98',
        coordinates: '3M',
        word: 'B(ET)',
        movePoints: '20',
        percent: '0.6820%',
        freeLetters: 'WYJ',
      },
      {
        index: 2,
        evaluate: 'best',
        coordinates: '3B',
        word: 'WYB(I)J',
        movePoints: '20',
        percent: '0.5429%',
        freeLetters: '',
      },
      {
        index: 3,
        evaluate: '1.12',
        coordinates: '4B',
        word: 'WYJ(e)B',
        movePoints: '18',
        percent: '0.4708%',
        freeLetters: '',
      },
      {
        index: 4,
        evaluate: '6.96',
        coordinates: '4C',
        word: 'WJ(e)B',
        movePoints: '14',
        percent: '0.4215%',
        freeLetters: 'Y',
      },
      {
        index: 5,
        evaluate: '6.33',
        coordinates: '3C',
        word: 'WB(I)J',
        movePoints: '16',
        percent: '0.4022%',
        freeLetters: 'Y',
      },
      {
        index: 6,
        evaluate: '7.01',
        coordinates: '4D',
        word: 'W(e)BY',
        movePoints: '12',
        percent: '0.3506%',
        freeLetters: 'J',
      },
      {
        index: 7,
        evaluate: '11.4',
        coordinates: '4D',
        word: 'J(e)B',
        movePoints: '12',
        percent: '0.3420%',
        freeLetters: 'WY',
      },
      {
        index: 8,
        evaluate: '9.39',
        coordinates: '6C',
        word: 'WB(I)J',
        movePoints: '14',
        percent: '0.2896%',
        freeLetters: 'Y',
      },
      {
        index: 9,
        evaluate: '15.7',
        coordinates: '14A',
        word: '(A)J',
        movePoints: '8',
        percent: '0.2861%',
        freeLetters: 'WYB',
      },
    ],
  },
  {
    index: 18,
    nick: 'Pawel_Mazurek',
    letters: 'FGRSWZZ',
    pointsBefore: '332',
    move: '-> Pawel_Mazurek            FGRSWZZ   332 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: '22.4',
        coordinates: '*3C',
        word: 'GZ(I)SZ',
        movePoints: '16',
        percent: '98.48%',
        freeLetters: 'FRW',
      },
      {
        index: 1,
        evaluate: '6.09',
        coordinates: '4A',
        word: 'ZGRZ(e)W',
        movePoints: '16',
        percent: '96.97%',
        freeLetters: 'FS',
      },
      {
        index: 2,
        evaluate: '14.5',
        coordinates: '4B',
        word: 'WSZ(e)RZ',
        movePoints: '10',
        percent: '96.97%',
        freeLetters: 'FG',
      },
      {
        index: 3,
        evaluate: '20.7',
        coordinates: 'C4',
        word: 'SZ(Y)F(R)',
        movePoints: '15',
        percent: '96.97%',
        freeLetters: 'FGRWZ',
      },
      {
        index: 4,
        evaluate: '24.6',
        coordinates: 'F8',
        word: '(ZAŚLE)SZ',
        movePoints: '14',
        percent: '96.97%',
        freeLetters: 'FGRWZ',
      },
      {
        index: 5,
        evaluate: '33.8',
        coordinates: '14A',
        word: '(A)RF',
        movePoints: '14',
        percent: '96.21%',
        freeLetters: 'GSWZZ',
      },
      {
        index: 6,
        evaluate: '8.95',
        coordinates: '4B',
        word: 'GRZ(e)SZ',
        movePoints: '14',
        percent: '95.83%',
        freeLetters: 'FW',
      },
      {
        index: 7,
        evaluate: '0.163',
        coordinates: '3M',
        word: 'F(ET)',
        movePoints: '28',
        percent: '95.45%',
        freeLetters: 'GRSWZZ',
      },
      {
        index: 8,
        evaluate: '9.34',
        coordinates: '4C',
        word: 'SZ(e)RZ',
        movePoints: '8',
        percent: '93.94%',
        freeLetters: 'FGW',
      },
      {
        index: 9,
        evaluate: '30.9',
        coordinates: '4C',
        word: 'RZ(e)SZ',
        movePoints: '8',
        percent: '93.94%',
        freeLetters: 'FGW',
      },
    ],
  },
  {
    index: 19,
    nick: 'Maciej_Skrzypczak',
    letters: 'ÓC',
    pointsBefore: '237',
    move: '-> Maciej_Skrzypczak        ÓC       237 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*J9',
        word: '(M)ÓC',
        movePoints: '19',
        percent: '1.515%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '0.0836',
        coordinates: 'L2',
        word: 'CÓ(RO)',
        movePoints: '9',
        percent: '0.0000%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '16.5',
        coordinates: 'xch',
        word: 'C',
        movePoints: '0',
        percent: '0.0000%',
        freeLetters: 'Ó',
      },
      {
        index: 3,
        evaluate: '37.5',
        coordinates: '9A',
        word: 'Ó(S)',
        movePoints: '6',
        percent: '0.0000%',
        freeLetters: 'C',
      },
      {
        index: 4,
        evaluate: '38.8',
        coordinates: 'G1',
        word: 'ÓC(Z)',
        movePoints: '8',
        percent: '0.0000%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '39.5',
        coordinates: 'xch',
        word: 'Ó',
        movePoints: '0',
        percent: '0.0000%',
        freeLetters: 'C',
      },
      {
        index: 6,
        evaluate: '43.2',
        coordinates: 'B5',
        word: 'Ó(W)',
        movePoints: '6',
        percent: '0.0000%',
        freeLetters: 'C',
      },
      {
        index: 7,
        evaluate: '51.6',
        coordinates: 'xch',
        word: 'CÓ',
        movePoints: '0',
        percent: '0.0000%',
        freeLetters: '',
      },
    ],
  },
  {
    index: 20,
    nick: 'Pawel_Mazurek',
    letters: 'FGMRWŻ?',
    pointsBefore: '348',
    move: '-> Pawel_Mazurek            FGMRWŻ?  348 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: 'xch',
        word: 'FGRWŻ',
        movePoints: '0',
        percent: '100.0%',
        freeLetters: 'M?',
      },
      {
        index: 1,
        evaluate: '9.18',
        coordinates: '*3M',
        word: 'F(ET)',
        movePoints: '28',
        percent: '100.0%',
        freeLetters: 'GMRWŻ?',
      },
      {
        index: 2,
        evaluate: '17.5',
        coordinates: '10A',
        word: 'F(U)G',
        movePoints: '11',
        percent: '100.0%',
        freeLetters: 'MRWŻ?',
      },
      {
        index: 3,
        evaluate: '21.7',
        coordinates: '14A',
        word: '(A)MF',
        movePoints: '16',
        percent: '100.0%',
        freeLetters: 'GRWŻ?',
      },
      {
        index: 4,
        evaluate: '24.3',
        coordinates: 'xch',
        word: 'FMRWŻ',
        movePoints: '0',
        percent: '100.0%',
        freeLetters: 'G?',
      },
      {
        index: 5,
        evaluate: '24.6',
        coordinates: '14A',
        word: '(A)Ż',
        movePoints: '12',
        percent: '100.0%',
        freeLetters: 'FGMRW?',
      },
      {
        index: 6,
        evaluate: '25.3',
        coordinates: 'xch',
        word: 'FGMWŻ',
        movePoints: '0',
        percent: '100.0%',
        freeLetters: 'R?',
      },
      {
        index: 7,
        evaluate: '28.3',
        coordinates: 'xch',
        word: 'FGMRWŻ',
        movePoints: '0',
        percent: '100.0%',
        freeLetters: '?',
      },
      {
        index: 8,
        evaluate: '33.9',
        coordinates: '3M',
        word: 'M(ET)',
        movePoints: '16',
        percent: '100.0%',
        freeLetters: 'FGRWŻ?',
      },
      {
        index: 9,
        evaluate: '44.3',
        coordinates: 'xch',
        word: 'FGMRŻ',
        movePoints: '0',
        percent: '100.0%',
        freeLetters: 'W?',
      },
    ],
  },
  {
    index: 21,
    nick: 'Maciej_Skrzypczak',
    letters: 'ATRZY',
    pointsBefore: '256',
    move: '-> Maciej_Skrzypczak        ATRZY     256 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '*O10',
        word: '(P)ATRZY',
        movePoints: '33',
        percent: '6.818%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '64.6',
        coordinates: '14A',
        word: '(A)TARY',
        movePoints: '14',
        percent: '1.515%',
        freeLetters: 'Z',
      },
      {
        index: 2,
        evaluate: '61.6',
        coordinates: 'O7',
        word: 'TA',
        movePoints: '14',
        percent: '0.7576%',
        freeLetters: 'RZY',
      },
      {
        index: 3,
        evaluate: '33.9',
        coordinates: '14A',
        word: '(A)RATY',
        movePoints: '14',
        percent: '0.0000%',
        freeLetters: 'Z',
      },
      {
        index: 4,
        evaluate: '48.9',
        coordinates: 'C12',
        word: '(P)YTA',
        movePoints: '14',
        percent: '0.0000%',
        freeLetters: 'RZ',
      },
      {
        index: 5,
        evaluate: '49.8',
        coordinates: '13C',
        word: 'AR',
        movePoints: '15',
        percent: '0.0000%',
        freeLetters: 'TZY',
      },
      {
        index: 6,
        evaluate: '51.7',
        coordinates: 'F1',
        word: 'TA(S)Z',
        movePoints: '13',
        percent: '0.0000%',
        freeLetters: 'RY',
      },
      {
        index: 7,
        evaluate: '54.3',
        coordinates: 'F3',
        word: '(S)ZY(J)',
        movePoints: '11',
        percent: '0.0000%',
        freeLetters: 'ATRZY',
      },
      {
        index: 8,
        evaluate: '55.5',
        coordinates: 'C12',
        word: '(P)YT',
        movePoints: '12',
        percent: '0.0000%',
        freeLetters: 'ARZ',
      },
      {
        index: 9,
        evaluate: '57.5',
        coordinates: 'N9',
        word: '(MI)ZARY',
        movePoints: '16',
        percent: '0.0000%',
        freeLetters: 'T',
      },
    ],
  },
  {
    index: 22,
    nick: 'Pawel_Mazurek',
    letters: 'WGRYŻM?',
    pointsBefore: '376',
    move: '-> Pawel_Mazurek            WGRYŻM?  376 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '11J',
        word: '(C)YG',
        movePoints: '14',
        percent: '100.0%',
        freeLetters: 'WRŻM?',
      },
      {
        index: 1,
        evaluate: '9.72',
        coordinates: 'K9',
        word: '(I)W',
        movePoints: '8',
        percent: '100.0%',
        freeLetters: 'GRYŻM?',
      },
      {
        index: 2,
        evaluate: '15.7',
        coordinates: '7M',
        word: '(DA)G',
        movePoints: '6',
        percent: '100.0%',
        freeLetters: 'WRYŻM?',
      },
      {
        index: 3,
        evaluate: '43.8',
        coordinates: '14A',
        word: '(A)G',
        movePoints: '8',
        percent: '100.0%',
        freeLetters: 'WRYŻM?',
      },
      {
        index: 4,
        evaluate: '45.8',
        coordinates: 'D11',
        word: '(SU)M',
        movePoints: '6',
        percent: '100.0%',
        freeLetters: 'WGRYŻ?',
      },
      {
        index: 5,
        evaluate: '51.6',
        coordinates: '14A',
        word: '(A)M',
        movePoints: '6',
        percent: '100.0%',
        freeLetters: 'WGRYŻ?',
      },
      {
        index: 6,
        evaluate: '57.8',
        coordinates: '*14A',
        word: '(A)Ż',
        movePoints: '12',
        percent: '100.0%',
        freeLetters: 'WGRYM?',
      },
      {
        index: 7,
        evaluate: '61.5',
        coordinates: 'N9',
        word: '(MI)M',
        movePoints: '8',
        percent: '100.0%',
        freeLetters: 'WGRYŻ?',
      },
      {
        index: 8,
        evaluate: '62.5',
        coordinates: 'H6',
        word: 'Ż(ON)',
        movePoints: '7',
        percent: '100.0%',
        freeLetters: 'WGRYM?',
      },
      {
        index: 9,
        evaluate: '65.0',
        coordinates: '15M',
        word: 'RŻ(Y)',
        movePoints: '8',
        percent: '100.0%',
        freeLetters: 'WGYM?',
      },
    ],
  },
  {
    index: 23,
    nick: 'Maciej_Skrzypczak',
    letters: 'NE',
    pointsBefore: '289',
    move: '-> Maciej_Skrzypczak        NE        289 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '11J',
        word: '(C)NE',
        movePoints: '8',
        percent: '',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '1.39',
        coordinates: '11J',
        word: '(C)EN',
        movePoints: '8',
        percent: '',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '3.01',
        coordinates: '6B',
        word: '(WYBIJ)E',
        movePoints: '15',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 3,
        evaluate: '6.98',
        coordinates: 'B14',
        word: '(Ż)E',
        movePoints: '9',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 4,
        evaluate: '10.8',
        coordinates: 'C3',
        word: '(G)EN(Y)',
        movePoints: '7',
        percent: '',
        freeLetters: 'NE',
      },
      {
        index: 5,
        evaluate: '14.9',
        coordinates: 'C12',
        word: '(P)E',
        movePoints: '6',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 6,
        evaluate: '14.9',
        coordinates: '*N14',
        word: 'EN',
        movePoints: '11',
        percent: '',
        freeLetters: '',
      },
      {
        index: 7,
        evaluate: '15.0',
        coordinates: '15A',
        word: '(T)EN',
        movePoints: '10',
        percent: '',
        freeLetters: '',
      },
      {
        index: 8,
        evaluate: '15.2',
        coordinates: 'G3',
        word: '(Z)EN',
        movePoints: '3',
        percent: '',
        freeLetters: '',
      },
      {
        index: 9,
        evaluate: '22.6',
        coordinates: 'H5',
        word: 'NE(ON)',
        movePoints: '4',
        percent: '',
        freeLetters: '',
      },
    ],
  },
  {
    index: 24,
    nick: 'Pawel_Mazurek',
    letters: 'WGRYMŹ?',
    pointsBefore: '388',
    move: '-> Pawel_Mazurek            WGRYMŹ?  388 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: 'F8',
        word: '(ZAŚLE)MY',
        movePoints: '18',
        percent: '100.0%',
        freeLetters: 'WGRŹ?',
      },
      {
        index: 1,
        evaluate: '15.0',
        coordinates: 'H12',
        word: '(Z)WoŹ',
        movePoints: '33',
        percent: '100.0%',
        freeLetters: 'GRYM',
      },
      {
        index: 2,
        evaluate: '17.0',
        coordinates: 'H12',
        word: '(Z)MYW',
        movePoints: '18',
        percent: '100.0%',
        freeLetters: 'GRŹ?',
      },
      {
        index: 3,
        evaluate: '23.0',
        coordinates: 'M12',
        word: 'RYG',
        movePoints: '17',
        percent: '100.0%',
        freeLetters: 'WMŹ?',
      },
      {
        index: 4,
        evaluate: '41.0',
        coordinates: '15K',
        word: 'ŹGa(NY)',
        movePoints: '18',
        percent: '100.0%',
        freeLetters: 'WRYM',
      },
      {
        index: 5,
        evaluate: '47.0',
        coordinates: 'F8',
        word: '(ZAŚLE)My',
        movePoints: '12',
        percent: '100.0%',
        freeLetters: 'WGRYŹ',
      },
      {
        index: 6,
        evaluate: '59.0',
        coordinates: '13C',
        word: 'oM',
        movePoints: '14',
        percent: '100.0%',
        freeLetters: 'WGRYŹ',
      },
      {
        index: 7,
        evaluate: '59.0',
        coordinates: '13C',
        word: 'iM',
        movePoints: '14',
        percent: '100.0%',
        freeLetters: 'WGRYŹ',
      },
      {
        index: 8,
        evaluate: '59.0',
        coordinates: 'G5',
        word: 'Mę(KO)',
        movePoints: '15',
        percent: '100.0%',
        freeLetters: 'WGRYŹ',
      },
      {
        index: 9,
        evaluate: '38.9',
        coordinates: '*H12',
        word: '(Z)WóŹ',
        movePoints: '33',
        percent: '0.0000%',
        freeLetters: 'GRYM',
      },
    ],
  },
  {
    index: 25,
    nick: 'Maciej_Skrzypczak',
    letters: 'DHIIN',
    pointsBefore: '300',
    move: '-> Maciej_Skrzypczak        DHIIN     300 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: 'K11',
        word: 'IND',
        movePoints: '14',
        percent: '0%',
        freeLetters: 'HI',
      },
      {
        index: 1,
        evaluate: 'best',
        coordinates: 'F1',
        word: 'HI(S)',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'DIN',
      },
      {
        index: 2,
        evaluate: '3.00',
        coordinates: '11J',
        word: '(C)HI',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'DIN',
      },
      {
        index: 3,
        evaluate: '3.00',
        coordinates: '11I',
        word: 'I(C)H',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'DIN',
      },
      {
        index: 4,
        evaluate: '3.00',
        coordinates: 'I3',
        word: 'IND',
        movePoints: '11',
        percent: '0%',
        freeLetters: 'HI',
      },
      {
        index: 5,
        evaluate: '6.00',
        coordinates: '5A',
        word: 'HI',
        movePoints: '6',
        percent: '0%',
        freeLetters: 'DIN',
      },
      {
        index: 6,
        evaluate: '6.00',
        coordinates: 'H4',
        word: 'NIH(ON)',
        movePoints: '8',
        percent: '0%',
        freeLetters: 'DI',
      },
      {
        index: 7,
        evaluate: '7.00',
        coordinates: 'B4',
        word: 'HI(W)',
        movePoints: '5',
        percent: '0%',
        freeLetters: 'DIN',
      },
      {
        index: 8,
        evaluate: '16.0',
        coordinates: '*15F',
        word: 'ID(Ź)',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'HIN',
      },
      {
        index: 9,
        evaluate: '17.0',
        coordinates: 'K11',
        word: 'ID',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'HIN',
      },
    ],
  },
  {
    index: 26,
    nick: 'Pawel_Mazurek',
    letters: 'GMRY',
    pointsBefore: '421',
    move: '-> Pawel_Mazurek            GMRY      421 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '5H',
        word: 'GR(EKO)',
        movePoints: '8',
        percent: '100.0%',
        freeLetters: 'MY',
      },
      {
        index: 1,
        evaluate: '2.00',
        coordinates: 'H5',
        word: 'GR(ON)',
        movePoints: '6',
        percent: '100.0%',
        freeLetters: 'MY',
      },
      {
        index: 2,
        evaluate: '8.00',
        coordinates: 'G2',
        word: 'G(Z)Y',
        movePoints: '6',
        percent: '100.0%',
        freeLetters: 'MR',
      },
      {
        index: 3,
        evaluate: '10.0',
        coordinates: 'M12',
        word: 'RYG',
        movePoints: '17',
        percent: '100.0%',
        freeLetters: 'M',
      },
      {
        index: 4,
        evaluate: '11.0',
        coordinates: 'H6',
        word: 'G(ON)',
        movePoints: '5',
        percent: '100.0%',
        freeLetters: 'MRY',
      },
      {
        index: 5,
        evaluate: '12.0',
        coordinates: 'H6',
        word: 'M(ON)',
        movePoints: '4',
        percent: '100.0%',
        freeLetters: 'GRY',
      },
      {
        index: 6,
        evaluate: '13.0',
        coordinates: '14D',
        word: 'RYM',
        movePoints: '16',
        percent: '100.0%',
        freeLetters: 'G',
      },
      {
        index: 7,
        evaluate: '14.0',
        coordinates: '*O7',
        word: 'MY',
        movePoints: '17',
        percent: '100.0%',
        freeLetters: 'GR',
      },
      {
        index: 8,
        evaluate: '15.0',
        coordinates: '15F',
        word: '(IDŹ)MY',
        movePoints: '16',
        percent: '100.0%',
        freeLetters: 'GR',
      },
      {
        index: 9,
        evaluate: '15.0',
        coordinates: '11J',
        word: '(C)YG',
        movePoints: '14',
        percent: '100.0%',
        freeLetters: 'MR',
      },
    ],
  },
  {
    index: 27,
    nick: 'Maciej_Skrzypczak',
    letters: 'HIN',
    pointsBefore: '312',
    move: '-> Maciej_Skrzypczak        HIN       312 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: 'H4',
        word: 'NIH(ON)',
        movePoints: '8',
        percent: '',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '19.0',
        coordinates: '11J',
        word: '(C)HI',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 2,
        evaluate: '19.0',
        coordinates: '11I',
        word: 'I(C)H',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 3,
        evaluate: '19.0',
        coordinates: '*F1',
        word: 'HI(S)',
        movePoints: '12',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 4,
        evaluate: '20.0',
        coordinates: '12M',
        word: 'HI(T)',
        movePoints: '6',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 5,
        evaluate: '21.0',
        coordinates: '14E',
        word: 'HI',
        movePoints: '10',
        percent: '0%',
        freeLetters: 'N',
      },
      {
        index: 6,
        evaluate: '23.0',
        coordinates: 'F14',
        word: 'H(I)',
        movePoints: '10',
        percent: '0%',
        freeLetters: 'IN',
      },
      {
        index: 7,
        evaluate: '24.0',
        coordinates: '10A',
        word: 'H(U)N',
        movePoints: '7',
        percent: '0%',
        freeLetters: 'I',
      },
      {
        index: 8,
        evaluate: '25.0',
        coordinates: 'K11',
        word: 'IN',
        movePoints: '10',
        percent: '0%',
        freeLetters: 'H',
      },
      {
        index: 9,
        evaluate: '25.0',
        coordinates: '5A',
        word: 'HI',
        movePoints: '6',
        percent: '0%',
        freeLetters: 'N',
      },
    ],
  },
  {
    index: 28,
    nick: 'Pawel_Mazurek',
    letters: 'GR',
    pointsBefore: '438',
    move: '-> Pawel_Mazurek            GR        438 ',
    choiceOptions: [
      {
        index: 0,
        evaluate: 'best',
        coordinates: '13M',
        word: 'GR(R)',
        movePoints: '13',
        percent: '100.0%',
        freeLetters: '',
      },
      {
        index: 1,
        evaluate: '5.00',
        coordinates: '*5H',
        word: 'GR(EKO)',
        movePoints: '8',
        percent: '100.0%',
        freeLetters: '',
      },
      {
        index: 2,
        evaluate: '6.00',
        coordinates: '10A',
        word: 'R(U)G',
        movePoints: '7',
        percent: '100.0%',
        freeLetters: '',
      },
      {
        index: 3,
        evaluate: '6.00',
        coordinates: '10A',
        word: 'G(U)R',
        movePoints: '7',
        percent: '100.0%',
        freeLetters: '',
      },
      {
        index: 4,
        evaluate: '7.00',
        coordinates: 'H5',
        word: 'GR(ON)',
        movePoints: '6',
        percent: '100.0%',
        freeLetters: '',
      },
      {
        index: 5,
        evaluate: '18.0',
        coordinates: '14M',
        word: 'G(EZ)',
        movePoints: '5',
        percent: '100.0%',
        freeLetters: 'R',
      },
      {
        index: 6,
        evaluate: '18.0',
        coordinates: 'H6',
        word: 'G(ON)',
        movePoints: '5',
        percent: '100.0%',
        freeLetters: 'R',
      },
      {
        index: 7,
        evaluate: '22.0',
        coordinates: 'D11',
        word: '(SU)R',
        movePoints: '5',
        percent: '100.0%',
        freeLetters: 'G',
      },
    ],
  },
  {
    index: 29,
    nick: 'Pawel_Mazurek',
    letters: '448',
    move: '-> Pawel_Mazurek                      448 ',
    choiceOptions: [],
  },
];
function setMoves(moves) {
  contextValues.moves = moves;
}
function setDefaultMoves() {
  contextValues.moves = moves;
}
export const contextValues = {
  moves,
  actualMoveIndex: 0,
  actualOptionIndex: 0,
  setActualMoveIndex,
  setActualOptionIndex,
  setMoves,
  setDefaultMoves,
  getActualMove: () => ({
    letters: 'ABCD',
  }),
};

export const txtFile = `Game Report
Generated by Quackle crossword game AI and analysis software
http://quackle.org

Pawel_Mazurek: Turn 1
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            RĘCZONA  0   
   ------------------------------     Maciej_Skrzypczak        ?CEGORU   0   
 1|=     '       =       '     =| --Championship Player's choices (your play: 1)
 2|  -       "       "       -  | best *8C RĘCZONA 84 76.69% 
 3|    -       '   '       -    |  8.16 8H RĘCZONA 76 74.32% 
 4|'     -       '       -     '|  11.7 8G RĘCZONA 76 72.85% 
 5|        -           -        |  12.4 8D RĘCZONA 76 72.26% 
 6|  "       "       "       "  |  13.8 8E RĘCZONA 74 72.00% 
 7|    '       '   '       '    |  14.3 8F RĘCZONA 76 71.71% 
 8|=     '       -       '     =|  17.2 8B RĘCZONA 78 69.93% 
 9|    '       '   '       '    | --Tracking-----------------------------------
10|  "       "       "       "  | ??AAAAAAAAĄBBCCĆDDDEEEEEEEFGGHHIIIIIIIIJJKKK
11|        -           -        | LLLŁŁMMMNNNNŃOOOOOÓPPPRRRSSSSŚTTTUUWWWWYYYYZ
12|'     -       '       -     '| ZZZŹŻ  93
13|    -       '   '       -    |
14|  -       "       "       -  |
15|=     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 1
   A B C D E F G H I J K L M N O      Pawel_Mazurek            EFIJPRW   84  
   ------------------------------  -> Maciej_Skrzypczak        KOLEŃ    0   
 1|=     '       =       '     =| --Championship Player's choices (your play: 3)
 2|  -       "       "       -  | best  9F EŃ    32 25.08% KOL
 3|    -       '   '       -    |  12.7 F8 (Z)EŃ 23 20.57% KOL
 4|'     -       '       -     '|  13.4*7G KOLEŃ 29 19.91% 
 5|        -           -        |  14.5 E8 (C)LEŃ 24 19.89% KO
 6|  "       "       "       "  |  14.3 7I KOLEŃ 27 19.87% 
 7|    '       '   '       '    |  16.7 7I LEŃ   17 19.65% KO
 8|=   R Ę C Z O N A     '     =|  15.8 7I KLEŃ  19 19.59% O
 9|    '       '   '       '    |  16.7 G7 K(O)Ń 19 19.30% OLE
10|  "       "       "       "  |  15.4 9G KOLEŃ 29 19.17% 
11|        -           -        |  17.8 9I LEŃ   17 19.15% KO
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAAAAAĄBBCCĆDDDEEEEEEFGGHHIIIIIIIIJJKKLL
14|  -       "       "       -  | ŁŁMMMNNNNOOOOÓPPPRRRSSSSŚTTTUUWWWWYYYYZZZZŹŻ  88
15|=     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 2
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            HONOUAŚ  84  
   ------------------------------     Maciej_Skrzypczak        AAEIIJR   29  
 1|=     '       =       '     =| --Championship Player's choices (your play: 1)
 2|  -       "       "       -  | best *6J HO       28 74.39% NOUAŚ
 3|    -       '   '       -    |  3.63 E5 NOŚ(C)A 20 73.88% HOU
 4|'     -       '       -     '|  4.42 E5 NOŚ(C)O 20 73.69% HUA
 5|        -           -        |  3.14 G6 U(KO)Ś  16 73.46% HONOA
 6|  "       "       "       "  |  5.64 F7 O(Z)ON   20 72.58% HUAŚ
 7|    '       K O L E Ń   '    |  6.45 E8 (C)HANU  20 72.56% OOŚ
 8|=   R Ę C Z O N A     '     =|  7.55 F7 O(Z)ONU  23 72.37% HAŚ
 9|    '       '   '       '    |  5.42 6K OŚ      14 72.13% HNOUA
10|  "       "       "       "  |  9.06 E8 (C)HOANO 18 71.75% UŚ
11|        -           -        |  10.0 C4 HONO(R)U 14 71.66% AŚ
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAAAAĄBBCCĆDDDEEEEEEFGGHIIIIIIIIJJKKLLŁŁ
14|  -       "       "       -  | MMMNNNOOÓPPPRRRSSSSTTTUWWWWYYYYZZZZŹŻ  81
15|=     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 2
   A B C D E F G H I J K L M N O      Pawel_Mazurek            AEENOŚU  112 
   ------------------------------  -> Maciej_Skrzypczak        EOK       29  
 1|=     '       =       '     =| --Championship Player's choices (your play: 1)
 2|  -       "       "       -  | best *5J EKO      33 20.21% 
 3|    -       '   '       -    |  1.66 5K KEO      28 19.69% 
 4|'     -       '       -     '|  9.19 K5 K(OŃ)   20 17.74% EO
 5|        -           -        |  8.84 7F O(KOLEŃ) 16 17.38% EK
 6|  "       "       H O     "  |  9.75 5K KO       26 17.13% E
 7|    '       K O L E Ń   '    |  11.2 9H OK       15 17.02% E
 8|=   R Ę C Z O N A     '     =|  11.1 K4 OK(OŃ)  22 16.91% E
 9|    '       '   '       '    |  10.6 9F EKO      18 16.89% 
10|  "       "       "       "  |  11.2 9H EKO      16 16.49% 
11|        -           -        |  13.4 6E EKO      12 15.95% 
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAAAAAĄBBCCĆDDDEEEEEFGGHIIIIIIIIJJKLLŁŁM
14|  -       "       "       -  | MMNNNNOOÓPPPRRRSSSSŚTTTUUWWWWYYYYZZZZŹŻ  83
15|=     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 3
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            ROŚNAAU  112 
   ------------------------------     Maciej_Skrzypczak        AAACFPY   62  
 1|=     '       =       '     =| --Championship Player's choices (your play: 1)
 2|  -       "       "       -  | best *F8 (Z)AŚ   17 77.81% RONAU
 3|    -       '   '       -    |  7.86 E5 NOŚ(C)A 20 75.35% RAU
 4|'     -       '       -     '|  7.57 4L OŚ      16 74.85% RNAAU
 5|        -         E K O      |  9.82 G6 U(KO)ŚNA 18 74.44% ROA
 6|  "       "       H O     "  |  10.4 4K ORANA    27 74.02% ŚU
 7|    '       K O L E Ń   '    |  12.1 4K ORNA     23 73.89% ŚAU
 8|=   R Ę C Z O N A     '     =|  11.8 G6 U(KO)Ś  16 73.48% RONAA
 9|    '       '   '       '    |  15.3 4K ORU      25 72.51% ŚNAA
10|  "       "       "       "  |  16.1 9F ARO      14 72.18% ŚNAU
11|        -           -        |  15.4 4K ONA      21 72.17% RŚAU
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAAAĄBBCCĆDDDEEEEEFGGHIIIIIIIIJJKLLŁŁMMM
14|  -       "       "       -  | NNNOÓPPPRRSSSSTTTUWWWWYYYYZZZZŹŻ  76
15|=     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 3
   A B C D E F G H I J K L M N O      Pawel_Mazurek            ANORTUZ   129 
   ------------------------------  -> Maciej_Skrzypczak        AĆIŁMM  62  
 1|=     '       =       '     =| --Championship Player's choices (your play: 6)
 2|  -       "       "       -  | best  9I  ĆMIŁ    33 29.10% AM
 3|    -       '   '       -    |  1.34 L1  ĆMIŁ(O) 38 28.39% AM
 4|'     -       '       -     '|  2.53 9I  ĆMIŁA   35 27.76% M
 5|        -         E K O      |  6.72 9I  ĆMI      30 26.13% AŁM
 6|  "       "       H O     "  |  12.5 9H  IMĆ      21 24.43% AŁM
 7|    '       K O L E Ń   '    |  10.1*9I  ĆMIŁAM  37 24.35% 
 8|=   R Ę C Z O N A     '     =|  13.3 F8  (ZAŚ)MIAĆ 29 23.94% ŁM
 9|    '     A '   '       '    |  13.8 9I  ĆMAMI    34 23.12% Ł
10|  "       Ś       "       "  |  14.9 9I  MAMIĆ    27 22.99% Ł
11|        -           -        |  17.5 10F (Ś)MIAĆ 27 22.23% ŁM
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAAAĄBBCCDDDEEEEEFGGHIIIIIIIJJKLLŁMNNNNO
14|  -       "       "       -  | OÓPPPRRRSSSSTTTUUWWWWYYYYZZZZŹŻ  75
15|=     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 4
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            AURAONY   129 
   ------------------------------     Maciej_Skrzypczak        ?DSUWZŹ  99  
 1|=     '       =       '     =| --Championship Player's choices (your play: 3)
 2|  -       "       "       -  | 0.177 L8  A(Ł)UNY 22 72.02% RAO
 3|    -       '   '       -    | 0.755 L8  U(Ł)ANY 26 71.91% RAO
 4|'     -       '       -     '| best *4K  ORANY    31 71.77% UA
 5|        -         E K O      |  1.79 N9  (M)ARUNY 24 71.34% AO
 6|  "       "       H O     "  |  3.23 D3  AURYN(Ę) 26 70.86% AO
 7|    '       K O L E Ń   '    |  3.01 10M AU       23 70.59% RAONY
 8|=   R Ę C Z O N A     '     =|  3.90 L8  U(Ł)ANA 24 70.43% ROY
 9|    '     A '   Ć M I Ł A M  |  3.80 10M AUR      24 70.13% AONY
10|  "       Ś       "       "  |  5.42 4K  ORANA    27 69.76% UY
11|        -           -        |  5.59 10M AUA      24 69.09% RONY
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAĄBBCCDDDEEEEEFGGHIIIIIIIJJKLLŁMNNNOÓPP
14|  -       "       "       -  | PRRSSSSTTTUWWWWYYYZZZZŹŻ  68
15|=     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 4
   A B C D E F G H I J K L M N O      Pawel_Mazurek            AIKNOSU   160 
   ------------------------------  -> Maciej_Skrzypczak        BET       99  
 1|=     '       =       '     =| --Championship Player's choices (your play: 4)
 2|  -       "       "       -  | best  3M BET     26 23.37% 
 3|    -       '   '       -    |  1.78 8M BET     25 22.33% 
 4|'     -       '     O R A N Y|  6.13 6F BET     20 20.95% 
 5|        -         E K O      |  5.66*O1 BET(Y)  24 20.53% 
 6|  "       "       H O     "  |  10.2 7B BET     17 19.75% 
 7|    '       K O L E Ń   '    |  11.0 M1 BET(A)  14 19.26% 
 8|=   R Ę C Z O N A     '     =|  13.1 H4 BET(ON) 11 18.56% 
 9|    '     A '   Ć M I Ł A M  |  15.5 6G ET      11 18.17% B
10|  "       Ś       "       "  |  15.1 3M BE      18 18.05% T
11|        -           -        |  14.9 6F BE      14 17.62% T
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAAAĄBCCDDDEEEEFGGHIIIIIIIJJKLLŁMNNNOÓPPP
14|  -       "       "       -  | RRSSSSTTUUWWWWYYYZZZZŹŻ  67
15|=     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 5
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            AUWAWES   160 
   ------------------------------     Maciej_Skrzypczak        AEILPSŹ  123 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       - E| 0.305*B8  WSUWA   26 74.53% AE
 3|    -       '   '       -   T| best  N2  WE(N)US 25 73.73% AAW
 4|'     -       '     O R A N Y|  2.32 B5  WSUWA   22 73.40% AE
 5|        -         E K O      |  5.32 B6  SUWA    21 71.97% AWE
 6|  "       "       H O     "  |  4.77 L8  S(Ł)AWA 16 71.69% UWE
 7|    '       K O L E Ń   '    |  5.90 10M SUW     24 71.54% AAWE
 8|=   R Ę C Z O N A     '     =|  4.71 N2  WE(N)A  15 71.27% UAWS
 9|    '     A '   Ć M I Ł A M  |  9.40 10M AUA     24 69.94% WWES
10|  "       Ś       "       "  |  9.93 N6  SWE(M)U 16 69.26% AAW
11|        -           -        |  10.3 N2  WA(N)A  15 69.11% UWES
12|'     -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAĄBCCDDDEEEFGGHIIIIIIIJJKLLŁMNNNOÓPPPRRS
14|  -       "       "       -  | SSTTUWWYYYZZZZŹŻ  60
15|=     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 5
   A B C D E F G H I J K L M N O      Pawel_Mazurek            AAEEIPY   186 
   ------------------------------  -> Maciej_Skrzypczak        A         123 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       - E| best *xch ??????? 0 12.92% A
 3|    -       '   '       -   T|  2.18 J9  (M)A    5 12.32% 
 4|'     -       '     O R A N Y|  3.34 N9  (M)A    5 12.31% 
 5|        -         E K O      |  3.06 12A A(A)    3 11.97% 
 6|  "       "       H O     "  |  2.64 10A A(U)    4 11.94% 
 7|    '       K O L E Ń   '    |  2.60 12B (A)A    2 11.92% 
 8|= W R Ę C Z O N A     '     =|  4.44 M3  A(A)    4 11.46% 
 9|  S '     A '   Ć M I Ł A M  |  5.33 N8  A(M)    3 11.30% 
10|  U       Ś       "       "  |  5.14 M9  (A)A    2 11.26% 
11|  W     -           -        |  4.52 L3  A(RO)   3 11.12% 
12|' A   -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAĄBCCDDDEEEEFGGHIIIIIIIJJKLLŁMNNNOÓPPPRR
14|  -       "       "       -  | SSSTTUWWYYYZZZZŹŻ  61
15|=     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 6
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            EAIIICŁ  186 
   ------------------------------     Maciej_Skrzypczak        ?AĄIJSW  123 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       - E| best *N2  CE(N)IŁA  39 87.17% II
 3|    -       '   '       -   T|  2.45 N2  CE(N)IŁ   37 86.07% AII
 4|'     -       '     O R A N Y|  7.69 N6  IŁA(M)I   12 84.05% EIC
 5|        -         E K O      |  10.2 13B ŁACIE     26 83.05% II
 6|  "       "       H O     "  |  10.8 10J II         11 82.70% EAICŁ
 7|    '       K O L E Ń   '    |  14.6 N9  (M)AICIE   20 81.42% IŁ
 8|= W R Ę C Z O N A     '     =|  14.8 12A Ł(A)CIE   22 81.23% AII
 9|  S '     A '   Ć M I Ł A M  |  16.6 B8  (WSUWA)ŁA 22 80.47% EIIIC
10|  U       Ś       "       "  |  17.9 A12 ACIE       21 80.20% IIŁ
11|  W     -           -        |  16.0 F8  (ZAŚ)CIEŁA 21 79.90% II
12|' A   -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAAĄBCDDDEEEFGGHIIIIJJKLLMNNNOÓPPPRRSSSTTU
14|  -       "       "       -  | WWYYYZZZZŹŻ  55
15|=     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 6
   A B C D E F G H I J K L M N O      Pawel_Mazurek            AGIINÓP  225 
   ------------------------------  -> Maciej_Skrzypczak        KLAT      123 
 1|=     '       =       '     B| --Championship Player's choices (your play: 2)
 2|  -       "       "       C E| 0.377 A12 TALK    32 8.010% 
 3|    -       '   '       - E T| best *A12 KLAT    32 7.899% 
 4|'     -       '     O R A N Y|  9.47 12A T(A)LK  18 6.186% A
 5|        -         E K O   I  |  10.8 12A L(A)TKA 20 5.550% 
 6|  "       "       H O     Ł  |  9.05 D4  TAKL(Ę) 24 5.486% 
 7|    '       K O L E Ń   ' A  |  13.2 12A T(A)KLA 20 5.293% 
 8|= W R Ę C Z O N A     '     =|  13.5 D4  KLAT(Ę) 24 5.241% 
 9|  S '     A '   Ć M I Ł A M  |  15.7 12A T(A)KA  16 5.139% L
10|  U       Ś       "       "  |  16.2 12A K(A)TA  16 4.817% L
11|  W     -           -        |  19.2 3M  K(ET)   16 4.691% LAT
12|' A   -       '       -     '| --Tracking-----------------------------------
13|    -       '   '       -    | ??AAĄBCDDDEEEFGGHIIIIIIJJLMNNNOÓPPPRRSSSTUWW
14|  -       "       "       -  | YYYZZZZŹŻ  53
15|=     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 7
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            IIIIDD?   225 
   ------------------------------     Maciej_Skrzypczak        ĄJPRSŹŻ 155 
 1|=     '       =       '     B| --Championship Player's choices (your play: 8)
 2|  -       "       "       C E| best  J9  (M)IDI 8  93.46% IID?
 3|    -       '   '       - E T| 0.306 N9  (M)IDI 8  93.30% IID?
 4|'     -       '     O R A N Y|  2.75 12A (KA)DI 12 92.50% IIID?
 5|        -         E K O   I  |  2.51 10J II     11 92.47% IIDD?
 6|  "       "       H O     Ł  |  3.69 10N II     9  92.29% IIDD?
 7|    '       K O L E Ń   ' A  |  4.51 8L  ID     12 92.14% IIID?
 8|= W R Ę C Z O N A     '     =|  4.39 12A (KA)ID 12 92.13% IIID?
 9|  S '     A '   Ć M I Ł A M  |  5.01*M6  ID     14 92.04% IIID?
10|  U       Ś       "       "  |  7.05 10J ID     13 91.33% IIID?
11|  W     -           -        |  10.6 10N ID     10 90.15% IIID?
12|K A   -       '       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ?AAĄBCDEEEFGGHIIJJLMNNNOÓPPPRRSSSTUWWYYYZZZZ
14|A -       "       "       -  | ŹŻ  46
15|T     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 7
   A B C D E F G H I J K L M N O      Pawel_Mazurek            ?CDIIIS   239 
   ------------------------------  -> Maciej_Skrzypczak        PUJESZ    155 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       C E| best *12A (KA)PUJESZ 30 10.76% 
 3|    -       '   '       - E T| 0.327 D2  ZEPSUJ(Ę) 32 10.73% 
 4|'     -       '     O R A N Y|  6.25 O6  UJE        34 9.557% PSZ
 5|        -         E K O   I  |  6.29 E6  SU(C)ZEJ   30 9.107% P
 6|  "       "       H O   I Ł  |  7.13 10M JUS        28 8.899% PEZ
 7|    '       K O L E Ń   D A  |  7.50 E7  S(C)ZEP    22 8.873% UJ
 8|= W R Ę C Z O N A     '     =|  6.58 D4  PSUJ(Ę)   28 8.780% EZ
 9|  S '     A '   Ć M I Ł A M  |  7.23 D4  PUSZ(Ę)   24 8.491% JE
10|  U       Ś       "       "  |  5.11 N9  (M)USZEJ   34 8.449% P
11|  W     -           -        |  8.10 D4  SZUJ(Ę)   26 8.243% PE
12|K A   -       '       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ??AAĄBCDDEEFGGHIIIIIJLMNNNOÓPPRRSSTWWYYYZZZŹ
14|A -       "       "       -  | Ż  45
15|T     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 8
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            IIIDPP?   239 
   ------------------------------     Maciej_Skrzypczak        ĄEHITZŻ 185 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       C E| best *10M DIP    15 93.45% IIP?
 3|    -       '   '       - E T|  5.96 D5  PIP(Ę) 10 91.26% IID?
 4|'     -       '     O R A N Y|  6.93 C12 (P)IP  10 90.95% IIDP?
 5|        -         E K O   I  |  6.73 13C ID     17 90.78% IIPP?
 6|  "       "       H O   I Ł  |  7.56 15A (T)IPI 7  90.67% IDP?
 7|    '       K O L E Ń   D A  |  10.1 10J ID     13 90.33% IIPP?
 8|= W R Ę C Z O N A     '     =|  9.25 10N II     9  90.31% IDPP?
 9|  S '     A '   Ć M I Ł A M  |  10.3 3M  P(ET)  16 89.96% IIIDP?
10|  U       Ś       "       "  |  10.6 10J II     11 89.76% IDPP?
11|  W     -           -        |  11.6 J9  (M)IDI 8  89.62% IPP?
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ?AAĄBCDEEFGGHIIJLMNNNOÓRRSSTWWYYYZZZŹŻ  38
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 8
   A B C D E F G H I J K L M N O      Pawel_Mazurek            ?ADIIPŹ  254 
   ------------------------------  -> Maciej_Skrzypczak        SOLE      185 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       C E| best *11D SOLE    34 16.87% 
 3|    -       '   '       - E T|  2.42 11D SOL     30 16.36% E
 4|'     -       '     O R A N Y|  16.1 13C EL      17 11.10% SO
 5|        -         E K O   I  |  13.2 11E OLE     28 11.04% S
 6|  "       "       H O   I Ł  |  14.7 11B (W)OLE  26 10.93% S
 7|    '       K O L E Ń   D A  |  19.5 11E EL      24 10.28% SO
 8|= W R Ę C Z O N A     '     =|  15.9 13C OLE     23 10.23% S
 9|  S '     A '   Ć M I Ł A M  |  17.2 6F  LOS     15 9.878% E
10|  U       Ś       "     D I P|  21.0 11D SE      16 9.334% OL
11|  W     -           -        |  20.9 H11 S(Z)EOL 18 9.216% 
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ??AAĄBCDEFGGHIIIIJMNNNÓPRRSTWWYYYZZZŹŻ  38
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 9
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            PIANIĄ?  254 
   ------------------------------     Maciej_Skrzypczak        CNÓSWYZ  219 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -       "       "       C E| best *E2  PIeNIĄ(C)A 78 98.32% 
 3|    -       '   '       - E T|  6.24 13H AlPINIĄ   74 97.54% 
 4|'     -       '     O R A N Y|  17.9 C7  P(R)Ą     26 95.29% IANI?
 5|        -         E K O   I  |  21.7 C12 (P)IPĄ    20 95.24% ANI?
 6|  "       "       H O   I Ł  |  25.3 F8  (ZAŚLE)PIĄ 20 94.22% ANI?
 7|    '       K O L E Ń   D A  |  26.2 D4  PIAN(Ę)   20 93.93% IĄ?
 8|= W R Ę C Z O N A     '     =|  27.6 J9  (M)Ą      17 93.49% PIANI?
 9|  S '     A '   Ć M I Ł A M  |  25.3 D4  PINI(Ę)   20 93.41% AĄ?
10|  U       Ś       "     D I P|  27.7 C6  PA(R)Ą    26 92.88% INI?
11|  W   S O L E       -        |  29.6 C5  NAI(R)Ą   26 92.73% PI?
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ?ABCDEFGGHIIJMNNÓRRSTWWYYYZZZŹŻ  31
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 9
   A B C D E F G H I J K L M N O      Pawel_Mazurek            DFGGYZZ   332 
   ------------------------------  -> Maciej_Skrzypczak        WYBJ      219 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -     P "       "       C E|  2.58*6B  WYB(I)J 18 0.7235% 
 3|    -   I   '   '       - E T|  2.98 3M  B(ET)   20 0.6820% WYJ
 4|'     - e     '     O R A N Y| best  3B  WYB(I)J 20 0.5429% 
 5|        N         E K O   I  |  1.12 4B  WYJ(e)B 18 0.4708% 
 6|  "     I "       H O   I Ł  |  6.96 4C  WJ(e)B  14 0.4215% Y
 7|    '   Ą   K O L E Ń   D A  |  6.33 3C  WB(I)J  16 0.4022% Y
 8|= W R Ę C Z O N A     '     =|  7.01 4D  W(e)BY  12 0.3506% J
 9|  S '   A A '   Ć M I Ł A M  |  11.4 4D  J(e)B   12 0.3420% WY
10|  U       Ś       "     D I P|  9.39 6C  WB(I)J  14 0.2896% Y
11|  W   S O L E       -        |  15.7 14A (A)J    8  0.2861% WYB
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ?ACDEFGGHIIMNNÓRRSTWYYZZZŹŻ  27
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 10
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            FGRSWZZ   332 
   ------------------------------     Maciej_Skrzypczak        AEHMRYŹ  237 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -     P "       "       C E|  22.4*3C  GZ(I)SZ   16 98.48% FRW
 3|    -   I   '   '       - E T|  6.09 4A  ZGRZ(e)W  16 96.97% FS
 4|'     - e     '     O R A N Y|  14.5 4B  WSZ(e)RZ  10 96.97% FG
 5|        N         E K O   I  |  20.7 C4  SZ(Y)F(R) 15 96.97% GRWZ
 6|  W Y B I J       H O   I Ł  |  24.6 F8  (ZAŚLE)SZ 14 96.97% FGRWZ
 7|    '   Ą   K O L E Ń   D A  |  33.8 14A (A)RF     14 96.21% GSWZZ
 8|= W R Ę C Z O N A     '     =|  8.95 4B  GRZ(e)SZ  14 95.83% FW
 9|  S '   A A '   Ć M I Ł A M  | 0.163 3M  F(ET)     28 95.45% GRSWZZ
10|  U       Ś       "     D I P|  9.34 4C  SZ(e)RZ   8  93.94% FGW
11|  W   S O L E       -        |  30.9 4C  RZ(e)SZ   8  93.94% FGW
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ?ACDEGHIIMNNÓRTYYZŹŻ  20
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 10
   A B C D E F G H I J K L M N O      Pawel_Mazurek            FIRTWZŻ  348 
   ------------------------------  -> Maciej_Skrzypczak        ÓC       237 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -     P "       "       C E| best *J9 (M)ÓC 19 1.515% 
 3|    G Z I S Z   '       - E T| 0.0836 L2 CÓ(RO) 9  0.0000% 
 4|'     - e     '     O R A N Y|  16.5 xch C      0  0.0000% Ó
 5|        N         E K O   I  |  37.5 9A Ó(S)  6  0.0000% C
 6|  W Y B I J       H O   I Ł  |  38.8 G1 ÓC(Z) 8  0.0000% 
 7|    '   Ą   K O L E Ń   D A  |  39.5 xch Ó     0  0.0000% C
 8|= W R Ę C Z O N A     '     =|  43.2 B5 Ó(W)  6  0.0000% C
 9|  S '   A A '   Ć M I Ł A M  |  51.6 xch CÓ    0  0.0000% 
10|  U       Ś       "     D I P| --Tracking-----------------------------------
11|  W   S O L E       -        | ?ADEFGHIIMNNRRTWYYZŹŻ  21
12|K A P U J E S Z       -     '|
13|L   -       '   '       -    |
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 11
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            FGMRWŻ?  348 
   ------------------------------     Maciej_Skrzypczak        ADHNRYZ   256 
 1|=     '       =       '     B| --Championship Player's choices (your play: 2)
 2|  -     P "       "       C E| best  xch FGRWŻ 0  100.0% M?
 3|    G Z I S Z   '       - E T|  9.18*3M  F(ET)  28 100.0% GMRWŻ?
 4|'     - e     '     O R A N Y|  17.5 10A F(U)G  11 100.0% MRWŻ?
 5|        N         E K O   I  |  21.7 14A (A)MF  16 100.0% GRWŻ?
 6|  W Y B I J       H O   I Ł  |  24.3 xch FMRWŻ 0  100.0% G?
 7|    '   Ą   K O L E Ń   D A  |  24.6 14A (A)Ż  12 100.0% FGMRW?
 8|= W R Ę C Z O N A     '     =|  25.3 xch FGMWŻ 0  100.0% R?
 9|  S '   A A '   Ć M I Ł A M  |  28.3 xch FGMRWŻ 0  100.0% ?
10|  U       Ś       Ó     D I P|  33.9 3M  M(ET)  16 100.0% FGRWŻ?
11|  W   S O L E     C -        |  44.3 xch FGMRŻ 0  100.0% W?
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ADEHIINNRTYYZŹ  14
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Maciej_Skrzypczak: Turn 11
   A B C D E F G H I J K L M N O      Pawel_Mazurek            ?EGMRWŻ  376 
   ------------------------------  -> Maciej_Skrzypczak        ATRZY     256 
 1|=     '       =       '     B| --Championship Player's choices (your play: 1)
 2|  -     P "       "       C E| best *O10 (P)ATRZY 33 6.818% 
 3|    G Z I S Z   '       F E T|  64.6 14A (A)TARY  14 1.515% Z
 4|'     - e     '     O R A N Y|  61.6 O7  TA       14 0.7576% RZY
 5|        N         E K O   I  |  33.9 14A (A)RATY  14 0.0000% Z
 6|  W Y B I J       H O   I Ł  |  48.9 C12 (P)YTA   14 0.0000% RZ
 7|    '   Ą   K O L E Ń   D A  |  49.8 13C AR       15 0.0000% TZY
 8|= W R Ę C Z O N A     '     =|  51.7 F1  TA(S)Z   13 0.0000% RY
 9|  S '   A A '   Ć M I Ł A M  |  54.3 F3  (S)ZY(J) 11 0.0000% ATR
10|  U       Ś       Ó     D I P|  55.5 C12 (P)YT    12 0.0000% ARZ
11|  W   S O L E     C -        |  57.5 N9  (MI)ZARY 16 0.0000% T
12|K A P U J E S Z       -     '| --Tracking-----------------------------------
13|L   -       '   '       -    | ?DEGHIIMNNRWYŹŻ  15
14|A -       "       "       -  |
15|T     '       =       '     =|
   ------------------------------

Pawel_Mazurek: Turn 12
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            WGRYŻM?  376 
   ------------------------------     Maciej_Skrzypczak        DEHIINN   289 
 1|=     '       =       '     B| --Championship Player's choices (your play: 7)
 2|  -     P "       "       C E| best  11J (C)YG 14 100.0% WRŻM?
 3|    G Z I S Z   '       F E T|  9.72 K9  (I)W  8  100.0% GRYŻM?
 4|'     - e     '     O R A N Y|  15.7 7M  (DA)G 6  100.0% WRYŻM?
 5|        N         E K O   I  |  43.8 14A (A)G  8  100.0% WRYŻM?
 6|  W Y B I J       H O   I Ł  |  45.8 D11 (SU)M 6  100.0% WGRYŻ?
 7|    '   Ą   K O L E Ń   D A  |  51.6 14A (A)M  6  100.0% WGRYŻ?
 8|= W R Ę C Z O N A     '     =|  57.8*14A (A)Ż 12 100.0% WGRYM?
 9|  S '   A A '   Ć M I Ł A M  |  61.5 N9  (MI)M 8  100.0% WGRYŻ?
10|  U       Ś       Ó     D I P|  62.5 H6  Ż(ON) 7  100.0% WGRYM?
11|  W   S O L E     C -       A|  65.0 15M RŻ(Y) 8  100.0% WGYM?
12|K A P U J E S Z       -     T| --Tracking-----------------------------------
13|L   -       '   '       -   R| DEHIINNŹ  8
14|A -       "       "       - Z|
15|T     '       =       '     Y|
   ------------------------------

Maciej_Skrzypczak: Turn 12
   A B C D E F G H I J K L M N O      Pawel_Mazurek            ?GIMRWŹ  388 
   ------------------------------  -> Maciej_Skrzypczak        NE        289 
 1|=     '       =       '     B| --Championship Player's choices (your play: 7)
 2|  -     P "       "       C E| best  11J (C)NE    8  
 3|    G Z I S Z   '       F E T|  1.39 11J (C)EN    8  
 4|'     - e     '     O R A N Y|  3.01 6B  (WYBIJ)E 15 N
 5|        N         E K O   I  |  6.98 B14 (Ż)E    9  N
 6|  W Y B I J       H O   I Ł  |  10.8 C3  (G)EN(Y) 7  
 7|    '   Ą   K O L E Ń   D A  |  14.9 C12 (P)E     6  N
 8|= W R Ę C Z O N A     '     =|  14.9*N14 EN       11 
 9|  S '   A A '   Ć M I Ł A M  |  15.0 15A (T)EN    10 
10|  U       Ś       Ó     D I P|  15.2 G3  (Z)EN    3  
11|  W   S O L E     C -       A|  22.6 H5  NE(ON)   4  
12|K A P U J E S Z       -     T| --Tracking-----------------------------------
13|L   -       '   '       -   R| ?DGHIIMNRWYŹ  12
14|A Ż       "       "       - Z|
15|T     '       =       '     Y|
   ------------------------------

Pawel_Mazurek: Turn 13
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            WGRYMŹ?  388 
   ------------------------------     Maciej_Skrzypczak        DHIIN     300 
 1|=     '       =       '     B| --Championship Player's choices (your play: urp)
 2|  -     P "       "       C E| best  F8  (ZAŚLE)MY 18 100.0% WGRŹ?
 3|    G Z I S Z   '       F E T|  15.0 H12 (Z)WoŹ   33 100.0% GRYM
 4|'     - e     '     O R A N Y|  17.0 H12 (Z)MYW    18 100.0% GRŹ?
 5|        N         E K O   I  |  23.0 M12 RYG       17 100.0% WMŹ?
 6|  W Y B I J       H O   I Ł  |  41.0 15K ŹGa(NY)  18 100.0% WRYM
 7|    '   Ą   K O L E Ń   D A  |  47.0 F8  (ZAŚLE)My 12 100.0% WGRYŹ
 8|= W R Ę C Z O N A     '     =|  59.0 13C oM        14 100.0% WGRYŹ
 9|  S '   A A '   Ć M I Ł A M  |  59.0 13C iM        14 100.0% WGRYŹ
10|  U       Ś       Ó     D I P|  59.0 G5  Mę(KO)   15 100.0% WGRYŹ
11|  W   S O L E     C -       A|  38.9*H12 (Z)WóŹ  33 0.0000% GRYM
12|K A P U J E S Z       -     T| --Tracking-----------------------------------
13|L   -       '   '       -   R| DHIIN  5
14|A Ż       "       "       E Z|
15|T     '       =       '   N Y|
   ------------------------------

Maciej_Skrzypczak: Turn 13
   A B C D E F G H I J K L M N O      Pawel_Mazurek            GRYM      421 
   ------------------------------  -> Maciej_Skrzypczak        DHIIN     300 
 1|=     '       =       '     B| --Championship Player's choices (your play: 9)
 2|  -     P "       "       C E| best  K11 IND     14 HI
 3|    G Z I S Z   '       F E T| best  F1  HI(S)   12 DIN
 4|'     - e     '     O R A N Y|  3.00 11J (C)HI   12 DIN
 5|        N         E K O   I  |  3.00 11I I(C)H   12 DIN
 6|  W Y B I J       H O   I Ł  |  3.00 I3  IND     11 HI
 7|    '   Ą   K O L E Ń   D A  |  6.00 5A  HI      6  DIN
 8|= W R Ę C Z O N A     '     =|  6.00 H4  NIH(ON) 8  DI
 9|  S '   A A '   Ć M I Ł A M  |  7.00 B4  HI(W)   5  DIN
10|  U       Ś       Ó     D I P|  16.0*15F ID(Ź)  12 HIN
11|  W   S O L E     C -       A|  17.0 K11 ID      12 HIN
12|K A P U J E S Z       -     T| --Tracking-----------------------------------
13|L   -       ' W '       -   R| GMRY  4
14|A Ż       "   ó   "       E Z|
15|T     '       Ź       '   N Y|
   ------------------------------

Pawel_Mazurek: Turn 14
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            GMRY      421 
   ------------------------------     Maciej_Skrzypczak        HIN       312 
 1|=     '       =       '     B| --Championship Player's choices (your play: 8)
 2|  -     P "       "       C E| best  5H  GR(EKO) 8  100.0% MY
 3|    G Z I S Z   '       F E T|  2.00 H5  GR(ON)  6  100.0% MY
 4|'     - e     '     O R A N Y|  8.00 G2  G(Z)Y   6  100.0% MR
 5|        N         E K O   I  |  10.0 M12 RYG     17 100.0% M
 6|  W Y B I J       H O   I Ł  |  11.0 H6  G(ON)   5  100.0% MRY
 7|    '   Ą   K O L E Ń   D A  |  12.0 H6  M(ON)   4  100.0% GRY
 8|= W R Ę C Z O N A     '     =|  13.0 14D RYM     16 100.0% G
 9|  S '   A A '   Ć M I Ł A M  |  14.0*O7  MY      17 100.0% GR
10|  U       Ś       Ó     D I P|  15.0 15F (IDŹ)MY 16 100.0% GR
11|  W   S O L E     C -       A|  15.0 11J (C)YG   14 100.0% MR
12|K A P U J E S Z       -     T| --Tracking-----------------------------------
13|L   -       ' W '       -   R| HIN  3
14|A Ż       "   ó   "       E Z|
15|T     '   I D Ź       '   N Y|
   ------------------------------

Maciej_Skrzypczak: Turn 14
   A B C D E F G H I J K L M N O      Pawel_Mazurek            GR        438 
   ------------------------------  -> Maciej_Skrzypczak        HIN       312 
 1|=     '       =       '     B| --Championship Player's choices (your play: 4)
 2|  -     P "       "       C E| best  H4  NIH(ON) 8  
 3|    G Z I S Z   '       F E T|  19.0 11J (C)HI   12 N
 4|'     - e     '     O R A N Y|  19.0 11I I(C)H   12 N
 5|        N         E K O   I  |  19.0*F1  HI(S)   12 N
 6|  W Y B I J       H O   I Ł  |  20.0 12M HI(T)   6  N
 7|    '   Ą   K O L E Ń   D A M|  21.0 14E HI      10 N
 8|= W R Ę C Z O N A     '     Y|  23.0 F14 H(I)    10 IN
 9|  S '   A A '   Ć M I Ł A M  |  24.0 10A H(U)N   7  I
10|  U       Ś       Ó     D I P|  25.0 K11 IN      10 H
11|  W   S O L E     C -       A|  25.0 5A  HI      6  N
12|K A P U J E S Z       -     T| --Tracking-----------------------------------
13|L   -       ' W '       -   R| GR  2
14|A Ż       "   ó   "       E Z|
15|T     '   I D Ź       '   N Y|
   ------------------------------

Pawel_Mazurek: Turn 15
   A B C D E F G H I J K L M N O   -> Pawel_Mazurek            GR        438 
   ------------------------------     Maciej_Skrzypczak        N         324 
 1|=     '   H   =       '     B| --Championship Player's choices (your play: 2)
 2|  -     P I       "       C E| best  13M GR(R)   13 100.0% 
 3|    G Z I S Z   '       F E T|  5.00*5H  GR(EKO) 8  100.0% 
 4|'     - e     '     O R A N Y|  6.00 10A R(U)G   7  100.0% 
 5|        N         E K O   I  |  6.00 10A G(U)R   7  100.0% 
 6|  W Y B I J       H O   I Ł  |  7.00 H5  GR(ON)  6  100.0% 
 7|    '   Ą   K O L E Ń   D A M|  18.0 14M G(EZ)   5  100.0% R
 8|= W R Ę C Z O N A     '     Y|  18.0 H6  G(ON)   5  100.0% R
 9|  S '   A A '   Ć M I Ł A M  |  22.0 D11 (SU)R   5  100.0% G
10|  U       Ś       Ó     D I P| --Tracking-----------------------------------
11|  W   S O L E     C -       A| N  1
12|K A P U J E S Z       -     T|
13|L   -       ' W '       -   R|
14|A Ż       "   ó   "       E Z|
15|T     '   I D Ź       '   N Y|
   ------------------------------

   A B C D E F G H I J K L M N O   -> Pawel_Mazurek                      448 
   ------------------------------     Maciej_Skrzypczak        N         324 
 1|=     '   H   =       '     B| 
 2|  -     P I       "       C E|  Game over.
 3|    G Z I S Z   '       F E T| 
 4|'     - e     '     O R A N Y| --Tracking-----------------------------------
 5|        N     G R E K O   I  | N  1
 6|  W Y B I J       H O   I Ł  |
 7|    '   Ą   K O L E Ń   D A M|
 8|= W R Ę C Z O N A     '     Y|
 9|  S '   A A '   Ć M I Ł A M  |
10|  U       Ś       Ó     D I P|
11|  W   S O L E     C -       A|
12|K A P U J E S Z       -     T|
13|L   -       ' W '       -   R|
14|A Ż       "   ó   "       E Z|
15|T     '   I D Ź       '   N Y|
   ------------------------------

`;
