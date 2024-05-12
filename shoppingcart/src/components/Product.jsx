//image 
//price
//button : add to cart (message added to cart)

function Product(props) {

    return (
        <div className="bg-sky-600 h-30 w-30 flex flex-col space-y-3 items-center relative top-2 left-2 border-2 border-black">
        <img src={props.image_url} className="h-1/2 w-1/2"></img>
        <h1 className="wrapping">{props.title}</h1>  
        <p>HKD : {props.price} </p>  
        <div className="rounded-lg">
        <button className="bg-amber-300 w-16 h-12 rounded-full border-2 border-black text-xs">Add to cart</button>
        </div>
        </div>
    )
}

export default Product; 

