import Container from "../../components/Container";
import { FaImdb, FaLink, FaStar, FaStarHalfAlt } from "react-icons/fa";

function index() {
  return (
    <main className="text-white">
      <Container styles="md:flex gap-10 px-10">
        <div className="basis-full grid md:block place-items-center">
          <img src={"/resized.jpg"} alt="" />
        </div>
        <div>
          <h1 className="text-5xl text-center md:text-left">Nimona</h1>
          <p className="text-gray-500 my-3 text-center md:text-left">
            A new hero takes shape
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <p className="font-bold text-4xl mr-4">4.0</p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <div className="flex justify-between md:justify-normal md:gap-32 my-7">
            <div>
              <p className="text-gray-500 font-bold mb-1">Length</p>
              <p>101 min.</p>
            </div>
            <div>
              <p className="text-gray-500 font-bold mb-1">Language</p>
              <p>Engish</p>
            </div>
            <div>
              <p className="text-gray-500 font-bold mb-1">Year</p>
              <p>2023</p>
            </div>
            <div>
              <p className="text-gray-500 font-bold mb-1">Status</p>
              <p>N/A</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">Genre</h2>
            <div className="flex gap-3">
              <p className="bg-white text-black rounded px-1 text-xs md:text-sm">
                Animation
              </p>
              <p className="bg-white text-black rounded px-1 text-xs md:text-sm">
                Science Fictio
              </p>
              <p className="bg-white text-black rounded px-1 text-xs md:text-sm">
                Action
              </p>
              <p className="bg-white text-black rounded px-1 text-xs md:text-sm">
                Adventure
              </p>
              <p className="bg-white text-black rounded px-1 text-xs md:text-sm">
                Fantasy
              </p>
            </div>
            <div className="my-5">
              <h2 className="font-bold">Synopsis</h2>
              <p>
                A knight framed for a tragic crime teams with a scrappy,
                shape-shifting teen to prove his innocence.
              </p>
            </div>
            <div>
              <h2 className="font-bold mb-3">Cast</h2>
              <div className="flex flex-wrap gap-3">
                <span className="p-1 text-xs rounded border">
                  Chloe Grace Moretz
                </span>
                <span className="p-1 text-xs rounded border">Riz Ahmed</span>
                <span className="p-1 text-xs rounded border">
                  Eugene Lee Yang
                </span>
                <span className="p-1 text-xs rounded border">
                  Frances Conray
                </span>
                <span className="p-1 text-xs rounded border">
                  Lorraine Toussaint
                </span>
                <span className="p-1 text-xs rounded border">Beck Bennett</span>
                <span className="p-1 text-xs rounded border">RuPaul</span>
                <span className="p-1 text-xs rounded border">Indya Moore</span>
                <span className="p-1 text-xs rounded border">Julio Torres</span>
                <span className="p-1 text-xs rounded border">
                  Sarah Sherman
                </span>
                <span className="p-1 text-xs rounded border">ND Stevenson</span>
                <span className="p-1 text-xs rounded border">Mia Collins</span>
                <span className="p-1 text-xs rounded border">
                  Zayaan Kunwar
                </span>
                <span className="p-1 text-xs rounded border">
                  Charlotte Aldrich
                </span>
                <span className="p-1 text-xs rounded border">Karen Ryan</span>
                <span className="p-1 text-xs rounded border">Nick Bruno</span>
                <span className="p-1 text-xs rounded border">Troy Quane</span>
                <span className="p-1 text-xs rounded border">
                  Julie Zackary
                </span>
                <span className="p-1 text-xs rounded border">Randy Trager</span>
                <span className="p-1 text-xs rounded border">
                  Christopher Campbell
                </span>
                <span className="p-1 text-xs rounded border">
                  Cindy Slattery
                </span>
                <span className="p-1 text-xs rounded border">
                  Mathew J. Munn
                </span>
                <span className="p-1 text-xs rounded border">
                  Sammersill Tarabek
                </span>
                <span className="p-1 text-xs rounded border">
                  Sebastian Trager
                </span>
                <span className="p-1 text-xs rounded border">Sadie Trager</span>
                <span className="p-1 text-xs rounded border">
                  Lincoln Davis
                </span>
                <span className="p-1 text-xs rounded border">
                  Lylianna Eugene
                </span>
                <span className="p-1 text-xs rounded border">
                  Tim Nordquiest
                </span>
                <span className="p-1 text-xs rounded border">
                  Maurissa Horwitz
                </span>
                <span className="p-1 text-xs rounded border">Jake Bruno</span>
                <span className="p-1 text-xs rounded border">Jarret Bruno</span>
                <span className="p-1 text-xs rounded border">
                  Wesley Turner
                </span>
              </div>
            </div>
            <div className="my-5 flex gap-5">
              <button className="flex gap-5 items-center rounded bg-slate-500 py-2 px-5">
                <span>Website</span>
                <FaLink />
              </button>
              <button className="flex items-center gap-5 rounded bg-slate-500 px-5">
                <span>IMDB</span>
                <FaImdb />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default index;
