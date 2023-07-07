//executes after hte html doc loads
document.addEventListener('DOMContentLoaded', getMovies)

//fetches movie data from server
function getMovies(){
    fetch('http://localhost:3000/films')
    .then(resp => resp.json())
    .then(data =>{
        displayMovieNames(data)
    })
}

//displays the movies onto the left side of the htll doc
function displayMovieNames(movieName){
    let movieContainer = document.getElementById('leftDiv')



    movieName.forEach(movie=> {
        let movieDiv = document.createElement('div')
        movieDiv.classList = "movieNameDiv"
        movieDiv.innerHTML = `${movie.title} 
        <br> 
        ${movie.runtime}
         <br> 
        ${movie.capacity}
        <br> 
        ${movie.showtime} 
        <br> 
        ${movie.tickets_sold}
        <br> 
        ${movie.description}
        <br>
        ${movie.poster}`
        movieContainer.appendChild(movieDiv)
        // console.log(movieDiv)
    })
    // console.log(movieDiv)
}