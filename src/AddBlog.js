import { useState } from "react";
import {  useHistory } from 'react-router-dom'

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yoshi");
  const [clicked, setClicked] = useState(false);

  const history = useHistory();

  function handlePostSubmit (e) {
    e.preventDefault();
    setClicked(true)
    let blog = { title, body, author, posted: new Date().toLocaleString()};
    console.log('blog and contents: ' + blog);
    fetch('http://localhost:8000/blogs/', {
      method: "POST",
      headers : {'content-type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(() => history.push('/'))
  }

  return (
    <div className="add-blog">
        <h2>Add A New Blog</h2>
      <form>
        <label htmlFor="blog-title"><strong>Title</strong></label>
        <input 
        type="text" 
        name="blog-title" 
        id="blog-title" 
        onChange={(e) => setTitle(e.target.value)}
        value={title}/>
        <label htmlFor=""><strong>Post</strong></label>
        <textarea 
        rows="9"
        name="blog-body" 
        id="blog-body"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        ></textarea>
        <label id="blog-author-label" htmlFor="blog-author"><strong>Author: </strong></label>
        <input
          type="text"
          id="blog-author"
          className="blog-author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <button onClick={handlePostSubmit}className={"add-blog-btn " + clicked}>Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
