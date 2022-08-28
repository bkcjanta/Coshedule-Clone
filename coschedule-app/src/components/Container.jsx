import "../Home.css"
import Sidebar from "./Sidebar"
export default function Container(){
    return(
        <>
          <div className="Container">
            <div>
                <Sidebar/>
            </div>
            <div className="next">
              <div className="header"></div>
            </div>

          </div>
        </>
    )
}