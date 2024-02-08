import "../Login/Login.css"
// import  imaTikTok from "../../Images/tiktokImageNew.png"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
export default function Login() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let nav = useNavigate('')
    console.log("eeee");

    function login() {
        let getData = JSON.parse(window.localStorage.getItem('Users'))
        let chekEmail = getData.some((e)=> e.email == email )
        let chekPassword = getData.some((e)=> e.password == password )

        if(!chekEmail && !chekPassword){
            alert('You Have Not Account')
            return
        }

        if(chekEmail && chekPassword) {
            nav('/')
            return
        }
        else if(!chekEmail){
            alert('Your Email Is Wongr')
            return
        }
         else if(!chekPassword){
            alert('Your pass Is Wongr')
            return
        }

        

    }
   
     return(
        <div className="Login">

            <div className="BoxLogin">
             
                 <div style={{textAlign:'center',marginTop:'20px', marginBottom:'20px'}}><img src="" alt="" style={{width:'40Px',height:'40px', borderRadius:'50%'}} /></div>
                      <h2 style={{marginBottom:'20px'}}>Login  </h2>

                 <div>

                    <div className="BoxInp">
                        <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>

                    <div className="BoxInp">
                          <input type="password" placeholder="password"   value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                 </div>

                 <div className="Button" onClick={login}><button> <FontAwesomeIcon icon={faPaperPlane} style={{marginRight:'15px'}} beat />Send</button></div>

                 
                  <Link to={'/sing'}>Creat Account ?</Link>
            </div>
            
        </div>
     )
} 