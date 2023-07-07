import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { movies } from "../../data";

function index() {
  return (
    <main>
      <Container>
        <ul className="movie-list gap-5">
          {movies.map((movie, index) => {
            return (
              <li
                key={movie.id}
                className={`rounded-lg h-40 hover:animate-tilt duration-300 ${
                  index % 2 === 0
                    ? "bg-[rgb(14,116,144)]/70"
                    : "bg-[rgb(25,31,46)]"
                } `}
              >
                <Link
                  className="h-full w-full grid place-items-center  text-white"
                  to={`${movie.id}`}
                >
                  {movie.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </main>
  );
}

export default index;
