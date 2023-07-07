//executes after the html doc loads
document.addEventListener('DOMContentLoaded', getMovies)

//fetches movie data from server
function getMovies(){
    fetch('http://localhost:3000/films')
    .then(resp => resp.json())
    .then(data =>{
        displayMovieNames(data)
    })
};

//displays the movies onto the left side of the html doc
function displayMovieNames(movieName){
    let movieList = document.getElementById('films')

    //iterates through the whole JSON array and for each item performs the following function
    movieName.forEach(movie=> {
        let movieItem = document.createElement('li')
        movieItem.classList = "movieNameList"
        movieItem.innerText = movie.title
        movieList.appendChild(movieItem)
        movieItem.addEventListener('click', () => {
            fetchFetchMovieData(movie)
        })  
    })
};

//displays the movie details
function fetchFetchMovieData(data){
    let list = document.getElementById('rightList')

        console.log(Object.values(data))

        let id = document.createElement('li')
        id.innerText = data.id 

        let poster = document.createElement('img')
        poster.classList = 'imagePoster'
        poster.src = data.poster

        let availableTickets = document.createElement('li')
        availableTickets.id = 'tickets'
        availableTickets.innerText = 'Available tickets:' + (data.capacity - data.tickets_sold)

        let runtime = document.createElement('li')
        runtime.classList = 'listItems'
        runtime.innerText = 'Runtime: ' + data.runtime

        let showtime = document.createElement('li')
        showtime.innerText = 'Showtime: ' + data.showtime

        let description = document.createElement('li')
        description.innerText = 'Description: ' + data.description

        //adds the button that listens to a click event that modifies the tickets
        let button = document.createElement('button')
        button.id = "buyButton"
        button.innerText = 'BUY TICKET'
        button.addEventListener('click', (e)=> {
            e.preventDefault()
            if(data.tickets_sold < data.capacity){
                e.preventDefault()
                data.tickets_sold = data.tickets_sold + 1;

                availableTickets.innerText = 'Available tickets:' + (data.capacity - data.tickets_sold)

                if(data.tickets_sold === data.capacity){
                    button.innerText = 'SOLD OUT'
                }
            }
        })

        list.innerText = "";
        list.appendChild(id)
        list.appendChild(poster)
        list.appendChild(availableTickets)
        list.appendChild(runtime)
        list.appendChild(showtime)
        list.appendChild(description)
        list.appendChild(button)
};