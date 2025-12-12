import React from "react";
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
function Image(){
    const [ImagePath, setImagePath]=useState(null)
    const GetData=(event)=>{
        const file=event.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setImagePath(reader.result);
            // console.log(reader.result);
        }
        // const path=URL.createObjectURL(file);
        // setImagePath(path);
    }
    return(
        <>
        <input type="file" onChange={(event)=>GetData(event)} />
        {ImagePath ? <img className="myimage" src={ImagePath} alt="No Image" /> : <></>}
        </>
    )
}
export default Image;