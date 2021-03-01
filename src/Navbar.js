import { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

const Navbar = () => {

  const [mobileMenuClicked, setMclick] = useState(false);
  const history = useHistory();

  const mobileMenuExpand = () => {
    setMclick(!mobileMenuClicked);
  };

  const logoClicked = () => {
    history.push('/');
  }
  
  return (
    <div className="navbar">
      <nav>
        <h2 id="nav-logo" onClick={logoClicked}>Nischal's Blog</h2>
        <ul className="collapse">
          <li>
            <Link to="/addBlog" id="add-blog-nav">
              Add Blog Post
            </Link>
          </li>
          <li>
            <Link id="about" to="#">
              About
            </Link>
          </li>
          <li>
            <Link id="contact" to="#">
              Contact
            </Link>
          </li>
          <li>
            <Link id="blog" to="#">
              Blog
            </Link>
          </li>
        </ul>
        
        <span className={"mobile-menu "} onClick={mobileMenuExpand}><i className={ mobileMenuClicked ? "fas fa-times" : "fas fa-bars"}></i></span>
      </nav>
      <ul className={"mobile-menu " + (mobileMenuClicked ? "clicked" : "")}>
          <li>
            <Link to="/addBlog" id="add-blog-nav">
              Add Blog Post
            </Link>
          </li>
          <li>
            <Link id="about" to="#">
              About
            </Link>
          </li>
          <li>
            <Link id="contact" to="#">
              Contact
            </Link>
          </li>
          <li>
            <Link id="blog" to="#">
              Blog
            </Link>
          </li>
        </ul>
      {/* <div className="login">
        <li><a id="log-in" href="#">Log in</a></li>
          <li><a id="sign-up" href="#">Sign up</a></li>
        </div> */}
    </div>
  );
};

export default Navbar;
