// Define the Movie class

  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information

let moveInfo = document.getElementById("movie-info")

class Movie {
  title = ""
  cast = []
  description = ""
  rating = 5
  constructor(title, cast, description, rating = 5) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }
  updateRating(newRating) {
    this.rating = newRating
  }
  displayInfo() {
    moveInfo.innerHTML += `
      <p>Title: ${this.title}</p>
      <ul>Cast: ${this.cast}</ul>
      <ul>Description: ${this.description}</ul>
      <ul>Rating: ${this.rating}/10</ul>
    `;
  }
}

// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie

Interstellar = new Movie("Interstellar", [' Matthew McConaughey', ' Matt Damon', ' Jessica Chastain', ' Anne Hathaway', ' Timothée Chalamet'], 'Interstellar is a 2014 epic science fiction film directed by Christopher Nolan. Set in a dystopian future where Earth is suffering from catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.', 10)
Interstellar.displayInfo()

let Movies = []
Movies.push(Interstellar)

function updateMovieRating(title, newRating) {
  for (i in Movies) {
    console.log(Movies[i])
    if (Movies[i].title == title) {
      Movies[i].rating = newRating
    }
  }
}

updateMovieRating("Interstellar", 11)
Interstellar.displayInfo()