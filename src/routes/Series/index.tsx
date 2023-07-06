import { Link } from "react-router-dom";
import { series } from "../../data";
import Container from "../../components/Container";

function index() {
  return (
    <Container>
      <ul className="movie-list gap-5">
        {series.map((episode, index) => {
          return (
            <li
              key={episode}
              className={`rounded-lg h-40 hover:animate-tilt duration-300 ${
                index % 2 === 0
                  ? "bg-[rgb(14,116,144)]/70"
                  : "bg-[rgb(25,31,46)]"
              } `}
            >
              <Link
                className="h-full w-full grid place-items-center  text-white"
                to={""}
              >
                {episode}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default index;
