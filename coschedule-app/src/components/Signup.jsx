import "../signup.css"
import { useState } from "react"
export default function Signup() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div id="signup-container">
            <h3>New User Register</h3>
            <form action="">
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Name" /> <br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email" /> <br/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" /> <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}