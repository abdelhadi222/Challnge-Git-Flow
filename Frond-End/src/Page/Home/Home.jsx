import "../Home/Home.css"
import NavBar from "../../components/NavBar/NavBar";
import {ima} from "../../../src/Images/r.png"

export default function Home() {
    return(
        <div>
            <NavBar/>
             <section className="Sec" style={{backgroundImage:`url(${ima})`}}>
                   <div style={{display:'flex',gap:'20px'}}>
                      <input type="text" />
                      <button>add</button>
                   </div>
             </section>

             <div>
                <h3 style={{margin:'20px auto'}}>All Images</h3>
                 
             </div>
        </div>
    )
}