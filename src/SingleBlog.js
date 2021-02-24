import React, { useState, useEffect } from 'react';

const SingleBlogPage = ({match}) => {

    const [blog, setBlog] = useState('');
    console.log(match);
    // fetch data from params and blogs
    useEffect(() => {
        fetch('http://localhost:8000/blogs/' + match.params.id)
        .then(res => res.json())
        .then(data => {
            setBlog(data);
            console.log("Data is set: " + blog);
        })
    }, []);

    return ( 
        <div className="single-blog">
            <h2 className="blog-title"> {blog.title} </h2>
            <h3 className="blog-meta"> {blog.posted} </h3>
            <p className="blog-body"> {blog.body} </p>
            <h4 className="blog-author"> {blog.author} </h4>

            <div className="comments">

            </div>
        </div>
     );
}
 
export default SingleBlogPage;