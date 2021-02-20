import { useState, useEffect } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState('');

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            console.log(blogs);
            console.log("Blog data is set");
        })

        return () => {
            console.log("Clean up function right here.")
        }
    }, []);

    return ( 
        <div className="homePage">
            <h1>Yo Whatsapp!</h1>
            <h2>All Blogs</h2>
            {blogs && blogs.map((blog) => (
               <article className="single-blog" key = {blog.id}>
                    <h2> { blog.title }</h2>
                    <p className="body">
                        {blog.body}
                    </p>
                    </article>
            )) }
        </div>
     );
}
 
export default Home;