import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedMovieOrShowDetails,
  fetchMovieOrShowDetails,
  removeSelectedMovieOrShowDetails,
} from '../features/movies/movieSlice';
import './MovieDetails.scss';

function MovieDetails() {
  console.log('useParams', useParams());
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShowDetails);
  console.log('data', data);
  let {
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Genre,
    Director,
    Plot,
    Actors,
    Language,
    Awards,
    Poster,
    Title,
  } = data;
  useEffect(() => {
    dispatch(fetchMovieOrShowDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShowDetails());
    };
  }, [dispatch, imdbID]);
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ? (
        <div className='loading'>Loading...</div>
      ) : (
        <>
          <div className='section-left'>
            <div className='movie-title'>{Title}</div>
            <div className='movie-rating'>
              <span>
                IMDB Rating <i className='fas fa-star'></i> : {imdbRating}
              </span>
              <span>
                Votes <i className='fas fa-thumbs-up'></i> : {imdbVotes}
              </span>
              <span>
                Runtime <i className='fas fa-film'></i> : {Runtime}
              </span>
              <span>
                Year <i className='fas fa-calendar'></i> : {Year}
              </span>
            </div>
            <div className='movie-plot'>{Plot}</div>
            <div className='movie-info'>
              <div>
                <span>Director</span>
                <span>{Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{Awards}</span>
              </div>
            </div>
          </div>
          <div className='section-right'>
            <img src={Poster} alt={Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
