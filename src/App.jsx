import React, { useState } from "react";
import "../style/App.css";
import Cards from "../Components/Cards"
import Products from "../Components/Products"

function ShoppingCart() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div id="container">
        <div id="navigationbar">
          <div id="nav">
            <div id="hd">Start Bootstrap</div>
            <div>Home</div>
            <div>About</div>
          </div>
          <div id="drop" class="dropdown">
            <div
              id="list"
              class="secondary toggle"
              data-bs-toggle="dropdown"
            >
              Shop <i className="fa-solid fa-caret-down"></i>
            </div>
            <ul class="dropdown-menu">
              <li class="dropdown-item">All Products</li>
              <li class="dropdown-item">Product Items</li>
              <li class="dropdown-item">New Arrivals</li>
            </ul>
          </div>
          <div id="nav-1">
            <button>
              <i className="fa-solid fa-cart-shopping"></i> Cart <span id='count'>{count }</span>
            </button>
          </div>
        </div>
      </div>
      <div id="title">
        <div id="headtxt">
          <h1>Shop in Style</h1>
          <p>with this shop homepage template</p>
        </div>
      </div>
      <Products count={count} setCount={setCount} />
    </div>
  );
}
export default ShoppingCart;
