import React, { useState } from 'react';
import '../css/style.css';
import MovieCard from './movieCard';
const axios = require('axios');

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=d438c8d9cb1b0017e26a0986ab20adf0&
    language=en-US&query=${query}`;
    try {
      let res = await axios(url);
      let data = await res.data.results;
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        {/* <label className='label' htmlFor='query'>
          {' '}
          Movie Name
        </label> */}
        {/* <br></br> */}
        <input
          className='input'
          type='text'
          name='query'
          placeholder='i.e. Jurassic Park'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
      <div className='container'>
        {movies
          .filter((m) => m.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default SearchMovies;
