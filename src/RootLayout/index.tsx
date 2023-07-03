import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


function index() {
  return (
    <div>
       <Navbar />
        <div>
            <div className="flex justify-between p-5">
                <input className="focus:outline-none focus:border-b" placeholder="Search for movies and tv series" type="text" />
                <button className="bg-[rgb(90,106,144)] px-3 py-1 rounded-md text-white">search</button>
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default index
