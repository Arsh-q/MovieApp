import React from 'react';

const Movie = ({movie}) => {
    return (
         <div className="movie_card col-lg-4 col-md-6 my-auto pb-3">
            <div className="title mt-auto">
            <h1 className='text-center'>{movie.Title}</h1>
            </div>
            <div className="poster text-center">
            <img src={movie.Poster} alt="poster"/>
            </div>
            <div className="text-center mt-4">
            <h3>{movie.Year}</h3>
            </div>
        </div> 
        );
}
export default Movie;