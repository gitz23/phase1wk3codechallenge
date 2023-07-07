//executes after hte html doc loads
document.addEventListener('DOMContentLoaded', getMovies)

//fetches movie data from server
function getMovies(){
    fetch('http://localhost:3000/films')
    .then(resp => resp.json())
    .then(data =>{
        displayMovieNames(data)
        fetchFetchirstMovie()
    })
}

//displays the movies onto the left side of the htll doc
function displayMovieNames(movieName){
    let movieContainer = document.getElementById('leftDiv')
    let movieList = document.getElementById('films')


    movieName.forEach(movie=> {
        let movieItem = document.createElement('li')
        movieItem.classList = "movieNameList"
        let availableTickets = parseInt(`${movie.capacity} - ${movie.tickets_sold}`)
        movieItem.innerHTML = `
            ${movie.poster}
            <br>
            ${movie.title} 
            <br> 
            ${movie.runtime}
            <br>
            ${movie.showtime}
            <br> 
            ${availableTickets}
            <br>`
        movieList.appendChild(movieItem)
    })
    console.log(movieList)
}

//


//fetch the first movie on the right side by default
function fetchFetchirstMovie(){
    fetch(`http://localhost:3000/films/1`)
    .then(resp => resp.json())
    .then(data => {
        displayFirstMovie(data)
    })
}

//display the first movie onto the right side
function displayFirstMovie(firstMovie){
    let movieContainer = document.getElementById('rightDiv')
    let availableTickets = parseInt(`${firstMovie.capacity} - ${firstMovie.tickets_sold}`)
    console.log(firstMovie);

    let firstMovieDetails = document.createElement('div')
    firstMovieDetails.innerHTML = `
        ${firstMovie.poster}
        <br>
        ${firstMovie.title}
        <br>
        ${firstMovie.runtime}
        <br>
        ${firstMovie.showtime}
        <br>
        ${availableTickets}` 
    movieContainer.appendChild(firstMovieDetails)
}