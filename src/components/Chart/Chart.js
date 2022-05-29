import React, { useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import { Line } from 'react-chartjs-2';
import chartModule from './chartModule';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
	Filler
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const Chart = ({ UserInfo }) => {
	const [Data, setData] = useState(
		[{
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
		}, {
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
		}, {
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
		}, {
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
		}]
	);

	//let today = '05-18'
	const senData = (time, e) => {
		console.log(UserInfo);
		time = chartModule.currentTime(time);
		chartModule.getSenData(UserInfo, time).then((data) => {
			setData(chartModule.setChartData(data));
		})
	};

	useEffect(() => {
		let time = chartModule.currentTime('all');
		chartModule.getSenData(UserInfo, time).then((data) => {
			setData(chartModule.setChartData(data));
		})
	}, [])

	// const canvas = document.querySelector(".canvas");
	// const context = canvas.getContext("2d");
	// const myChartOne = document.getElementById("myChartOne").getContext("2d");
	// const lineChar = new Chart(myChartOne, Data[0]);


	return (
		<Container style={{ textAlign: 'center', backgroundColor: 'yellow', maxWidth: '150%' }}>
			<Button variant="primary" type="submit" size="sm"
				onClick={(e) => { senData('all', e) }} style={{ margin: '1rem' }}>
				전체
			</Button>
			<Button variant="primary" type="submit" size="sm"
				onClick={(e) => { senData('today', e) }}>
				오늘 하루
			</Button>
			<Row>
				<Col md='6'>
					<Line type="line" data={Data[0]} />
				</Col>
				<Col md='6'>
					<Line type="line" data={Data[1]} />
				</Col>
			</Row>
			<Row>
				<Col md='6'>
					<Line type="line" data={Data[2]} />
				</Col>
				<Col md='6'>
					<Line type="line" data={Data[3]} />
				</Col>
			</Row>
		</Container>
	);
};

const Container = styled.div`
	width: 90vw;
	max-width: 800px;
	`;

export default Chart;
