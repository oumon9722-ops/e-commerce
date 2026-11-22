import  { useEffect, useState } from "react";
import { PiGreaterThanThin } from "react-icons/pi";
import { Link, useParams } from "react-router";


function ProductDetail() {
    const [product, setProduct] = useState(null);
    //   function decrease and increase
  const [quantity, setQuantity] = useState(1);

  const route = useParams();
  console.log(route.id);
  useEffect(() => {
  async function fetchProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${route.id}`);
    const data = await res.json();
    setProduct(data);
  }

  fetchProduct();
}, [route.id]);
  
 const increase = () => {
  setQuantity((prev) => prev + 1);
};

const decrease = () => {
  if (quantity > 1) {
    setQuantity((prev) => prev - 1);
  }
};
  if (!product) {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold">Loading...</h1>
    </div>
  );
}

return (
  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* route and title */}
    <p className="text-sm text-gray-500 mb-8 flex items-center gap-2">
      <Link to="/">Home</Link> 
     <PiGreaterThanThin />
     
      <Link to="/product"> Product</Link> 
      <PiGreaterThanThin />
      {product.title}
    </p>

    <div className="flex flex-col lg:flex-row items-center gap-16">

      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-[320px] h-105 object-contain hover:scale-105 duration-300"
        />
      </div>

      {/* Right Detail */}
      <div className="flex-1">

        <p className="uppercase text-gray-400 tracking-widest mb-2">
          {product.category}
        </p>

        <h1 className="text-4xl font-semibold leading-tight">
          {product.title}
        </h1>

        <h2 className="text-3xl font-bold mt-5">
          ${product.price}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500 text-lg">
            ⭐⭐⭐⭐⭐
          </span>

          <span className="text-gray-500">
         ({product.rating?.rate})
          </span>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-5 mt-8">

          <div className="flex items-center border rounded overflow-hidden">

            <button
              onClick={decrease}
              className="w-10 h-10 hover:bg-gray-100 text-lg"
            >
              -
            </button>

            <span className="w-12 text-center font-semibold">
              {quantity}
            </span>

            <button
              onClick={increase}
              className="w-10 h-10 hover:bg-gray-100 text-lg"
            >
              +
            </button>

          </div>

          <button className="bg-gray-700 hover:bg-black text-white px-8 py-2 rounded duration-300">
            Add to cart
          </button>

        </div>

        <hr className="my-8" />

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>

      </div>

    </div>
  </div>
);
}

export default ProductDetail;
