import { findPlayedMove } from "../services/gameService";

export const initialState = {
  moves: [],
  actualMoveIndex: undefined,
  actualOptionIndex: 0,
  withoutNewMove: false,
  player1: "",
  player2: "",
};

export const actionTypes = {
  setMovesArray: "SET_MOVES_ARRAY",
  setMoveIndex: "SET_MOVE_INDEX",
  incrementMoveIndex: "INCREMENT_MOVE_INDEX",
  decrementMoveIndex: "DECREMENT_MOVE_INDEX",
  incrementOptionIndex: "INCREMENT_OPTION_INDEX",
  decrementOptionIndex: "DECREMENT_OPTION_INDEX",
  setOptionIndex: "SET_OPTION_INDEX",
  setWithoutNewMove: "SET_WITHOUT_NEW_MOVE",
};

export function reducer(state, action) {
  const { moves, actualMoveIndex, actualOptionIndex } = state;

  switch (action.type) {
    case actionTypes.setMovesArray:
      return {
        ...state,
        moves: action.payload,
        actualMoveIndex: 0,
        actualOptionIndex: findPlayedMove(action.payload[0]).index,
        player1: action.payload[0].nick.replace("_", " "),
        player2: action.payload[1].nick.replace("_", " "),
      };

    case actionTypes.setMoveIndex:
      const newIndex =
        action.payload > -1
          ? action.payload
          : state.moves.length - 1 + action.payload;
      return {
        ...state,
        actualMoveIndex: newIndex,
        actualOptionIndex: findPlayedMove(moves[newIndex]).index,
      };

    case actionTypes.incrementMoveIndex:
      if (moves.length > actualMoveIndex + 2)
        return {
          ...state,
          actualMoveIndex: actualMoveIndex + 1,
          actualOptionIndex: findPlayedMove(moves[actualMoveIndex + 1]).index,
        };
      else return state;

    case actionTypes.decrementMoveIndex:
      if (actualMoveIndex > 0)
        return {
          ...state,
          actualMoveIndex: actualMoveIndex - 1,
          actualOptionIndex: findPlayedMove(moves[actualMoveIndex - 1]).index,
        };
      else return state;

    case actionTypes.setOptionIndex:
      return { ...state, actualOptionIndex: action.payload };

    case actionTypes.incrementOptionIndex:
      if (actualOptionIndex + 1 < moves[actualMoveIndex].choiceOptions.length)
        return { ...state, actualOptionIndex: actualOptionIndex + 1 };
      else return state;

    case actionTypes.decrementOptionIndex:
      if (state.actualOptionIndex !== 0)
        return { ...state, actualOptionIndex: state.actualOptionIndex - 1 };
      else return state;

    case actionTypes.setWithoutNewMove:
      return { ...state, withoutNewMove: action.payload };
  }
}
