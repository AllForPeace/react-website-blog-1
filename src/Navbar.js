const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h2 id="nav-logo">Nischal's Blog</h2>
        <ul>
          <li><a id="about" href="#">About</a></li>
          <li><a id="contact" href="#">Contact</a></li>
          <li><a id="blog" href="#">Blog</a></li>
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
