import React , {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { blogPosts } from '../blogData';

const Contact = ({expandMenu, setExpandMenu }) => {
  const [input, setInput] = useState("");
    const  searchedBlog = blogPosts.filter(item =>input && (item.title.toLocaleLowerCase().includes(input)))

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
}

export default Contact;
