import React, { Component, useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import Chart from './Chart/Chart';

const Home = (props) => {
	//const [User, setUser] = useState(false);
	const [isLogined, setisLogined] = useState(false);
	useEffect(() => {
		console.log(props.UserInfo);
		if (props.UserInfo)
			setisLogined(true);
		else
			setisLogined(false);
	})

	if (isLogined)
		return (
			<div style={{textAlign:'center'}}>
				<Chart UserInfo = {props.UserInfo}></Chart>
			</div>
		)
	else
		return (
			<div>
				<h1>hjihihihi</h1>
			</div>
		)
}
//{localStorage.getItem(props.UserInfo)
export default Home;
