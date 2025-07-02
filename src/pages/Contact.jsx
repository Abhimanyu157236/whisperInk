import React , {useEffect} from 'react';
import search from "../assets/[CITYPNG.COM]White Search Icon Button PNG IMG - 700x700.png";
import { NavLink } from "react-router-dom";

const Contact = ({expandMenu, setExpandMenu }) => {
   useEffect(() => {
      setExpandMenu(false)
    
    }, []);
  return (
    <>
    <div className={expandMenu?'h-screen opacity-50':'h-screen opacity-100'}>
    <div >
      <h1 className="text-lg md:text-3xl font-serif font-semibold mt-6 md:mt-6 ml-4">
        phone : 6203667268
      </h1>
       <h1 className="text-lg md:text-3xl font-serif font-semibold mt-6 md:mt-6 ml-4">
        E-mail : abhimanyupandey1572@gmail.com
       </h1 >
    </div>
      </div>
      <div
        className={`
          fixed top-20 right-0 h-full bg-gradient-to-r from-[#212d49]  to-[#334155] text-white overflow-hidden
          transition-all duration-500 ease-in-out
          ${expandMenu ? "w-[48%] translate-x-0" : "w-0 translate-x-full"}
        `}
      >
        <div className=" w-[100%] flex py-3 ml-3 pl-1">
          <input
            type="text"
            placeholder="Blog..."
            className="w-24 py-3 px-2 rounded-xl outline-none bg-orange-300 mr-3"
          />
          <button>
            <img
              src={search}
              alt="search"
              className="w-10 p-2 bg-orange-300 outline-none rounded-full"
            />
          </button>
        </div>
        <div className="w-full pl-7 ">
          <NavLink to="/">
            <h1 className="font-serif font-semibold text-xl text-white my-3">
              Home
            </h1>
          </NavLink>
          <NavLink to="/contact">
            <h1 className="font-serif text-xl font-semibold text-white my-3">
              Contact
            </h1>
          </NavLink>
          <NavLink to="/about">
            <h1 className="font-serif text-xl font-semibold text-white my-3">
              About
            </h1>
          </NavLink>
        </div>
      </div>
      </>
  );
}

export default Contact;
