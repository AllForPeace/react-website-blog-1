const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
                <h2 id="nav-logo">Nischal's Blog</h2>
                <a id="about" href="#">About</a>
                <a id="contact" href="#">Contact</a>
                <a id="blog" href="#">Blog</a>

                {/* <a href="#">Log in</a>
                <a href="#">Sign up</a> */}
            </nav>
        </div>
     );
}
 
export default Navbar;