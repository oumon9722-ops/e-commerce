import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

function Product() {
  const [products, setProduct] = useState([]);
    
     useEffect(() => {
          //async and await
  
          async function dataFecth() {
              // const res = await fetch("https://akestoreapi.com/products")
              // const data = await res.json();
              // console.log(data)
              //axios
  
             await fetch('https://fakestoreapi.com/products')
                  .then(response => response.json())
                  .then(data => {
                      console.log(data);
                      setProduct(data);
                  })
                  .catch(err => console.log(`Error Connetions ${err.message}`))
          }
          dataFecth()
  
      }, [])
  return (
    <div>
        {/* section 2 */}
        <div className="  max-w-7xl mx-auto mt-30">
          <div className="text-center">
            <h2 
              className="text-3xl font-semibold mb-5">Best Sellers</h2>
            <p 
              className="text-lg text-gray-500 mb-5">Explore our best seller products</p>
          </div>
        </div>
          {/* product */}
          <div className="">
              <div className=" flex justify-around flex-wrap gap-y-6 px-22">
                {products.map( pro => (
                  <ProductCard
                    id={pro.id}
                    key={pro.id}
                    image={pro.image}
                    title={pro.title}
                    price={pro.price}  
                  />
              ))}
      

              </div>
          </div>
    </div>
    
  )
}

export default Product