import React, { Component } from 'react';
import { useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useEffect } from 'react';


const Movies = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    // http://www.omdbapi.com/?apikey=53e591a3&


    useEffect(() => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=53e591a3")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        console.log(items)
    //     return (
    //         <ul>
    //             {items.movies.map(movie => (
    //                 <li className="movies__item" key={movie.imdbID}>
    // //                 <MovieItem {...movie} />
    // //             </li>
    //             ))}
    //         </ul>
    //     );
    }


    // const [state, setState] = useState({
    //     movies: [
    //         {
    //             imdbID: 'tt3896198',
    //             title: "Guardians of the Galaxy Vol. 2",
    //             year: 2017,
    //             poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    //         },
    //         {
    //             imdbID: 'tt0068646',
    //             title: "The Godfather",
    //             year: 1972,
    //             poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    //         }
    //     ]
    // })


    // return (
    //     <ul className="movies">
    //         {state.movies.map((movie) => (
    //             <li className="movies__item" key={movie.imdbID}>
    //                 <MovieItem {...movie} />
    //             </li>
    //         ))}
    //     </ul>
    // );

}

export default Movies;