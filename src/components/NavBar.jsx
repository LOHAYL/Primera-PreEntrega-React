import React from "react";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png"




function NavBar( props ){

    const {items} = props;

    return (
        <nav>
            <div className="containerLogo">

                <img src={logo} alt="logo" className="logo" />
                <h1>CompraYA!</h1>

            </div>
            
            <ul>
                {
                    items.map((item) => <li><a href="#">{item}</a></li> )
                }
                
            </ul>
            <CartWidget/>
            
        </nav>
    )

}

export default NavBar;