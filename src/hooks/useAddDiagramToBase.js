import { useContext } from 'react';

import context from '../context';
import { getCurrentMoves } from '../services/gameService';

const useAddDiagramToBase = () => {

    const { moves, actualMoveIndex } = useContext(context);

    const addDiagramCallback = async () => {
        // const id = await fetch('/api/', {
        //     method: 'POST',
        //     body: {
        //         moves,
        //         index: actualMoveIndex
        //     }
        // })
        const objectToSend = {
            moves: getCurrentMoves(moves, actualMoveIndex),
            letters: moves[actualMoveIndex].letters,
            index: actualMoveIndex,
            solutions: moves[actualMoveIndex]
        }
        console.log(objectToSend);
        return new Promise((resolve, reject) => {
            resolve({ id: '476' });
        })
    }

    return { addDiagramCallback };
}

export default useAddDiagramToBase;
