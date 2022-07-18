import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../Images/userAvatar.png';
import './Header.scss';
import { useDispatch } from 'react-redux';
import {
  asyncfetchMovies,
  fetchAsyncShows,
} from '../features/movies/movieSlice';
function Header() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const submitEventHandler = (e) => {
    if (query === '') return alert('Please enter a movie or show name');
    e.preventDefault();
    console.log('submit', dispatch(asyncfetchMovies(query)));
    dispatch(asyncfetchMovies(query));
    dispatch(fetchAsyncShows(query));
    setQuery('');
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Movie App</Link>
      </div>
      <div>
        <div className='search-bar'>
          <form className='form' onSubmit={submitEventHandler}>
            <div class='search-box'>
              <button class='btn-search'>
                <i class='fas fa-search'></i>
              </button>
              <input
                type='text'
                class='input-search'
                placeholder='Search for a movie or show'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className='user-image'>
        <img src={user} alt='user' className='user' />
      </div>
    </div>
  );
}

export default Header;
