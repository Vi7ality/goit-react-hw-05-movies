import { BackLink } from 'components/BackLink';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/axiosService';
import { MovieDescriprion, MovieFlexContainer } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    console.log('Get Movie detals');
    getMovieDetails(id)
      .then(response => setMovieDetails(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <main>
      <BackLink to={backLinkHref}></BackLink>
      <MovieFlexContainer><img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt=""
      ></img>
      <MovieDescriprion>
        <h2>{movieDetails.title}</h2>
        <p>Vote average: {movieDetails.vote_average}</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        {movieDetails && <p>{movieDetails.genres.map(({name}) => `${name} `)}</p>}
      </MovieDescriprion></MovieFlexContainer>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </main>
  );
};
