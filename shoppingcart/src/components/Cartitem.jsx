import { useState } from "react";

function Cartitem(props) {
    const mapping = props.NumMap; 
    const orderedval = mapping[props.title];
    function minus() {
        if(orderedval>1)
         props.Decrement(props.title);  
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
            <p>{mapping[props.title]}</p>
            <button onClick={()=> props.Increment(props.title)}>+</button>
            
            </div>
           
        </div>
    )
}
   

export default Cartitem; 
