import {useState,useEffect} from 'react'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import Cart from './components/Cart'
function App() {

  const url = 'https://fakestoreapi.com/products';
  const [datajson, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);
  const [IsShopping,SetShoppingCart] = useState([]);
  const GotoShoppingCart = () => {SetShoppingCart(false)};  
  const GotoHomePage = () => {SetShoppingCart(true)};  
  const [OrderingArr,SetOrderingArr] = useState([]);
  const [numberMap,SetnumberArr] = useState({}); //this arr keep track of number of items ordered
  
  const updateArr = (title) => {
    const preObj = {...numberMap};
      console.log("The mapping is : ",preObj)
      preObj[title] = 1;
    SetnumberArr(preObj); 
  }
  const Increment = (title) =>  {
    const preObj = {...numberMap};
      preObj[title] +=  1;
     SetnumberArr(preObj); 
      console.log("The mapping iss : ",preObj)
  }
  const Decrement = (title) =>  {
    const preObj = {...numberMap};
      preObj[title] -=  1;
     SetnumberArr(preObj); 
      console.log("The mapping iss : ",preObj)
  }




  const AddToCart = (props) => { 
    const pushtitle = props.title;
    const titles = OrderingArr.map(item=>item.title);
    if (!titles.includes(pushtitle)) {
    updateArr(pushtitle);
    SetOrderingArr([...OrderingArr,props])}
    else{
      console.log(numberMap);
      alert("already in cart!");
    }
  }

  const DeleteFromCart = (title) => {
      console.log(numberMap);
      const newArr = OrderingArr.filter(item => item.title!==title); 
      console.log("deleted arr :",newArr); 
       SetOrderingArr(newArr);
  }

  return (
    <div className="bg-gray-400">
    <div><Header shoppingcart={GotoShoppingCart} home={GotoHomePage}/></div>

    <div className="w-3/4 h-full"> 
    {IsShopping ? <ProductsList products={datajson} Cartadd={AddToCart}/> : <Cart Arr={OrderingArr} NumMap={numberMap}  Cartdel={DeleteFromCart} Inc={Increment} Dec={Decrement}/>}
    </div>

    </div>
  )
}

export default App;