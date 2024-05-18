import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({data}) => {
  const { user } = useContext(AuthContext);
  return (
    < div  className="navbar h-14 ">
        <div className="navContainer flex justify-between items-center text-yellow-50 ">
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <div className="logo pt-6 pl-24 font-mono text-lg ">ShreyBooking</div>
          </Link>
        {user ? user.username : (
        <div className=" flex classItems pt-4 px-32">
            <button className="  bg-white  text-black mx-4 hover:bg-cyan-100 rounded font-semibold px-4">Register</button>
            <button className="bg-white navButton  text-black  hover:bg-cyan-100 rounded font-semibold px-4">Login</button>
        </div>
        )}
        </div>
        </div>
  )
}

export default Navbar