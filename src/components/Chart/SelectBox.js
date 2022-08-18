import React, { useState, useEffect } from 'react';
import chartModule from './chartModule';
import styled from 'styled-components';


const IconSVG = styled.svg`
	margin-left: -23px;
	align-self: center;
	width: 24px;
	height: 24px;
`;

const SelectBox = (props) => {
	let list = [];
	const handleSelect = (e) => {
		let time='all';
		chartModule.getSenData(e.target.value, time).then((data) => {
			props.setData(chartModule.setChartData(data));
		});
		props.setCurrentList(e.target.value);
		console.log(e.target.value);
	}
	const initList = (list) => {
		for (let i = 0; i < props.List.length; i++)
			list.push(props.List[i].farm_id);
	}

	initList(list);
	console.log(list);
	console.log(typeof (props.List));
	return (
		<div>
			<select onChange={handleSelect} style={{marginLeft: '1rem', marginTop:'1rem'}}>
				<option value="default" disabled>
					농장을 선택해주세요.
				</option>
				{
					list.map((item) => (
						<option value={item} key={item}>
							{item}
						</option>
					))
				}
			</select>
			<IconSVG
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10 14L16 6H4L10 14Z"
					fill="#1A1A1A"
				/>
			</IconSVG>
		</div>
	);
}

export default SelectBox;
