import './App.scss';
// import './css/style.css';
// import SearchMovies from './components/searchMovies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className='App'>
      <div>
        <h1 className='title'>React Movie Search</h1>
      </div>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetails/>} />
            <Route element={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
      {/* <SearchMovies/> */}
    </div>
  );
}

export default App;
