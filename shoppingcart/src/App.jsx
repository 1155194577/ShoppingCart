import { useState,useEffect} from 'react'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
import Cart from './components/Cart'
function App() {

  const url = "https://picsum.photos/v2/list";
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
  const AddToCart = (title,price,url) => { 
    console.log(OrderingArr);
    const pushing = [title,price,url]; 
    SetOrderingArr([...OrderingArr,pushing]);
  }
  return (
    <div className="bg-gray-400">
    <div><Header shoppingcart={GotoShoppingCart} home={GotoHomePage}/></div>

    <div className="w-3/4 h-full"> 
    {IsShopping ? <ProductsList products={datajson} Cartadd={AddToCart}/> : <Cart Arr={OrderingArr}/>}
    </div>

    </div>
  )
}

export default App;