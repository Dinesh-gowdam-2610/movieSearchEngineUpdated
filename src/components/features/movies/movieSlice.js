import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncfetchMovies = createAsyncThunk(
  'movies/asyncfetchMovies',
  async (query) => {
    // let query = 'harry potter';
    // console.log('asynfetch query', query);
    var config = {
      method: 'get',
      url: `http://www.omdbapi.com/?i=tt3896198&apikey=eb60c85e&s=${query}&type=movie`,
      headers: {},
    };
    try {
      let { data } = await axios(config);
      console.log('inside try', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (query) => {
    // let shows = 'friends';
    // console.log('asynfetch query', query);
    var config = {
      method: 'get',
      url: `http://www.omdbapi.com/?i=tt3896198&apikey=eb60c85e&s=${query}&type=movie`,
      headers: {},
    };
    try {
      let { data } = await axios(config);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchMovieOrShowDetails = createAsyncThunk(
  'movies/fetchMovieOrShowDetails',
  async (id) => {
    // let shows = 'friends';
    // console.log('asynfetch query', query);
    var config = {
      method: 'get',
      url: `http://www.omdbapi.com/?apikey=eb60c85e&i=${id}&Plot=full`,
      headers: {},
    };
    try {
      let { data } = await axios(config);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShowDetails: {},
};
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieOrShowDetails: (state, action) => {
      state.selectedMovieOrShowDetails = {};
    },
  },
  extraReducers: {
    [asyncfetchMovies.pending]: (state, action) => {
      console.log('Pending');
    },
    [asyncfetchMovies.fulfilled]: (state, action) => {
      console.log('Fulfilled');
      state.movies = action.payload;
    },
    [asyncfetchMovies.rejected]: (state, action) => {
      console.log('Rejected');
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log('Fulfilled');
      state.shows = action.payload;
    },
    [fetchMovieOrShowDetails.fulfilled]: (state, action) => {
      // console.log('Fulfilled');
      state.selectedMovieOrShowDetails = action.payload;
    },
  },
});
export const { addMovies, removeSelectedMovieOrShowDetails } =
  movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShowDetails = (state) =>
  state.movies.selectedMovieOrShowDetails;
export default movieSlice.reducer;
