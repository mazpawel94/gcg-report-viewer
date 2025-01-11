import axios from 'axios';
import { EBoardFieldState, IBOardField } from '../../../../contexts/GameEntryContext';

interface ApiResponse {
  status: string;
  board: string;
  message: string;
}

const formatResponse = (board: string) => {
  const rows = board.split('|');
  const boardFieldsInfo: IBOardField[] = [];
  rows.forEach((row, rowIndex) => {
    const fields = row.split(',');
    fields.forEach((field, i) =>
      boardFieldsInfo.push({
        index: rowIndex * 15 + i,
        x: i,
        y: rowIndex,
        state: field ? EBoardFieldState.suggestion : EBoardFieldState.empty,
        letter: field || null,
      }),
    );
  });
  return boardFieldsInfo;
};

const useRecognizeBoardState = () => {
  const postRequest = async (file: File, callback: Function) => {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // temporary

    const formData = new FormData();
    formData.append('file', file);
    const {
      data: { status, board, message },
    } = await axios.post<ApiResponse>(`${CORS_PROXY}https://scrabblecam.com/process`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    callback(formatResponse(board));
    return true;
  };

  return { postRequest };
};

export default useRecognizeBoardState;
