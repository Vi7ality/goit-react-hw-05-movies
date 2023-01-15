import { LoaderSpinner } from 'components/Loader';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/axiosService';
import { SearchForm } from './Movies.styled';

const MovieList = lazy(()=>import("../../components/MovieList"))

const Movies = () => {
  const [movieList, setMovieList] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query')

  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    searchMovies(searchQuery).then(response => {
      setMovieList(response.data.results);
    });

    form.reset();
  };

  useEffect(() => {
    if (!searchQuery) return;
    searchMovies(searchQuery).then(response => {
      setMovieList(response.data.results);
    });
  },[searchQuery])



  return (
    <main>
      <SearchForm action="" onSubmit={handleSubmit}>
        <label>
          <input name="query" type="text" />
        </label>
        <button type="submit">Search</button>
      </SearchForm>
      <Suspense fallback={<LoaderSpinner/>}>
        <MovieList location={location} movieList={movieList}></MovieList>
    </Suspense>
    </main>
  );
};

export default Movies;