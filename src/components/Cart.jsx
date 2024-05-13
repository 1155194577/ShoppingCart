import Carditem from "./Cartitem"



function Cart(props){
    
    const sum = (arr) =>  {
        const map = props.NumMap; 
        console.log(arr.map((item)=>(map[item.title])));
        console.log(arr.map((item)=>(item.price))); 
        const sumArr = arr.map((item)=>(map[item.title]*item.price)); 
        console.log(sumArr);
        const addall = sumArr.reduce((acc,curr)=>acc+curr,0);
        console.log(addall);
        return addall; 
    }

    const {Arr} = props;
    console.log("Items added to shopping cart :", Arr); 
    return (
            <div>
        <div className='flex flex-col w-full'> 
             {
                Arr.map(
                    (item) => (
                        <Carditem
                            key = {item.key}
                           title = {item.title}
                           price = {item.price} 
                           numbers ={item.numbers}
                           Cartdel = {props.Cartdel}
                            NumMap    =  {props.NumMap}
                              Increment   =   {props.Inc}
                              Decrement  = {props.Dec}
                        />
                    ) 

                )
      }
      <div className="bottom-0 absolute right-2 w-24 h-24 text-xl bg-cyan-300">Total {sum(Arr)}</div>
    </div>
    </div>
    )
}

export default Cart; 

//* {products.map(
    //(product) => (
     //   <Carditem title = {product.author}/>
   // ))}
//

//{ ordereds.map(
 //   (ordered) => (<Carditem title={ordered.name}></Carditem>))
  // }