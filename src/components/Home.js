import React, { Component, useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import WeatherInfo from './WeatherInfo';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
//import Chart from 'chart.js/auto';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);


class Hello extends Component {
	render() {
		return (
			<div>
				<h1>im hello</h1>
				<a
					href="#!"
					onClick={function (e) {
						e.preventDefault();
						this.props.getMessage();
					}.bind(this)}>{this.props.message}</a>
				<a
					href="#!">{console.log("여긴 home")}</a>
			</div>
		);
	}
}
const data = {
	datasets: [
		{
			type: 'line',
			label: 'Dataset 1',
			borderColor: 'rgb(54, 162, 235)',
			borderWidth: 2,
			data: [
				{ x: 'January', y: 1 },
				{ x: 'February', y: 2 },
				{ x: 'March', y: 3 },
				{ x: 'April', y: null },
				{ x: 'May', y: 5 }
			],
			yAxisID: 'y_sub',
		}]
};


const Chart = () => {

	return (
		<Container>
			<Line type="line" data={data} />
		</Container>
	);
};


const Container = styled.div`
	width: 90vw;
	max-width: 900px;
	`;

const Home = () => {
	return (
		<div>
			<Chart></Chart>
		</div>
	)
}

export default Home;
