import { useState } from "react";

function Cartitem(props) {
    const [orderedval,setval] = useState([0]); 
    return (
        <div className="flex flex-row justify-between content-center w-full space-y-2 bg-yellow-200">
        
            <p>{props.title}</p>
            <div className="flex flex-row">
            <button onClick={()=>setval(orderedval-1)}>-</button>
            <p>{orderedval}</p>
            <button onClick={()=>setval(orderedval+1)}>+</button>
            </div>
           
        </div>
    )
}

export default Cartitem; 
