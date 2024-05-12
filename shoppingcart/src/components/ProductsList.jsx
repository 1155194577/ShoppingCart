import Product from './Product'



function ProductsList(props) {
    const {products} = props;  
    console.log(products);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3' >
            {
                products.map(
                    (product) => (
                        <Product
                            key = {product.id}
                            title = {product.title}
                            image_url = {product.image}
                            price = {product.price}
                            cartadd = {props.Cartadd}
                        />
                    ) 

                )
      }
        </div>
    )
    
}
export default ProductsList; 