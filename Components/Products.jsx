import React from "react";
import Cards from "./Cards";

function Products({count,setCount}) {
  const products = [
    {
      name: "Fancy Product",
      price: "$40.00-$80.00",
      review: false,
      btn: true,
    },
    {
      name: "Special Item",
      price: "$18.00",
      review: true,
      btn: false,
    },
    {
      name: "Sale Item",
      price: "$25.00",
      review: false,
      btn: false,
    },
    {
      name: "Popular Item",
      price: "$40.00",
      review: true,
      btn: false,
    },
    {
      name: "Sale Item",
      price: "$25.00",
      review: false,
      btn: false,
    },
    {
      name: "Fancy Product",
      price: "$40.00-$80.00",
      review: false,
      btn: true,
    },
    {
      name: "Special Item",
      price: "$18.00",
      review: true,
      btn: false,
    },
    {
      name: "Popular Item",
      price: "$40.00",
      review: true,
      btn: false,
    },
  ];
  return (
    <div>
      <div class="row">
          {products.map((product) => (
          <div class="col-md-3">
            <Cards
              name={product.name}
              price={product.price}
              review={product.review}
              count={count}
              setCount={setCount}
              btn={product.btn}
                      
            />
        </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
