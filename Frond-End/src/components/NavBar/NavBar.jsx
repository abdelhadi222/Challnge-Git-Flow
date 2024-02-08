import "../NavBar/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquarePlus , faHeart ,faPowerOff , faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import im  from  "../../Images/OOO.png"
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
export default function NavBar(props) {
   
    let {r, rr} = props

    let [showFav,setShowFav] =useState(false)
    let [add,setAdd] =useState(false)
    let [relode,setrelode] =useState(false)
    let [user,setUser] =useState('')
    useEffect(()=>{
    let getUsers = JSON.parse(window.localStorage.getItem('Users'))
    let us = getUsers.filter((e)=> e.token == window.localStorage.getItem('Token'))
    setUser(us)
    },[rr])

    function Fva() {
        setShowFav(true)
       document.querySelector('.NAV').classList.add('P')
    }

    let [image,setImage] = useState([])
     let [nameImage,setNameImage] = useState('')
    let [imageCompi,setImageCompi] = useState('')
    let nav= useNavigate()


  const imageOnChange = (e) => {
   console.log('ede');
      setImage(e.target.files[0])

        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (ev) => {
            return setImageCompi(ev.target.result);
        };
    };
   //  console.log("ee" , imageCompi);


   console.log('rrrg', user);

   function addImage() {

    if(imageCompi == "") {alert('Pls Enter Your Image')}
    if(nameImage == "") {alert('Pls Enter Name Image')}
    
    if(JSON.parse(window.localStorage.getItem('Images'))) {
        let iam = JSON.parse(window.localStorage.getItem('Images'))
         let ob2 = {
        image:imageCompi,
        tokenUser:window.localStorage.getItem('Token'),
        nameImage:nameImage
    }
        iam.push(ob2)
        window.localStorage.setItem('Images' , JSON.stringify(iam))
         setAdd(false)
         document.querySelector('.NAV').classList.remove('P')
         r(p=>!p)
        return
    }

    //Two
    let ob1 = [{
        image:imageCompi,
        tokenUser:window.localStorage.getItem('Token'),
        nameImage:nameImage
    }]
    window.localStorage.setItem('Images' , JSON.stringify(ob1))
    setAdd(false)
    document.querySelector('.NAV').classList.remove('P')
    r(p=>!p)

      

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
                    <FontAwesomeIcon icon={faPowerOff} className="IconNavBar" style={{fontSize:'26px',color:'white'}} onClick={()=>{
                         window.localStorage.removeItem('Token')
                         nav('/login')
                    }} />
                 </div>

                 {
                    add &&
                      <div className="white" style={{display:'flex',gap:'30px',flexDirection:'column'}} >
                        <div>
                             <input type="File"  onChange={imageOnChange}/>
                        </div>

                         <div>
                            <input type="text" value={nameImage}  onChange={(e)=>setNameImage(e.target.value)}/>
                         </div>
                           

                         <button className="bu" onClick={addImage} style={{width:"30%",margin:'0 auto'}}>Add</button>
                      </div>
                 }

                 {
                    showFav &&
                     <div className="white"  >
                        <FontAwesomeIcon icon={faCircleXmark} style={{position:'absolute',right:'-5px',top:'-10px',color:'red'}} onClick={()=>{
                                document.querySelector('.NAV').classList.remove('P')
                                setShowFav(false)
                        }}  />
                        {Array.isArray(user[0].Fav) && user[0].Fav.length > 0 ?
                           user[0].Fav.map((e , i)=> {
                             return <div key={i} >
                                <img src={e} alt="" style={{width:'70px',height:'70Px'}} />
                             </div>
                           }):'no'
                         }
                     </div>

                 }


             </header>
        </div>
    )
}