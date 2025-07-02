import React , {useEffect, useState}from 'react';
import { NavLink } from "react-router-dom";
import { blogPosts } from '../blogData';

const About = ({expandMenu , setExpandMenu}) => {
  const [input, setInput] = useState("");
    const  searchedBlog = blogPosts.filter(item =>input && (item.title.toLocaleLowerCase().includes(input)))

   useEffect(() => {
        setExpandMenu(false)
      
      }, []);
  return (
    <>
    <div  className={expandMenu?'h-screen opacity-50':'h-screen opacity-100'}>
    <div className='my-10 mx-6 md:mx-28 text-justify text-lg font-serif'>
    

Welcome to whisperInk, your go-to destination for insightful articles, tutorials, and updates on technology, coding, design, and more.
<br />

Our mission is to empower learners, developers, and enthusiasts by sharing knowledge in a simple and accessible way. Whether you're just starting out or looking to sharpen your skills, you'll find helpful content here. <br />

What We Offer
<br />
<br />
- ✍️ High-quality blog posts on web development, JavaScript, React, CSS, and modern technologies. <br />
- 🌟 Tips, tricks, and best practices to improve your coding journey. <br />
- 💡 Project ideas and inspiration for your next creation. <br />

### Our Vision <br /> <br />
We believe in open knowledge and the power of community. Our aim is to create a space where learning never stops and everyone can contribute, share, and grow. <br />

Thank you for being part of our journey! 🚀  <br />
If you'd like to contribute, collaborate, or give feedback, feel free to contact us mailto:contact@myblog.com. <br />

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

export default About;
