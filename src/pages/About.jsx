import React , {useEffect}from 'react';
import search from "../assets/[CITYPNG.COM]White Search Icon Button PNG IMG - 700x700.png";
import { NavLink } from "react-router-dom";

const About = ({expandMenu , setExpandMenu}) => {
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

export default About;
