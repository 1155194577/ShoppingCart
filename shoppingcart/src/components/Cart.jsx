import Carditem from "./Cartitem"


function Cart(props){
    const {Arr} = props;
    console.log("Items added to shopping cart :", Arr); 
    return (

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
                        />
                    ) 

                )
      }
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