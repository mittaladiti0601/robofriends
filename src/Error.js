import React, { Component } from 'react';

class Error extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		} 
	}

	componentDidCatch(error, info){
		this.setState({ hasError: true })
	}

	render(){
		if(this.state.hasError){
			return <h1>Oops!There is an Error :(</h1>
		}
		return this.props.children
	}
}

export default Error;