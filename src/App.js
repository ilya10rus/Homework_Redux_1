import style from './App.module.css';
import React from 'react';
import Game from './Components/Game';


export const App = () => {
	
	return (
		<div className={style.App}>
			<Game />
		</div>
	);
};
