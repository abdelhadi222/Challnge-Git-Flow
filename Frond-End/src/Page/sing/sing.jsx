import "../Sing/Sing.css"
// import  imaTikTok from "../../Images/tiktokImageNew.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {  useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
// import {AddUser} from "../../"


// import { AddUser } from "../../redux/actions/Data";
import { Link, useNavigate } from "react-router-dom";

export default function Sing() {

    let stateUsers = useSelector(state => state)
    let dispatch = useDispatch()

    // console.log('rr' , stateUsers);


    let token = []
    let nav  =useNavigate()
    let tok = "A66YTIUEFhsgdhdgh65E6BOOJDHJJfdfFDtTvhLJHJD873FVV3CSEKEC74V7VVVhdRVRVVjhdjHKghGfT09DHEJFCKaz"

  function tooo() {
      for (let i = 0; i < 100; i++) {
                let rand = Math.floor(Math.random() * tok.length)
                token.push(tok[rand])
               }

  }

  

   
        let [email,setEmail] = useState('')
        let [password,setPassword] = useState('')
        let [name,setName] = useState('')

        function sendData() {
            console.log('dddd');
            tooo()
            dispatch()
           
            
        }

    

     return(
           <div className="Sing">

            <div className="BoxSing">
                 <div style={{textAlign:'center',marginTop:'20px', marginBottom:'20px'}}><img src='' alt="" style={{width:'30Px',height:'30px', borderRadius:'50%'}} /></div>
                 <h2 style={{marginBottom:'20px'}}>Register</h2>

                 <div>

                    <div className="BoxInp">
                        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  />
                    </div>

                    <div className="BoxInp">
                        <input type="text" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="BoxInp">
                          <input type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                 </div>

                 <div className="Button" onClick={sendData} ><button> <FontAwesomeIcon icon={faPaperPlane} style={{marginRight:'15px'}} beat /> Send</button></div>
                  
                  <Link to={'/login'}>Login in your Account</Link>
              

            </div>
            
        </div>
     )
}