import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/axiosService';
import { MovieDescriprion, MovieDetailsMain } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();

  useEffect(() => {
    console.log('Get Movie detals');
    getMovieDetails(id)
      .then(response => setMovieDetails(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <MovieDetailsMain>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt=""
      ></img>
      <MovieDescriprion>
        <h2>{movieDetails.title}</h2>
        <p>Vote average: {movieDetails.vote_average}</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        {movieDetails && <p>{movieDetails.genres.map(genre => genre.name)}</p>}
      </MovieDescriprion>
    </MovieDetailsMain>
  );
};
