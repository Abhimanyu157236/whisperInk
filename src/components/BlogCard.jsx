import React , { useState} from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({title, content, author, date, id}) => {
      
  return (
    <div className='w-full text-white '>
      <h1 className='text-2xl font-serif font-bold mt-8 mb-3 pl-3'>
        {title}
      </h1>
      <p className='text-lg font-serif mb-3 pl-3'>
        {content.substring(0, 100)}.....
      </p>
      <h2 className='text-sm font-serif mt-6 mb-1 pl-3'>
        {author}
      </h2>
      <h4 className='text-sm font-serif mb-2 pl-3'>
        {date}
      </h4>
      <div className='w-full pt-6'>
        <NavLink to="/blogs"
        state={{id:id}}>
        <button className='bg-orange-500 px-3 py-2 rounded-lg font-serif font-semibold text-md  mb-5 ml-28 md:ml-48 hover:scale-125 hover:shadow-[0px_10px_10px_0px_rgba(0,_0,_0,_0.35)] hover:bg-orange-700 hover:transition-all duration-1000 hover:-translate-y-3 '> 
        Read More
       </button>  
          </NavLink> 
      </div>
    </div>
  );
}

export default BlogCard;
