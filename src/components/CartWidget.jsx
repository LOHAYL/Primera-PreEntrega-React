import React, { useState } from "react";
import carrito from "../img/carrito.png";

function CartWidget(){
  
    const [Contador,setContador] = useState(0)

    const Fcontador = () =>{
        setContador(Contador+1);
        
    }

    return(

        <div className="carrito">
            <img onClick={Fcontador} src={carrito} alt="carrito de compras" />
            <p>{Contador}</p>

        </div>
            
    )
}

export default CartWidget;