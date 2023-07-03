import Container from "../Container";
import { NavLink } from "react-router-dom";
import profile from "../../assets/josh.jpg";
import { PiSquaresFourFill, PiTelevision } from "react-icons/pi";
import { MdMovie, MdLocalMovies } from "react-icons/md";

function index() {
  return (
    <nav className="py-5 lg:h-[90%] rounded-md lg:m-5 text-white bg-gray-700">
      <Container styles="flex lg:flex-col justify-between lg:gap-20 items-center">
        <MdMovie
          aria-label="logo"
          fontSize={30}
          className="text-[rgb(252,71,71)]"
        />
        <div className="flex lg:flex-col md:px-5 gap-10">
          <NavLink
            className="text-[rgb(90,106,144)] hover:text-[rgb(252,71,71)]"
            aria-label="Go to Home Page"
            to={"/"}
          >
            <PiSquaresFourFill fontSize={25} />
          </NavLink>
          <NavLink
            className="text-[rgb(90,106,144)] hover:text-[rgb(252,71,71)]"
            aria-label="Go to Movies Page"
            to={"/movies"}
          >
            <MdLocalMovies fontSize={25} />
          </NavLink>
          <NavLink
            className="hover:text-[rgb(252,71,71)] text-[rgb(90,106,144)]"
            aria-label="Go to Series Page"
            to={"/series"}
          >
            <PiTelevision fontSize={25} />
          </NavLink>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={profile} alt="Profile Avatar" className="w-full h-full" />
        </div>
      </Container>
    </nav>
  );
}

export default index;
