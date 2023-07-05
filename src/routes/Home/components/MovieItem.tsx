import { Link } from "react-router-dom";

type Props = {
  styles?: string;
  path: string;
  movieTitle: string;
  year: string;
  isTvSeries?: boolean;
  id: number;
};

const imageUrl = "https://image.tmdb.org/t/p/w500/";

function MovieItem({ isTvSeries, year, styles, path, movieTitle, id }: Props) {
  return (
    <li className={`relative ${styles}`}>
      <Link className="relative" to={`movies/${id}`}>
        <div className="absolute left-0 bottom-0 right-0 top-0 bg-black/50"></div>
        <div className="rounded overflow-hidden h-full">
          <img
            src={`${imageUrl}${path}`}
            alt={movieTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative bottom-16 left-3">
          <p>
            {year} . {isTvSeries ? "Series" : "Movie"}
          </p>
          <p>{movieTitle}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieItem;
