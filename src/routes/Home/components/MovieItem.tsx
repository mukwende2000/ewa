import { MdLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  styles?: string;
  path: string;
  movieTitle: string | undefined;
  year: string | undefined;
  isTvSeries?: boolean;
  id: number;
};

export const imageUrl = "https://image.tmdb.org/t/p/w500/";

function MovieItem({ isTvSeries, year, styles, path, movieTitle, id }: Props) {
  return (
    <li className={`relative h-40 ${styles} group`}>
      <Link to={`/movie/${id}`}>
        <div className="absolute z-10 left-0 bottom-0 right-0 top-0 bg-black/50"></div>
        <div className="absolute left-0 top-0 right-0 bottom-0 rounded overflow-hidden">
          <img
            src={`${imageUrl}${path}`}
            alt={movieTitle}
            className="w-full h-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
        <div className="absolute bottom-3 left-3 z-20 text-white group-hover:text-cyan-500 duration-200">
          <p className="text-xs">
            {year} . <MdLocalMovies className="inline" />{" "}
            {isTvSeries ? "Series" : "Movie"}
          </p>
          <p>{movieTitle}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieItem;
