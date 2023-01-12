import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/axiosService';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id)
      .then(response => setMovieReviews(response.data.results))
      .catch(error => console.error(error));
  }, [id]);
  return (
    <div>
      {movieReviews.length > 0 ? (
              <ul>
                  {movieReviews.map(({ author, content, id}) => {
                      return (<li key={id}><p>{author}</p> <p>{content}</p></li>)
                  })}
        </ul>
      ) : (
        <p>We don't have any review for this movie</p>
      )}
    </div>
  );
};
