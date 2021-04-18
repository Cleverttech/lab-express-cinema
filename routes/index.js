const express = require('express');
const router = express.Router();

let myMovie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next)=>{
  myMovie.find()
  .then((data) => {
     res.render("movies.hbs", { data })

  }).catch((err) => {
      console.log(err) 
  })
})

router.get('/movies/:id', (req, res, next)=>{
     const {id}= req.params
  myMovie.findById(id)
  .then((data) => {
     res.render("movie-details.hbs", { data })
  }).catch((err) => {
      console.log(err) 
  })
})





module.exports = router;
