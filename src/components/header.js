import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink to="/frontend" className="nav-link" aria-current="page">Frontend</NavLink></li>
                    
                </ul>
            </header>
      </div>
    )
}
export default Header;