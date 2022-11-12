import './index.html';
import './style.css';
const inputMovieFilm = document.querySelector('#searchInput');
const movieList = document.querySelector('#moviesList');
const wrapperBtn = document.querySelector('#pageBtn');
const arrowPrev = document.querySelector('#prevPage');
const arrowNext = document.querySelector('#nextPage');
const resultNameFilm = document.querySelector('#result');
const pageFilm = document.querySelector('#page');
const paginationBtn = document.querySelector('#btn');

let apiKey = '3ef4ab9e';
let apiUrl = 'https://www.omdbapi.com/';
let page = 1;
let nameMovie ='';
let colorTextDescription = "white";

searchInput.focus();
paginationBtn.addEventListener('click', function () {
    nameMovie = inputMovieFilm.value;
    if (nameMovie === '') {
        movieList.style.display = 'none';
    } else {
        movieList.style.display = 'flex';
        page = 1;
        wrapperBtn.style.display = 'flex';
        resultNameFilm.innerHTML = nameMovie;
        getMovies();
    };
})
arrowPrev.addEventListener('click', function () {page++;getMovies()});
arrowNext.addEventListener('click', function () {if(page > 1){page--;getMovies()}});


function getMovies() {
    pageFilm.innerHTML = page;
    let listMovies = 0;
    fetch(`${apiUrl}?apiKey=${apiKey}&s=${nameMovie}&page=${page}`)
    .then((res) => {
        res.json()
        .then((res) => {
            if(res.Response == 'True'){
                listMovies = res;
                showMovies(listMovies);
            }
        })
    })
}
function showMovies(res){
    movieList.innerHTML = '';
    let listMovies = res.Search;
    for(let i = 0; i < listMovies.length; i++) {
        let srcImg = listMovies[i].Poster;
        let nameFilm = listMovies[i].Title;
        let yearFilm = listMovies[i].Year;
        let idFilm = listMovies[i].imdbID;
        let div = document.createElement("div");
        div.classList.add("wrapperMovie");
        div.innerHTML = `
            <span class = "wrapperImg" style = "color: ${colorTextDescription}"><img src=${srcImg} class = "imgMovie"></span>
            <span class = "nameMovie" style = "color: ${colorTextDescription}">Name: ${nameFilm}</span></br>
            <span class = "yearMovie" style = "color: ${colorTextDescription}">Year: ${yearFilm}</span>
            <span class = "idFilm" style = "color: ${colorTextDescription}">${idFilm}</span>
        `;
        movieList.appendChild(div);
    }
    detailsInfoMovie();
    
}
function detailsInfoMovie() {
    const searchListMovies = movieList.querySelectorAll(".wrapperMovie");
    searchListMovies.forEach((movie) => {
      movie.addEventListener("click", async () => {
        let movieId = movie.querySelector(".idFilm");
        movieId = movieId.innerText
        const result = await fetch(
          `http://www.omdbapi.com/?i=${movieId}&apikey=fc1fef96`
        );
        const movieDetails = await result.json();
        showDetailsInfo(movieDetails, movie);
        });
    });
}
function showDetailsInfo(details, movie){
    if(movie.querySelector(".detalisInfoMovie")){
        if(movie.querySelector(".detalisInfoMovie").style.display == 'none'){
            movie.querySelector(".detalisInfoMovie").style.display = 'block';
        }else{
            movie.querySelector(".detalisInfoMovie").style.display = 'none';
        }
    }else{
        let div = document.createElement("div");
        div.innerHTML = `
        <div class = "detalisInfoMovie">
            <span style = "color: ${colorTextDescription}">Actors:${details.Actors}</span><br>
            <span style = "color: ${colorTextDescription}">Awards:${details.Awards}</span><br>
            <span style = "color: ${colorTextDescription}">Country:${details.Country}</span><br>
            <span style = "color: ${colorTextDescription}">Director:${details.Director}</span><br>
            <span style = "color: ${colorTextDescription}">Language:${details.Language}</span><br>
            <span style = "color: ${colorTextDescription}">Runtime:${details.Runtime}</span>
        </div>
        `;
        movie.innerHTML += div.innerHTML;
    };
};