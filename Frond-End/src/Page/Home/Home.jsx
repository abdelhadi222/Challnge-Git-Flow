import "../Home/Home.css"
import NavBar from "../../components/NavBar/NavBar";
import ima from "../../../src/Images/pex.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlassPlus , faHeart} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
   let [allImages,setAllImages] = useState([])
   let [user,setUser] = useState('')
   let [inp,setInp] = useState('')
   let [r,setR] = useState(false)
   let [users,setUsers]=useState([])
     let [newi,setNewI]=useState()

   // let dispatch = useDispatch()
  useEffect(()=>{
   if(JSON.parse(window.localStorage.getItem('Images'))){
       let Ima = JSON.parse(window.localStorage.getItem('Images'))
       let fil = Ima.filter((e)=> e.tokenUser == window.localStorage.getItem('Token'))
       setAllImages(fil)
   }
    
  },[r])
  useEffect(()=>{
    let getUsers = JSON.parse(window.localStorage.getItem('Users'))
    setUsers(getUsers)
    let us = getUsers.filter((e)=> e.token == window.localStorage.getItem('Token'))
    setUser(us)
  },[])
 

  function Fav(imaUrl) {


        let chek =  false
        let ind =""
        if(Array.isArray(user[0].Fav) && user[0].Fav.length > 0) {
          let u = user[0].Fav.some((e)=> e == imaUrl)
          chek = u
          let i=  user[0].Fav.findIndex((e)=> e == imaUrl)
          ind = i
        }


        console.log('r' , chek);

   if(chek){
     for (let i = 0; i < users.length; i++) {
      if(users[i].token == window.localStorage.getItem('Token')){
         console.log('dlet');
         users[i].Fav.splice(ind,1)
      }
   }
   setR(p=>!p)
    window.localStorage.setItem('Users' , JSON.stringify(users))
    return
   }

   
   

 

   for (let i = 0; i < users.length; i++) {
      if(users[i].token == window.localStorage.getItem('Token')){
         users[i].Fav.push(imaUrl)
      }
   }
   setR(p=>!p)
   window.localStorage.setItem('Users' , JSON.stringify(users))
  }

  function fol(e) {
   setInp(e.target.value)
   let lll = e.target.value

   let newIma = allImages.filter((e)=>{
      return e.nameImage.toLowerCase().includes(lll.trim().toLowerCase())
   })
   setNewI(newIma)

   
  }


   
    return(
        <div >
            <NavBar r={setR} rr={r}/>
             <section className="Sec" style={{backgroundImage:`url(${ima})`}}>
                   <div style={{display:'flex',gap:'20px'}}>
                      <div className="serch">
                         <input type="text" onChange={fol} />
                         <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{position:'absolute',right:'26%',top:'30%'}} />
                      </div>
                      {/* <button>add</button> */}
                   </div>
             </section>

             <div>
                <h2 style={{marginTop:'330px',marginBottom:'20px',textAlign:'center'}}>All Images</h2>
                  
                  <div className="ALLV">
                  {
                     allImages.length > 0 && inp=='' && allImages.map((e,i)=>{
                         return <div className="q" key={i} style={{position:'relative'}}>
                           
                             {
                              Array.isArray(user[0].Fav) && user[0].Fav.length > 0 &&
                              user[0].Fav.some((el)=> el == e.image) ?<div className="Fv" style={{width:'30px',height:'30px'}} onClick={()=>Fav(e.image)}><FontAwesomeIcon icon={faHeart}  style={{color:'red'}}/></div>:<div className="Fv" style={{width:'30px',height:'30px'}} onClick={()=>Fav(e.image)}><FontAwesomeIcon icon={faHeart}  style={{color:'white'}}/></div>
                             }
                             <div  className="Ti">Titel : {e.nameImage}</div>
                            <img src={e.image} alt="" />
                            
                         </div>
                     })
                      
                  }
                  </div>


                <div className="ALLV">
                     {
                       Array.isArray(newi) && newi.length > 0 && inp!=''  && newi.map((e,i)=>{
                         return <div className="q" key={i} style={{position:'relative'}}>
                           
                             {
                              Array.isArray(user[0].Fav) && user[0].Fav.length > 0 &&
                              user[0].Fav.some((el)=> el == e.image) ?<div className="Fv" style={{width:'30px',height:'30px'}} onClick={()=>Fav(e.image)}><FontAwesomeIcon icon={faHeart}  style={{color:'red'}}/></div>:<div className="Fv" style={{width:'30px',height:'30px'}} onClick={()=>Fav(e.image)}><FontAwesomeIcon icon={faHeart}  style={{color:'white'}}/></div>
                             }
                             <div  className="Ti">Titel : {e.nameImage}</div>
                            <img src={e.image} alt="" />
                            
                         </div>
                     })
                      
                  }
                  </div>
                  

                   
  



                 
             </div>
        </div>
    )
}