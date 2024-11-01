import React from 'react';
import "./scss/Product.scss"

export default function ProDuctShoe(props) {
  const { data, handleDetail, shoeDetail } = props;

  const setDetail = () => {
    handleDetail(data);
  };

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <img
          className="rounded-t-lg w-full h-60 object-cover"
          src={data.image}
          alt={data.name}
        />
        {shoeDetail.id === data.id && (
          <div className="overlay">
            <h5 className="text-2xl font-bold tracking-tight text-white">
              {data.name}
            </h5> 
             <p className="text-white">{data.alias}</p>
             <p className="text-white">Price: {data.price}$</p>
            <p className="text-white">{data.description}</p>
            
            <p className="text-white"> Quatity: {data.quantity}</p>
          </div>
        )}
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.price}$
        </p>
        <button className="bg-black text-white px-3 py-2">Add to cart</button>
        <button onClick={setDetail} className="bg-teal-500 text-white my-3 mx-3 px-3 py-2">
          Detail
        </button>
      </div>
    </div>
  );
}
