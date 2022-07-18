import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import './MovieListing.scss';
import { settings } from '../common/Settings';

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log('inside the movie listing component', movies);
  let renderMovies,
    renderShows = '';
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard data={movie} key={index} />;
      })
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie, index) => {
        return <MovieCard data={movie} key={index} />;
      })
    ) : (
      <div className='shows-error'>
        <h3>{shows.Error}</h3>
      </div>
    );
  console.log('movieList', renderMovies);
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2 className='title'>Movies</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='show-list'>
        <h2 className='title'>Shows</h2>
        <div className='movie-container'>
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
