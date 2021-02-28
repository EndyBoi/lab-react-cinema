const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
	res.json({ message: 'index' })
})

router.get('/movies', (req, res) => {
	Movie.find()
		.then((movies) => res.json(movies))
		.catch((error) =>
			console.log(
				'An error happened while trying to collect data from database',
				error
			)
		)
})

router.get('/movies/:id', (req, res) => {
	Movie.findById(req.params.id)
		.then((movies) => res.json(movies))
		.catch((error) =>
			console.log(
				'An error happened while trying to collect data from database',
				error
			)
		)
})

router.post('/movies/new', (req, res) => {
	Movie.create(req.body)
		.then(res.json('Movie is added'))
		.catch((error) =>
			console.log(
				'An error happened while trying to collect data from database',
				error
			)
		)
})

module.exports = router
