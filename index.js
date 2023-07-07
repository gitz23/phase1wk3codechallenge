//executes after hte html doc loads
document.addEventListener('DOMContentLoaded', getMovies)

//fetches movie data from server
function getMovies(){
    fetch('http://localhost:3000/films')
    .then(resp => resp.json())
    .then(data =>{
        displayMovieNames(data)
       //fetchFetchFirstMovie()
       //fetchFetchMovieData(data)
    })
}

//displays the movies onto the left side of the html doc
function displayMovieNames(movieName){
    let movieContainer = document.getElementById('leftDiv')
    let movieList = document.getElementById('films')


    movieName.forEach(movie=> {
        let movieItem = document.createElement('li')
        movieItem.classList = "movieNameList"
        movieItem.innerText = movie.title
        movieList.appendChild(movieItem)
       // let availableTickets = parseInt(`${movie.capacity} - ${movie.tickets_sold}`)
        //console.log(availableTickets)
        // movieItem.innerHTML = `
        // <br>
        // <br>
        // <img class="imagePoster" src="${movie.poster}"/> 
        //     <br>
        //     ${movie.title} 
        //     <br> 
        //     ${movie.runtime}
        //     <br>
        //     ${movie.showtime}
        //     <br> 
        //     ${availableTickets}
        //     <br>
        //     <button id="buyTicketButton">Buy Ticket</<button>
        //`
        movieItem.addEventListener('click', () => {
            fetchFetchMovieData(movie)
        })  
    })
   // console.log(movieList)
}

function fetchFetchMovieData(data){
    let list = document.getElementById('rightList')

        console.log(Object.values(data))

        const id = document.createElement('li')
        id.innerText = data.id 

        const poster = document.createElement('img')
        poster.classList = 'imagePoster'
        poster.src = data.poster

        const availableTickets = document.createElement('li')
        availableTickets.innerText = 'Available tickets:' + (data.capacity - data.tickets_sold)
        console.log(data.capacity)
        console.log(data.tickets_sold)
         console.log(availableTickets)


        const runtime = document.createElement('li')
        runtime.innerText = data.runtime

        const showtime = document.createElement('li')
        showtime.innerText = data.showtime

        // const tickets_sold = document.createElement('li')
        // tickets_sold.innerText = data.tickets_sold

        const description = document.createElement('li')
        description.innerText = data.description


        const button = document.createElement('button')
        button.id = "buyButton"
        button.innerText = 'BUY TICKET'
        button.addEventListener('click', (e)=> {
            e.preventDefault()
            if(data.tickets_sold < data.capacity){
                e.preventDefault()
                data.tickets_sold = data.tickets_sold + 1;

                console.log('availableTickets')
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
}

//fetch the first movie on the right side by default
// function fetchFetchFirstMovie(){
//     fetch(`http://localhost:3000/films/`)
//     .then(resp => resp.json())
//     .then(data => {
//         displayFirstMovie(data)
//     })
// }

// //display the first movie onto the right side
// function displayFirstMovie(firstMovie){
//     let movieContainer = document.getElementById('rightDiv')
//     let availableTickets = parseInt(`${firstMovie.capacity} - ${firstMovie.tickets_sold}`)
//     console.log(firstMovie.poster);

//     let firstMovieDetails = document.createElement('div')
//     firstMovieDetails.innerHTML = `
//     <img class="imagePoster" src="${firstMovie.poster}"/>
//         <br>
//         ${firstMovie.title}
//         <br>
//         ${firstMovie.runtime}
//         <br>
//         ${firstMovie.showtime}
//         <br>
//         ${availableTickets}` 
//     movieContainer.appendChild(firstMovieDetails)
// }