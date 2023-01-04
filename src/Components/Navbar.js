import React from "react";
import img1 from  "../Assets/websitelogo-kopie.jpg"
const Navbar = () => {

    return (
            <nav className={"navbar"}>
                <ul className={"unordered-list"}>
                    <li className={"home-button"}><img className={"home-button-picture"} src={img1} alt="website-icon"/></li>
                    <li><a href={""}>About us</a></li>
                    <li className={"login"}><a href={""}>Login</a></li>
                </ul>

            </nav>
    )
}
export default Navbar