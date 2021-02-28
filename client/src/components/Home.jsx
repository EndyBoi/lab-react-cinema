import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
	async callMyBackend() {
		let responseFromBackend = await axios.get('http://localhost:5000/')
		console.log(responseFromBackend)
	}
	render() {
		return (
			<div className=''>
				<Link to='/check-movies' className=''>
					Check the movies!
				</Link>
				<Link to='/new-movie' className=''>
					Add new movie!
				</Link>
				<h1>Welcome to Cinema Ironhack</h1>
			</div>
		)
	}
}
