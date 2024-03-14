import { useEffect, useState } from "react";
import "./ProgressBar.css"

const ProgressBar = ({value = 0}) =>{
   const [percent , setPercent] = useState(value);
   useEffect (()=>{
    setPercent(Math.min(100,Math.max(value,0)));
   },[value]);
    return(
        <>
        <div className="progress">
      <span style={{color: percent > 50 ? "white" : "black"}}>{percent.toFixed()}%</span>
      <div className="bar" style={{width:`${percent}%`}}></div>
      </div>
      {percent > 99 ? <span className="imgSize"><img src="https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?t=st=1710393639~exp=1710397239~hmac=e7eddda71d981c938490337d32d917722710efdb3c0035bf8140354945c5cf4f&w=826" /></span> : <span>Loading....</span>}
      </>
    )
}

export default ProgressBar;