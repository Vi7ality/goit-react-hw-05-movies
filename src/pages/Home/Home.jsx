import { useEffect } from 'react';
import { useState } from 'react';
import { getTrandingMovies } from 'services/axiosService';
import { TrandingMovieList } from './Home.styled';

const { Link } = require('react-router-dom');

const Home = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    console.log('Get Tranding movies');
    getTrandingMovies().then(response => setMovies(response));
  }, []);

  return (
    <main>
      <h1>Tranding today</h1>
      {movies && (
              <TrandingMovieList>
          {movies.data.results.map(movie => {
              return (<li key={movie.id}><Link to={`movies/${movie.id}`}>{movie.title}</Link></li>)
          })}
        </TrandingMovieList>
      )}
    </main>
  );
};

export default Home;
