import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>Title : {movie.title}</h2>
          <p>Rating : {movie.rating}</p>
          <p>Running Time : {movie.runtime}</p>
          <p>Description : {movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
// useParams를 사용하여 url parameter를 받을 수 있음
export default Detail;
