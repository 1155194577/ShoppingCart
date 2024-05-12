// The heading is a header tag
// bg is green 
// logo on left ,shopping cart on right

function Header(){
    return (
        <div className="bg-green-600 w-full h-18 flex justify-between">
        <h1 className="px-2">Website Logo</h1>
        <h2 className="px-2">Shopping Cart</h2>
        </div>
    )     

}

export default Header; 