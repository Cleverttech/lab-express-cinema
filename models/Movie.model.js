
const {Schema, model} = require('mongoose')
let movieSchema = new Schema({
    title: String,
    director: String,
    stars: [""],
    image: String,
    description: String,
    showtimes: [""]
    },
    { 
      timestamps: true // records the time the project was created or updated
    })
  
   let NewMovie = model('movie', movieSchema) 
  module.exports = NewMovie