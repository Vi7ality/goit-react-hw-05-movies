import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "services/axiosService";

const Cast = () => {
  const [movieCast, setMovieCast] = useState('');
  const { id } = useParams();

    useEffect(() => {
      console.log('Get Cast')
    getMovieCredits(id)
      .then(response => setMovieCast(response.data.cast))
      .catch(error => console.error(error));
  }, [id]);
    return (
        <ul>
            {movieCast && movieCast.map(({credit_id, profile_path, name, character}) => {
                return (
                    <li key={credit_id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width='100' />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>
                )
            })}
</ul>
    )
}
export default Cast;