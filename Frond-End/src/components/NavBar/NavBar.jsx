import "../NavBar/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquarePlus , faHeart} from "@fortawesome/free-solid-svg-icons";
import im  from  "../../Images/OOO.png"
import { useState } from "react";
export default function NavBar() {
    let [showFav,setShowFav] =useState(false)
    let [add,setAdd] =useState(false)

    function Fva() {
        setShowFav(true)
       document.querySelector('.NAV').classList.add('P')
    }

    return  (
        <div className="NAV">
             <header>
                 <div style={{padding:'5px'}}><img src={im} alt="" style={{width:'40px',height:'40px',borderRadius:'50Px'}} /></div>
                 <div style={{display:'flex',gap:'30px',height:'50%',marginTop:'13px',marginRight:'10px'}}>
                    <FontAwesomeIcon icon={faHeart} onClick={Fva} style={{fontSize:'26px',color:'white'}} />
                    <button className="bu" onClick={()=>{
                         setAdd(true)
                         document.querySelector('.NAV').classList.add('P')
                    }}>Add image <FontAwesomeIcon icon={faSquarePlus} /></button>
                 </div>

                 {
                    add &&
                      <div className="white" style={{display:'flex',gap:'30px',flexDirection:'column'}} >
                         <input type="File" />
                         <button className="bu" style={{width:"30%",margin:'0 auto'}}>Add</button>
                      </div>
                 }

                 {
                    showFav &&
                     <div className="white">
                        HI
                     </div>

                 }


             </header>
        </div>
    )
}