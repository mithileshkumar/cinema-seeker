import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import MovieDetails from './components/MovieDetails';
import MovieData from './data/MovieData';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Searchbar from './components/Searchbar';
import ProfilePic from './assets/profile-pic.jpg';

import './App.css';

const App = () => {

  const [showMovieDetails, hideShowMovieDetails] = useState(false);
  const [movieList, updateMovieList] = useState([]);
  const [movieData, updateMovieData] = useState(MovieData);

  const updateMovieDisplay = (imdbID) => {
    hideShowMovieDetails(true);
    const updatedMovieList = MovieData.filter(movie => movie.imdbID === imdbID);
    updateMovieList(updatedMovieList)
  }

  const updateMovieDataShown = (movieName) => {
    hideShowMovieDetails(false);
    const updatedMovieData = MovieData.filter(movie => movie.Title.toLocaleLowerCase().includes(movieName.toLowerCase()));
    updateMovieData(updatedMovieData)
  }

  return (
    <div className="app">
      <div className='app-left'>
        <Profile name='Mithilesh' image={ProfilePic} />
        <Navbar />
      </div>
      <div className='app-right'>
        <Searchbar updateMovies={updateMovieDataShown} />
        {showMovieDetails && <MovieDetails details={movieList[0]} />}
        <Routes>
          <Route path="/" element={<Navigate to='/discover' />} />
          <Route path='/discover' element={<Movies movies={movieData} updateMovieDisplay={updateMovieDisplay} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
