import { NavLink } from "react-router-dom"


function Header() {

    return (
        <header >
            {/* <h1>Something to say</h1> */}
            {/* <img src='https://i.postimg.cc/xTBGKSvN/disney-pedia-logo.png' /> */}
            <nav class="hamburger-menu">
                

                <input type="checkbox"  id="menu__toggle"/>
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

            <ul class="menu__box">
                <NavLink to={"/"}>
                    <li  class="menu__item" >Home</li>
                </NavLink>
                <NavLink to={"/character"}>
                    <li  class="menu__item" >All Characters</li>
                </NavLink>
                <NavLink to={"/movies"}>
                    <li  class="menu__item" >Movies</li>
                </NavLink>
                
            </ul>
            
            </nav>
        </header>
    );
}
export default Header;