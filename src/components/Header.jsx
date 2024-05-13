import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header(props){
    return (
        <div className="bg-sky-400 w-full h-19 flex justify-between">
        <h1 className="px-2 hover:underline underline-offset-2 font-bold" onClick={props.home}>Website Logos</h1>
        <div className='px-3' onClick={props.shoppingcart}>
        <img className="w-5 h-5 hover:w-6 hover:h-6" src="src/assets/cart-shopping-svgrepo-com.svg"></img>
        </div>
        </div>
    )     

}

export default Header; 