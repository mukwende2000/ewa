import attribution from "../../assets/icon-tmdb-long.72aae4fd.svg";

function index() {
  return (
    <footer className="flex flex-col items-center">
      <p className="text-cyan-900 font-bold">Powered by</p>
      <img
        src={attribution}
        className="w-40 m-auto"
        alt="the movie database icon"
      />
    </footer>
  );
}

export default index;
