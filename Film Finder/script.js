let addMoviesToDom = movies.forEach(movies => {
    // console.log (movies);
    var newLi = document.createElement("li");
    var newA = document.createElement("a");
    var newImg = document.createElement("img");
    var moviesList = document.getElementById("movies-list");
    moviesList.appendChild(newLi);
    newLi.appendChild(newA);
    newA.appendChild(newImg);
    newA.setAttribute("href", "https://www.imdb.com/title/" +movies.imdbID );
    newImg.setAttribute("src", movies.poster);
    // console.log(newItem);
});

let filterButtons = document.getElementsByName("filter-button");
// console.log(filterButtons);

let filterButtonsArray = Array.from(filterButtons);
// console.log(filterButtonsArray);

filterButtonsArray.forEach(filterButton => {
   filterButton.addEventListener("change", handleOnChangeEvent, false); 
});

function handleOnChangeEvent (event) {
    
    const value = (event.target.value);
    switch (value) {

        case "latest":
            deleteList();

            var filterMovies = function (wordInMovie) {
                var wordInMovie = movies.filter(movies => movies.year >= 2014);
                return wordInMovie;
            };

            var wordInMovie = filterMovies("latest");
            wordInMovie.forEach( wordInMovie => {
                var newLi = document.createElement("li");
                var newA = document.createElement("a");
                var newImg = document.createElement("img");
                var moviesList = document.getElementById("movies-list");
                moviesList.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.setAttribute("href", "https://www.imdb.com/title/" +wordInMovie.imdbID );
                newImg.setAttribute("src", wordInMovie.poster);
            });
           break;
        case "avengers":
            deleteList();

            var filterMovies = function (wordInMovie) {
                var wordInMovie = movies.filter(movies => movies.title.includes("Avengers"));
                return wordInMovie;
            };

            var wordInMovie = filterMovies("avengers");
            wordInMovie.forEach( wordInMovie => {
                var newLi = document.createElement("li");
                var newA = document.createElement("a");
                var newImg = document.createElement("img");
                var moviesList = document.getElementById("movies-list");
                moviesList.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.setAttribute("href", "https://www.imdb.com/title/" +wordInMovie.imdbID );
                newImg.setAttribute("src", wordInMovie.poster);
            });
            break;
        case "x-men":
            deleteList();

            var filterMovies = function (wordInMovie) {
                var wordInMovie = movies.filter(movies => movies.title.includes("X-Men"));
                return wordInMovie;
            };

            var wordInMovie = filterMovies("x-men");
            wordInMovie.forEach( wordInMovie => {
                var newLi = document.createElement("li");
                var newA = document.createElement("a");
                var newImg = document.createElement("img");
                var moviesList = document.getElementById("movies-list");
                moviesList.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.setAttribute("href", "https://www.imdb.com/title/" +wordInMovie.imdbID );
                newImg.setAttribute("src", wordInMovie.poster);
            });
            break;   
        case "princess":
            deleteList();

            var filterMovies = function (wordInMovie) {
                var wordInMovie = movies.filter(movies => movies.title.includes("Princess"));
                return wordInMovie;
            };

            var wordInMovie = filterMovies("Princess");
            wordInMovie.forEach( wordInMovie => {
                var newLi = document.createElement("li");
                var newA = document.createElement("a");
                var newImg = document.createElement("img");
                var moviesList = document.getElementById("movies-list");
                moviesList.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.setAttribute("href", "https://www.imdb.com/title/" +wordInMovie.imdbID );
                newImg.setAttribute("src", wordInMovie.poster);
            });
            break; 
        case "batman":
            deleteList();

            var filterMovies = function (wordInMovie) {
                var wordInMovie = movies.filter(movies => movies.title.includes("Batman"));
                return wordInMovie;
            };
            
            var wordInMovie = filterMovies("batman");
            wordInMovie.forEach( wordInMovie => {
                var newLi = document.createElement("li");
                var newA = document.createElement("a");
                var newImg = document.createElement("img");
                var moviesList = document.getElementById("movies-list");
                moviesList.appendChild(newLi);
                newLi.appendChild(newA);
                newA.appendChild(newImg);
                newA.setAttribute("href", "https://www.imdb.com/title/" +wordInMovie.imdbID );
                newImg.setAttribute("src", wordInMovie.poster);
            });
            break; 
        default:   
      
    }
};

let deleteList = function () {
    var moviesList = document.getElementsByTagName ("li");
    var moviesListArray = Array.from(moviesList);
        
    moviesListArray.forEach(moviesImage => {
            moviesImage.remove ();
        });
    };


    


        
        
    
        








