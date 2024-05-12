import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Header(props){
    return (
        <div className="bg-green-600 w-full h-18 flex justify-between">
        <h1 className="px-2" onClick={props.home}>Website Logo</h1>
        <h1 className="px-2" onClick={props.shoppingcart}>Shopping Cart</h1>
        </div>
    )     

}

export default Header; 