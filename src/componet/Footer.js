import { NavLink } from "react-router-dom"

export default function Footer () {

    return(
        <div>
          

<footer class="footer-distributed">

    <div class="footer-right">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div>

    <div class="footer-left">

        <p class="footer-links">
                <NavLink to={"/"}>
                <a class="link-1">Home</a>
                </NavLink>

                <NavLink to={"/character"}>
                <a class="link-1">All Characters</a>
                </NavLink>

                <NavLink to={"/movies"}>
                <a class="link-1">Movies</a>
                </NavLink>

        </p>

        {/* <p>Company Name &copy; 2015</p> */}
    </div>

</footer>
        </div>
    )
}