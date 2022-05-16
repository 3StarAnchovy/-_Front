import React, { Component, useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import Chart from './Chart/Chart';

const Home = (props) => {
	const [User,setUser] = useState(false);
	return (
		// localStorage.getItem(props.UserInfo) ?
		// <div>
		// 	<Chart></Chart>
		// </div> :
		// <div></div>
		<div>
			<Chart></Chart>
		</div>
	)
}
//{localStorage.getItem(props.UserInfo)
export default Home;
