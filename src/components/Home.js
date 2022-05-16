import React, { Component, useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import Chart from './Chart/Chart';

const Home = (props) => {
	//const [User, setUser] = useState(false);
	const [isLogined, setisLogined] = useState(false);
	useEffect(() => {
		if (props.UserInfo)
			setisLogined(true);
		else
			setisLogined(false);
	})

	if (isLogined)
		return (
			<div>
				<Chart></Chart>
			</div>
		)
	else
		return (
			<div>
			</div>
		)
}
//{localStorage.getItem(props.UserInfo)
export default Home;
