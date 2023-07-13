import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { useState } from "react";

function index() {
  const [query, setQuery] = useState<string>();
  const { pathname }: { pathname: string } = useLocation();
  const navigate = useNavigate();
  const placeholder: string = pathname.includes("series")
    ? "series"
    : pathname.includes("movies")
    ? "movies"
    : "movies and tv series";

  function handleClick() {
    navigate(`/searchlist/${query}`);
  }
  return (
    <div className="lg:flex">
      <Navbar />
      <div className="basis-full">
        <Container>
          <div className="flex justify-between my-10 px-5">
            <input
              className="text-white basis-[80%] bg-transparent focus:outline-none focus:border-b border-b-slate-600 md:placeholder:text-2xl"
              placeholder={`Search for ${placeholder}`}
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleClick}
              className="bg-[rgb(90,106,144)] px-3 py-1 rounded-md text-white"
            >
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
