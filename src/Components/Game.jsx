import React, { useEffect, useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../Who_winner';
import style from './Game.module.css';
import { store } from '../store';


const Game = () => {
	const [state, setState] = useState(store.getState())

	useEffect(() => {
		store.subscribe(()=>{
			setState(store.getState())
		})

	},[])

	const { isXNext, board } = state;
	
	const winner = calculateWinner( board );
	
	const handleClick = (index) => {
		const boardCopy = [...board];

		if (winner || boardCopy[index]) return;

		boardCopy[index] = isXNext ? 'X' : 'O';
		
		store.dispatch({type: 'COPY_BOARD', payload: boardCopy})
		store.dispatch({type: 'UPDATE',payload: !isXNext})
	};

	const startNewGame = () => {
		return (
			<button
				className={style.Start_btn}
				onClick={() => {
					store.dispatch({type:'NEW_GAME',payload: Array(9).fill(null)})
					store.dispatch({type: 'MOVE_X', payload: true})
				}}
			>
				Новоя игра
			</button>
		);
	};

	const who_winner = () => {
		if (winner) {
			return 'Победитель: ' + winner;
		} else if (!winner && board.includes(null)) {
			return 'Сейчас ходит: ' + (isXNext ? 'X' : 'O');
		} else if (!board.includes(null) && !winner) {
			return 'Ничья';
		}
	};

	return (
		<div className={style.wrapper}>
			{startNewGame()}
			<Board squares={board} click={handleClick} />
			<p className={style.text}>{who_winner()}</p>
		</div>
	);
};

export default Game;