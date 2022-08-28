import "../Home.css";
import { useState } from "react";
export default function Sidebar(){
    const [toggle,setToggle]=useState(0);
    const handle=()=>{
        if(toggle===0){
            document.getElementById("sidebar").style.width="200px";
            //  document.getElementsByClassName("hidden").style.display="inline";
             let x= document.getElementsByClassName("hidden");
             for(let element of x){
               element.style.display="inline"; 
             }
            setToggle(1);
        }else{
          let x= document.getElementsByClassName("hidden");
          for(let element of x){
            element.style.display="none"; 
          }
            document.getElementById("sidebar").style.width="50px";
            setToggle(0);
        }
     
    }
    return (
        <>
        <div id="sidebar" className="sidebar">
           <div id="menu-icon" onClick={handle}>
            <img id="img"  src="https://img.icons8.com/ios-glyphs/344/menu--v1.png" alt="" />
            <h3 id="hid" className="hidden">Bupendra</h3>
           </div>
           <div id="menu-container" onClick={handle}>
           <div id="home">
           <img id="img"  src="https://img.icons8.com/material-outlined/344/home--v2.png" alt="" />
            <h3 id="" className="hidden">Bupendra</h3>
           </div>
           <div id="calendar" onClick={handle}>
           <img id="img"  src="https://img.icons8.com/material-outlined/344/calendar--v1.png" alt="" />
            <h3 id="" className="hidden">Bupendra</h3>
           </div>
           <div id="requeue" onClick={handle}>
           <img id="img" src="https://img.icons8.com/ios-glyphs/344/shuffle.png" alt="" />
            <h3 id="" className="hidden">Bupendra</h3>
           </div>
           <div id="analytics" onClick={handle}>
           <img id="img"  src="https://img.icons8.com/material/344/bar-chart--v1.png" alt="" />
            <h3 id="" className="hidden">Bupendra</h3>
           </div>
           <div id="setting" onClick={handle}>
           <img id="img"  src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="" />
            <h3 id="" className="hidden">Bupendra</h3>
           </div>
           </div>

        </div>
        </>
    )
}