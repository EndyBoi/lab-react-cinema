import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CheckMovies extends Component {
	state = {
		movies: [],
	}

	async componentDidMount() {
		let res = await axios.get('http://localhost:5000/movies')
		this.setState({ movies: res.data })
	}
	displayMovies = () => {
		return this.state.movies.map((eachMovie) => {
			return (
				<div>
					<li>
						<strong>{eachMovie.title}</strong>
					</li>
					<div className=''>
						<img className='' src={eachMovie.image} alt={eachMovie.title}></img>
					</div>
					<Link to={`/movie/${eachMovie._id}`}>Show More</Link>
				</div>
			)
		})
	}
	render() {
		return (
			<div>
				<h1>on movies page</h1>
				{this.displayMovies()}
			</div>
		)
	}
}

export default CheckMovies
