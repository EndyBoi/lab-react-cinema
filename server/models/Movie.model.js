const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moviesSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	director: String,
	stars: [String],
	image: String,
	description: String,
	showtimes: [String],
})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie
