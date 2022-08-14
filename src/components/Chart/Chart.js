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
		//time = chartModule.currentTime(time);
		chartModule.getSenData(UserInfo, time).then((data) => {
			setData(chartModule.setChartData(data));
		})
	};

	useEffect(() => {
		let time = 'all';
		chartModule.getSenData(UserInfo, time).then((data) => {
			setData(chartModule.setChartData(data));
		})
	}, [])

	return (
		<div style={{maxWidth:'85%', margin:'auto'}}>
			<Button variant="primary" type="submit" size="sm"
				onClick={(e) => { senData('all', e) }} style={{ margin: '1rem' }}>
				전체
			</Button>
			<Button variant="primary" type="submit" size="sm"
				onClick={(e) => { senData('week', e) }} style={{ marginRight: '1rem' }}>
				일주일
			</Button>
			<Button variant="primary" type="submit" size="sm"
				onClick={(e) => { senData('today', e) }}>
				하루
			</Button>
			<Row style={{borderBottom:'20px solid transparent'}}>
				<Col md='6'>
					<Line type="line" data={Data[0]} style={{backgroundColor:'#F5F5F7',borderRadius:'18px'}}/>
				</Col>
				<Col md='6'>
					<Line type="line" data={Data[1]}  style={{backgroundColor:'#F5F5F7',borderRadius:'18px'}}/>
				</Col>
			</Row>
			<Row style={{borderBottom:'20px solid transparent'}}>
				<Col md='6'>
					<Line type="line" data={Data[2]}  style={{backgroundColor:'#F5F5F7',borderRadius:'18px'}}/>
				</Col>
				<Col md='6'>
					<Line type="line" data={Data[3]}  style={{backgroundColor:'#F5F5F7',borderRadius:'18px'}}/>
				</Col>
			</Row>
		</div>
	);
};

export default Chart;
