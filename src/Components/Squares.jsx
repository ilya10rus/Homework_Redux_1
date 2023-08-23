import style from './Squares.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ onClick, value }) => {
	return (
		<button className={style.Square} onClick={onClick}>
			{value}
		</button>
	);
};

Square.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string,
};
export default Square;
