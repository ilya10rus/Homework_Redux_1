import React from 'react';
import style from './Board.module.css';
import Square from './Squares';
import PropTypes from 'prop-types';

const Board = ({ squares, click }) => {

	return (
		<div className={style.Board}>
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => click(i) } />
			))}
		</div>
	);
};

Board.propTypes = {
	squares: PropTypes.array,
	click: PropTypes.func,
};

export default Board;
