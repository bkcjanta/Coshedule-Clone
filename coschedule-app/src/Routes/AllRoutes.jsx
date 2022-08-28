import Navbar from "../components/Navbar";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Signup from "../components/Signup";
export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/signup" element={<Signup/>}/>

        </Routes>
    )
    
}