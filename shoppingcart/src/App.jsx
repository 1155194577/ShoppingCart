import { useState,useEffect} from 'react'
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

  const AddToCart = (props) => { 
    const pushtitle = props["title"];
    const titles = OrderingArr.map(item=>item.title);
    if (!titles.includes(pushtitle)) {
    SetOrderingArr([...OrderingArr,props])}
    else{
      alert("already in cart!");
    }
  }

  const DeleteFromCart = (title) => {
      const newArr = OrderingArr.filter(item => item.title!==title); 
      console.log("deleted arr :",newArr); 
       SetOrderingArr(newArr);
  }

  return (
    <div className="bg-gray-400">
    <div><Header shoppingcart={GotoShoppingCart} home={GotoHomePage}/></div>

    <div className="w-3/4 h-full"> 
    {IsShopping ? <ProductsList products={datajson} Cartadd={AddToCart}/> : <Cart Arr={OrderingArr} Cartdel={DeleteFromCart}/>}
    </div>

    </div>
  )
}

export default App;