import React, { useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import { Line } from 'react-chartjs-2';
import chartModule from './chartModule';
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

const Chart = ({UserInfo}) => {
	const [Data, setData] = useState(
		{
			labels: ['새로고침을 눌러주세요'],
			datasets: [
				{
					type: 'line',
					label: 'Dataset 1',
					borderColor: 'rgb(54, 162, 235)',
					borderWidth: 2,
					data: [1, 1, 1, 1, 1],
					yAxisID: 'y_sub'
				}]
		}
	);
	// useEffect(() => {

	// })
	// setInterval(() => {

	// }, 60000);
	const senData = (e) => {
		console.log(UserInfo);
		chartModule.getSenData(UserInfo).then((data) => {
			setData(chartModule.setChartData(data));
			//console.log(result);
		})
	};

	return (
		<Container>
			<Button variant="primary" type="submit" size="sm" onClick={senData}>
				New Chart
			</Button>
			<Line type="line" data={Data} />
		</Container>
	);
};

const Container = styled.div`
	width: 90vw;
	max-width: 800px;
	`;

export default Chart;
