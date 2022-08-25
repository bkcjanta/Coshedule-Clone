import Navbar from "./Navbar";
import React from "react";
import { Routes,Route } from "react-router-dom";
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navbar/>}/>
        </Routes>
    )
    
}