import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const SingleBlogPage = ({match}) => {

    const [blog, setBlog] = useState('');
    const history = useHistory();

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

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        })
        .then(() => history.push('/'))
    };

    return ( 
        <div className="individual-blog">
            <h2 className="blog-title"> {blog.title} </h2>
            <p className="blog-meta"> Posted on: {blog.posted} </p>
            <p className="blog-body"> {blog.body} </p>
            <p className="blog-author"> Authored by: {blog.author} </p>
            <button onClick={handleDelete}> Delete Blog </button>
            <div className="comments">

            </div>
        </div>
     );
}
 
export default SingleBlogPage;