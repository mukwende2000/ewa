import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

function index() {
  const { pathname } = useLocation();
  const placeholder: string = pathname.includes("series")
    ? "series"
    : pathname.includes("movies")
    ? "movies"
    : "movies and tv series";
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="basis-full">
        <Container>
          <div className="flex justify-between my-5 p-5">
            <input
              className="text-white basis-[80%] bg-transparent focus:outline-none focus:border-b border-b-slate-600 md:placeholder:text-2xl"
              placeholder={`Search for ${placeholder}`}
              type="text"
            />
            <button className="bg-[rgb(90,106,144)] px-3 py-1 rounded-md text-white">
              search
            </button>
          </div>
        </Container>
        <Outlet />
      </div>
    </div>
  );
}

export default index;
