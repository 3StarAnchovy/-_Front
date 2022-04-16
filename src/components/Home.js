import React, { Component, useState, useEffect } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import WeatherInfo from './WeatherInfo';

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

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: { test: "who am i" }
		}
	}
	render() {
		return (
			<div className="Home">
				<Hello
					message={this.state.message.test}
					getMessage={
						function (e) {
							//this.setState({ message: { test: "fuck" } });
							console.log("받아옵니다");
							fetch('http://localhost:3001')
								.then(res => res.json())
								.then(data => this.setState({ message: { test: data.test } }));
						}.bind(this)
					}></Hello>
					<WeatherInfo></WeatherInfo>
			</div >
		);
	}
}

export default Home;
