import React, { useState, useEffect } from 'react';
import chartModule from './chartModule';

const SelectBox = (props) => {
	let list = [];
	const handleSelect = (e) => {
		props.setCurrentList(e.target.value);
		console.log(e.target.value);
	}
	const initList = (list) =>{
		for (let i = 0; i < props.List.length; i++)
			list.push(props.List[i].farm_id);
	}

	initList(list);
	console.log(list);
	console.log(typeof (props.List));
	return (
		<div>
			<select onChange={handleSelect} defaultValue = {"농장선택해주세용"}>
				{
					list.map((item) => (
						<option value={item} key={item}>
							{item}
						</option>
					))
				}
			</select>
			<hr />
			<p>
				{/* Selected: <b>{Selected}</b> */}
			</p>
		</div>
	);
}

export default SelectBox;
