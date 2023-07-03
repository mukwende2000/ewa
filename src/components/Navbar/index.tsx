import { NavLink } from "react-router-dom"
import profile from '../../assets/josh.jpg'

function index() {
  return (
    <nav className="p-5 text-white flex justify-between items-center bg-gray-700">
    <p className="text-[rgb(252,71,71)]">logo</p>
    <div className="flex gap-5">
        <NavLink className="text-[rgb(90,106,144)] hover:text-[rgb(252,71,71)]" aria-label="Go to Home Page" to={'/'}>
            Home
        </NavLink>
        <NavLink className="text-[rgb(90,106,144)] hover:text-[rgb(252,71,71)]" aria-label="Go to Movies Page" to={'/movies'}>
            Movies
        </NavLink>
        <NavLink className="hover:text-[rgb(252,71,71)] text-[rgb(90,106,144)]" aria-label="Go to Series Page" to={'/series'}>
            Tv Series
        </NavLink>
    </div>
    <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={profile} alt="Profile Avatar" className="w-full h-full" />
    </div>
</nav>
  )
}

export default index
