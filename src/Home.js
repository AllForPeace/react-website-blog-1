import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState("");

  //abstract this part out - custom hook
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(blogs);
        console.log("Blog data is set");
      });

    return () => {
      console.log("Clean up function right here.");
    };
  }, []);

  return (
    <div className="homePage">
      <h1>All Blogs</h1>
      {blogs &&
        blogs.map((blog) => (
          <Link to={"/blogs/" + blog.id}>
            <article className="single-blog" key={blog.id}>
              <h2 className="title"> {blog.title.toUpperCase()}</h2>
              <p className="posted-on">
                <span className="article-meta-info">
                  Posted on: {blog.posted}
                </span>
              </p>
              <p className="body">{blog.body}</p>
              <p className="author">
                <span className="article-meta-info">
                  Written by: {blog.author}
                </span>
              </p>
            </article>
          </Link>
        ))}
    </div>
  );
};

export default Home;
