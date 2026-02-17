import React from "react";

const ProductCard = ({ elem, addToCart, quantity, handleDecrement }) => {
  return (
    <div className="h-[45vh] w-[19%] flex flex-col gap-4 bg-white p-2 rounded-xl">
      <div className="h-[60%]">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={elem.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">
          {elem.title.length > 14
            ? `${elem.title.slice(0, 14)}...`
            : elem.title}
        </h1>
        <p className="text-xl ">
          Price -{" "}
          <span className="text-green-600 font-semibold">${elem.price}</span>
        </p>
        <div className="flex gap-4 justify-between">
          <button className="py-2 px-4 rounded-xl text-white bg-green-600">
            Buy Now
          </button>

          {quantity > 0 ? (
            <div className="flex gap-4 items-center">
              <p
                onClick={() => handleDecrement(elem.id)}
                className="bg-red-500 p-2 text-white text-xl"
              >
                -
              </p>
              <p className="text-xl">{quantity}</p>
              <p
                onClick={() => addToCart(elem.id)}
                className="bg-blue-500 p-2 text-white text-xl"
              >
                +
              </p>
            </div>
          ) : (
            <button
              onClick={() => addToCart(elem.id)}
              className="py-2 px-4 rounded-xl text-white bg-black"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
