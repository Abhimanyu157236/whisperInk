import React from "react";
import { className } from "../classname";
import { blogPosts } from "../blogData";
import { useLocation } from "react-router-dom";

const BlogDetails = ({}) => {
  const location = useLocation();
  const id = location.state?.id;
  const filteredBlog = blogPosts.filter((item) => item.id == id);

  return (
    <div className="w-full h-max font-serif">
      {filteredBlog.map((blog) => (
        <>
          <div
            className={`w-full text-white py-[10%] md:py-[4%] ${
              className[blog.category]
            }`}
          >
            <h1 className="font-bold text-3xl md:text-6xl text-center mt-14">
              {blog.title}
            </h1>
            <div
              className={`w-[80%] md:w-1/2 flex py-6 px-4 md:px-8 relative top-16 md:top-24 left-9 md:left-96 rounded-xl ${
                className[blog.category]
              }`}
            >
              <h1 className="mr-7 md:mr-10">{blog.author}</h1>
              <h3>{blog.date}</h3>
            </div>
          </div>
          <div className="mt-12 px-5 md:px-24 ">
            <p className="text-justify text-lg">{blog.content}</p>
            </div>
        </>
      ))}
    </div>
  );
};

export default BlogDetails;
