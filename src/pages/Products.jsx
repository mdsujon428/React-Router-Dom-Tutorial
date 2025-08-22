import React, { Suspense, useEffect } from 'react'
import { getAllProducts } from '../Api' // Adjust the import path as necessary

const Products = () => {

  const [allProduct, setAllProduct] = React.useState([]);

  useEffect(async () => {
    // Fetch products when the component mounts
    const allProduct = await getAllProducts();
    setAllProduct(allProduct);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <p>This is the products page.</p>
      <Suspense fallback={<div>Loading products...</div>}>
        <div>
          {allProduct.map((product) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      </Suspense>
    </div>
  )
}

export default Products