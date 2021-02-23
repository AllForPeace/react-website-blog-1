import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h2 id="nav-logo">Nischal's Blog</h2>
        <ul>
          <li>
            <Link to="/addBlog" id="add-blog-button">
              Add A New Blog
            </Link>
          </li>
          <li>
            <Link id="about" href="#">
              About
            </Link>
          </li>
          <li>
            <Link id="contact" href="#">
              Contact
            </Link>
          </li>
          <li>
            <Link id="blog" href="#">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className="login">
        <li><a id="log-in" href="#">Log in</a></li>
          <li><a id="sign-up" href="#">Sign up</a></li>
        </div> */}
    </div>
  );
};

export default Navbar;
