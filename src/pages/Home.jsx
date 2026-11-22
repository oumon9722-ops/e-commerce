import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
// import Product from '../components/Product';
import ProductCard from '../components/ProductCard';

function Home() {

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
    <>
      <div>

        {/* section 1 */}
        <div className="bg-[#f6e6cf]  h-175 max-h-screen mx-auto flex justify-center items-center">

          <div className="w-125 h-50 text-center">
            <h3 className="text-2xl font-bold">New Collection</h3>
            <h2 className="text-4xl font-bold mt-5">Luxury Without Labels</h2>
            <p className="text-md mt-5">Explore new-in product and best sellers</p>
            <button className="bg-black/90 text-white px-10 py-3 rounded-2xl mt-5 hover:cursor-pointer hover:bg-green-500 transition-all">View Collection</button>
          </div>

        </div>

        {/* section 2 */}
        <div className="  max-w-7xl mx-auto mt-30">
          <div className="text-center">
            <h2 
              className="text-3xl font-semibold mb-5">Best Sellers</h2>
            <p 
              className="text-lg text-gray-500 mb-5">Explore our best seller products</p>
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


      </div>
     
    
    </>
  )
}

export default Home