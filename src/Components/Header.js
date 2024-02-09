import { LOGO_IMG_URL } from "../Utility/URL.JS";
import { Link } from "react-router-dom";

const Header = () => {
    return(
    <div className="Header-container">
    <div className="logo-container">
        <img className="logo" src={LOGO_IMG_URL} alt="" />
    </div>
    <div className="nav-container">
        <ul>
            <li><Link className="nav-link" to={"/"}>Home</Link></li>
            <li><Link className="nav-link" to={"/about"}>About</Link></li>
            <li><Link className="nav-link" to={"/contact"}>Contact</Link></li>
            <li>Cart</li>
        </ul>
    </div>
    </div>)
}

export default Header;

