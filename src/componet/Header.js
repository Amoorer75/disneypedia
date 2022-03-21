import { NavLink } from "react-router-dom"


function Header() {

    return (
        <header >
            {/* <h1>Something to say</h1> */}
            {/* <img src='https://i.postimg.cc/xTBGKSvN/disney-pedia-logo.png' /> */}
            <nav role="navigation">
                <div id="menuToggle">

                <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

            <ul id="menu">
                <NavLink to={"/"}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={"/character"}>
                    <li>All Characters</li>
                </NavLink>
                <NavLink to={"/movies"}>
                    <li>Movies</li>
                </NavLink>
                
            </ul>
            </div>
            </nav>
        </header>
    );
}
export default Header;