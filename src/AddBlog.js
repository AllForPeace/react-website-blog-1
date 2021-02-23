import { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yoshi");
  const [clicked, setClicked] = useState(false);


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
        <button onClick={() => setClicked(true)}className={"add-blog-btn " + clicked}>Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
