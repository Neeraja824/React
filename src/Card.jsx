import React from "react";
import "./Card.css";
import Myimage from "./assets/react.svg";
const Card=()=>{
   var MyCards=[
      {
        "image":Myimage
        "price":200000
        "brand": "BMW"
      },
      {
        "image":Myimage
        "price":300000
        "brand": "TATA"
      },
      {
        "image":Myimage
        "price":400000
        "brand": "KTM"
      },
      {
        "image":Myimage
        "price":500000
        "brand": "Audi"
      },
      {
        "image":Myimage
        "price":600000
        "brand": "HONDA"
      },
      {
        "image":Myimage
        "price":700000
        "brand": "HERO"
      },
   ]
}
return(
        <>
        <div className="parent">
        {MyCards.map((cards)=>(
                <div className="card">
                    <div className="logo">{ele.Myimage}</div>
                    <div className="info">
                        <div className="name">{ele.price}</div>
                        <div className="dept">{ele.brand}</div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
export default cards;


export default Card;