import Product from './Product'



function ProductsList(props) {
    const {products} = props;  
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3' >
            {
                products.map(
                    (product) => (
                        <Product
                            key = {product.id}
                            title = {product.author}
                            image_url = {product.download_url}
                            price = {product.width}
                        />
                    ) 

                )
      }
        </div>
    )
    
}
export default ProductsList; 