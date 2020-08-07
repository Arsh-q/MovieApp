import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Movie from './components/Movie';
import Header from './components/Header';

const App = () => {
  
  const api = {
    key: "&apikey=e2b575f2",
    base: "http://www.omdbapi.com/?s="
  };
useEffect(()=>{
  setLoading(true);
  setError(null);
  fetch(`${api.base}Iron${api.key}`)
  .then(resp => resp.json())
  .then(resp => {
    if(resp.Response === 'True'){
    setMovies(resp.Search);
    console.log(movies);
    setLoading(false);
    } else {
      setError(resp.Error);
    setLoading(false);
    }
  });
},[]);
const [movies, setMovies] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const search = (query) => {
  setLoading(true);
  setError(null);
  fetch(`${api.base}${query}${api.key}`)
  .then(resp => resp.json())
  .then(resp => {
    if(resp.Response === 'True'){
    setMovies(resp.Search);
    console.log(movies);
    setLoading(false);
    } else {
      setError(resp.Error);
    setLoading(false);
    }
  });
};
  return (<>
      <div className='main'>
      <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
      <Header />
      <Search search={search} />
      <div className="container mx-auto">
      <div className='row pt-5'>
      { loading && !error ? (<span className='loading'>Loading...</span>) : error ?
        (<div className="errorMessage">{error}</div>)
        : (movies.map((movie, index) => (
      <Movie movie={movie} key={`${index}-${movie.Title}`} />
    ))
    )}</div>
    </div>
    </div>
  </>);
};
export default App;
