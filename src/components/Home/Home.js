import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import {
  asyncfetchMovies,
  fetchAsyncShows,
} from '../features/movies/movieSlice';
import './Home.scss';
const Home = () => {
  const dispatch = useDispatch();
  let movieText = 'Harry';
  let showText = 'Friends';
  // const fetchMovie = async (e) => {
  //   e.preventDefault();
  //   // let movieText = 'Jurassic Park';
  //   let query = 'harry potter';
  //   var config = {
  //     method: 'get',
  //     url: `http://www.omdbapi.com/?i=tt3896198&apikey=eb60c85e&s=${query}&type=movie`,
  //     headers: {},
  //   };
  //   try {
  //     let { data } = await axios(config);
  //     console.log('inside try', data);
  //     setMovies(data.Search);
  //     dispatch(addMovies(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchMovie();
    dispatch(asyncfetchMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch, movieText, showText]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};
export default Home;
