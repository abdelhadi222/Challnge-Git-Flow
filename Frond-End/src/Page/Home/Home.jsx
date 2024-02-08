import "../Home/Home.css"
import NavBar from "../../components/NavBar/NavBar";
import ima from "../../../src/Images/pex.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlassPlus} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return(
        <div>
            <NavBar/>
             <section className="Sec" style={{backgroundImage:`url(${ima})`}}>
                   <div style={{display:'flex',gap:'20px'}}>
                      <div className="serch">
                         <input type="text" />
                         <FontAwesomeIcon icon={faMagnifyingGlassPlus} style={{position:'absolute',right:'26%',top:'28.5%'}} />
                      </div>
                      {/* <button>add</button> */}
                   </div>
             </section>

             <div>
                <h2 style={{margin:'20px auto',textAlign:'center'}}>All Images</h2>
                 
             </div>
        </div>
    )
}