import { useState,useEffect} from 'react'
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Product from './components/Product'
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
  console.log(datajson);

  return (
    <div className="bg-gray-400">
    <div><Header/></div>

    <div className="w-3/4 h-full"> 
    <ProductsList products={datajson}/>
    </div>

    </div>
  )
}

export default App;