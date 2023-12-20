import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

export default class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Learing React'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Learing React'
			});
		}, 3000);
	}
	render() {
		console.log("Parent comp render")
		return (
			<div>
				I'm a Parent Component
				<RegComp name={this.state.name} />
				<PureComp name={this.state.name} />
			</div>
		)
	}
}
