import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/axiosService';
import { LoaderSpinner } from './Loader';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    getMovieReviews(id)
      .then(response => {

        if (response.data.results.length > 0) {
          setMovieReviews(response.data.results);
        setStatus('approved');
        } else {
          setStatus('noReviews')
        }
        
      } )
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [id]);
  return (
    <div>
      {status === 'pending' && <LoaderSpinner/>}
      {status === 'approved' && (
        <ul>
          {movieReviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>{author}</p> <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}

      {status === 'noReviews' &&       <p>We don't have any review for this movie</p>}

      {status === 'rejected' && (
        <p>Oops, something went wrong. Try to reload page.</p>
      )}


    </div>
  );
};

export default Reviews;
