import React from 'react';

function MovieCard({ movie }) {
  return (
    <div>
      <div className='card' key={movie.id}>
        <img
          className='card--image'
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={'poster'}
        />
        <div className='card--content'>
          <h3 className='card--title'>{movie.title}</h3>
          <p>
            <small>Release Date: {movie.release_date}</small>
          </p>
          <p>
            <small>Rating: {movie.vote_average}</small>
          </p>
          <p>
            <small>Rating {movie.overview}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
