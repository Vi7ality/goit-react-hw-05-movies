import { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/axiosService';

export const Movies = () => {
  const [movieList, setMovieList] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    //   updateQueryString(e.target.value)

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    searchMovies(searchParams).then(response => {
      setMovieList(response.data.results);
    });

    form.reset();
  };

  //   const updateQueryString = name => {
  //     const nextParams = name !== '' ? { name } : {};
  //     setSearchParams(nextParams);
  //   };

  return (
    <main>
      <form action="" onSubmit={handleSubmit}>
        <label>
          <input name="query" type="text" />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movieList &&
          movieList.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
};
