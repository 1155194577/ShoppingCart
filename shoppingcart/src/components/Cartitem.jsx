import { useState } from "react";

function Cartitem(props) {
    const [orderedval,setval] = useState(1);
    function minus() {
        if(orderedval>1)
        setval(orderedval-1); 
        else {
            let result = confirm("delete this item from the cart?"); 
            if(result) {
               alert("deleted item!");
               props.Cartdel(props.title);
            }
        }
    }
    return (
        <div className="flex flex-row justify-between content-center w-full space-y-2 bg-yellow-200">
        
            <p>{`${props.title} HKD : ${props.price*orderedval}`}</p>
            <div className="flex flex-row">
            <button onClick={()=>minus()}>-</button>
            <p>{orderedval}</p>
            <button onClick={()=>setval(orderedval+1)}>+</button>
            
            </div>
           
        </div>
    )
}
   

export default Cartitem; 
