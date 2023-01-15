const { Link } = require("react-router-dom");

const MovieList = ({movieList, location}) => {
    return (
              <ul>
        {movieList &&
          movieList.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
              </li>
            );
          })}
      </ul>
    )
}

export default MovieList;