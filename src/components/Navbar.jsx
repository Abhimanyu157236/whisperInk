import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import search from "../assets/[CITYPNG.COM]White Search Icon Button PNG IMG - 700x700.png";
import hamburgur from "../assets/c00745132bda24213fb200f74a405990.png";
import cross from "../assets/cross-white-icon.png";
import { blogPosts } from "../blogData";
import { className } from "../classname";
import BlogCard from "./BlogCard";

const Navbar = ({ expandMenu, setExpandMenu }) => {
  const [input, setInput] = useState("");
  const  searchedBlog = blogPosts.filter(item =>input && (item.title.toLocaleLowerCase().includes(input)))
  
  return (
    <>
      <div className="flex justify-between items-center py-6 md:py-4 w-[100%] bg-violet-600 text-white">
        <div className="w-[70%]">
          <h1 className="font-serif font-bold text-2xl ml-10 md:ml-[10%]">
            whisperInk
          </h1>
        </div>

        <div className="hidden w-[20%] md:flex justify-around mr-3 ">
          <NavLink to="/">  
            <h1 className="font-serif text-lg text-white">Home</h1>
          </NavLink>
          <NavLink to="/contact">
            <h1 className="font-serif text-lg text-white">Contact</h1>
          </NavLink>
          <NavLink to="/about">
            <h1 className="font-serif text-lg text-white">About</h1>
          </NavLink>
        </div>
        <div className="hidden w-[30%] md:block py-3 ml-3">
          <input
            type="text"
            placeholder="Blog..."
            className="w-[70%] py-3 px-3 rounded-xl outline-none bg-orange-300 mr-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
          />
        </div>
        <div>
          <img
            src={expandMenu ? cross : hamburgur}
            alt="menu"
            className={
              expandMenu
                ? "w-6 md:hidden mr-40 transition-all duration-500 ease-in-out"
                : "w-8 md:hidden mr-6 transition-all duration-500 ease-in-out"
            }
            onClick={() => setExpandMenu((prev) => !prev)}
          />
        </div>
      </div>
      <div className={`${searchedBlog.length > 0 ? "block" : "hidden"} absolute top-20 left-[75%] w-[18%]`} >
        {
             searchedBlog.length > 0 ? searchedBlog.map((blog)=>(
                 <div className="hover:bg-gray-500  bg-gray-400 p-4 text-white text-sm " key={blog.id}>
                    <NavLink to="/blogs"
                    state={{id:blog.id}}
                    > 
                       <h1>{blog.title}</h1>
                    </NavLink>
                 </div>
    )) 
    : ""
        } 
      </div>

    </>
  );
};

export default Navbar;
