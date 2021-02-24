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
        <div className="individual-blog">
            <h2 className="blog-title"> {blog.title} </h2>
            <p className="blog-meta"> Posted on: {blog.posted} </p>
            <p className="blog-body"> {blog.body} </p>
            <p className="blog-author"> Authored by: {blog.author} </p>

            <div className="comments">

            </div>
        </div>
     );
}
 
export default SingleBlogPage;