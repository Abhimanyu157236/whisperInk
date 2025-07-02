import React, { useEffect, useState } from "react";
import search from "../assets/[CITYPNG.COM]White Search Icon Button PNG IMG - 700x700.png";
import { NavLink } from "react-router-dom";
import { blogPosts } from "../blogData";
import BlogCard from "../components/BlogCard";
import { className } from "../classname";

const Home = ({ expandMenu, setExpandMenu }) => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [postPerPage, setPostPerPage] = useState(3);
  const [lastIndex, setLastIndex] = useState(postPerPage);
  const filteredBlog = blogPosts.filter( blog =>blog.id==9)
    const [input, setInput] = useState("");
    const  searchedBlog = blogPosts.filter(item =>input && (item.title.toLocaleLowerCase().includes(input)))
    

  useEffect(() => {
    setExpandMenu(false);
  }, []);

  return (
    <> 
    <div className={expandMenu?"h-max opacity-50":"h-max opacity-100"}>
      <div className="w-[55%] pl-14 md:pl-56">
        <h1 className="text-xl md:text-4xl font-serif font-semibold mt-6 md:mt-12 md:mb-4 ">
          Browse Posts
        </h1>
      </div>
      <div className="w-full flex">
        <div className="w-full flex flex-wrap px-[5%] md:pl-[14%]">
          {Array.from(
            blogPosts.slice(firstIndex, lastIndex).map((blog) => (
              <div
                key={blog.id}
                className={`w-[95%] md:w-[30%] my-5 mx-3 px-5 rounded-xl ${
                  className[blog.category] || "bg-gray-300"
                }`}
              >
                <BlogCard
                  title={blog.title}
                  content={blog.content}
                  author={blog.author}
                  date={blog.date}
                  id={blog.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full flex my-2 px-24 md:px-[48%]">
        <button
          className="bg-green-600 py-2 px-5 rounded-lg outline-none font-serif text-lg text-white mr-2"
          onClick={() => {
            setFirstIndex(0);
            setLastIndex(3);
          }}
        >
          1
        </button>
        <button
          className="bg-green-600 py-2 px-5 rounded-lg outline-none font-serif text-lg text-white mr-2"
          onClick={() => {
            setFirstIndex(3);
            setLastIndex(6);
          }}
        >
          2
        </button>
        <button
          className="bg-green-600 py-2 px-5 rounded-lg outline-none font-serif text-lg text-white mr-2"
          onClick={() => {
            setFirstIndex(6);
            setLastIndex(9);
          }}
        >
          3
        </button>
      </div>
      <div className="hidden md:flex w-full mt-20">
        <div className="pl-64">
          <h1 className="text-5xl font-serif font-bold ml-16">Latest post</h1>
          <h2 className="text-xl font-serif font-black my-3 ml-16">
            ML - Machine Learning
          </h2>
          <h4 className="text-lg font-serif my-3 ml-16">Anamika pandey June 2025</h4>
        </div>
        <div className="w-[40%] pl-8 ml-20 mb bg-gradient-to-r from-[#0f172a]  to-[#334155] rounded-xl">
        {
          filteredBlog.map((blog)=>{
            return (
             <div key={blog.id} >
               <BlogCard
                  title={blog.title}
                  content={blog.content}
                  author={blog.author}
                  date={blog.date}
                  id={blog.id}
                />
             </div>
            )
          })
        }
        </div>
      </div>
    </div>

    
        <div
          className={`
          absolute top-20 right-0 h-[100%] bg-gradient-to-r from-[#212d49]  to-[#334155] text-white overflow-hidden
          transition-all duration-500 ease-in-out
          ${expandMenu ? "w-[48%] translate-x-0 " : "w-0 translate-x-full"}
        `}
        >
          <div className=" w-[100%] py-3 ml-3 pl-1">
            <input
              type="text"
              placeholder="Blog..."
              className="w-[80%] py-3 px-2 rounded-xl outline-none bg-orange-300 mr-3"
              value={input}
              onChange={(e)=>setInput(e.target.value.toLocaleLowerCase())}
            />
           <div className={`${searchedBlog.length > 0 ? "block" : "hidden"} w-[80%]`} >
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
};

export default Home;
