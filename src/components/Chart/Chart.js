import React, { Component, useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
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
				{ x: 'March', y: null },
				{ x: 'April', y: 3 },
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

export default Chart;
