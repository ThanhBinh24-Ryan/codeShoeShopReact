import React from "react";
import ProductShoe from "./proDuct";
import data from "./data.json";
import { useState } from "react";
import "./scss/Option.scss";
export default function IndexProduct(props) {
  const [state, setState] = useState({
    shoeS: data,
    shoeDetail: data[0],
  });
  const handleGetDetail = (data) => {
    setState({
      ...state,
      shoeDetail: data,
    });
  };
  const renderProduct = () => {
    return state.shoeS.map((item) => (
      <ProductShoe
        key={item.id}
        data={item}
        handleDetail={handleGetDetail}
        shoeDetail={state.shoeDetail}
      />
    ));
  };
  return (
    <div className="flex">
      <div className="Option w-80">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
      <div className="border-sky-700">
        <h1 className="text-center text-3xl text-wrap py-3">Shoe Shop</h1>
        <div className="grid grid-cols-3">{renderProduct()}</div>
      </div>
    </div>
  );
}
