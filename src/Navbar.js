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
                {/* <a href="#">Log in</a>
                <a href="#">Sign up</a> */}
            </nav>
        </div>
     );
}
 
export default Navbar;