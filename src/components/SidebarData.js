import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
	{
		title: 'Cctv',
		path: '/Cctv',
		icon: <BsIcons.BsPersonBoundingBox />,
		cName: 'nav-text'
	},
	{
		title: 'Home',
		path: '/',
		icon: <BsIcons.BsFillHouseDoorFill />,
		cName: 'nav-text'
	},
	{
		title: 'About',
		path: '/About',
		icon: <BsIcons.BsFillInfoCircleFill />,
		cName: 'nav-text'
	},
	{
		title: 'Contact Us',
		path: '/Contact',
		icon: <BsIcons.BsEnvelopeFill />,
		cName: 'nav-text'
	}
];
