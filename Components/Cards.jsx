import React, { useState } from "react";
import Products from "./Products";
import stars from "../src/assets/stars.jpg"
import '../style/App.css'
function Cards({ name, price, review, btn, count, setCount }) {
  const [addbtn,setAddbtn]=useState(true)
  return (
    <div id='cardcontainer'>
      <div class="card text-center" id='card'>
        <img id='image' src='' alt="450x300"/>
        <div class="card-body">
          <h5 id='Name' class="card-title">{name}</h5>
          {review?
            (<img id='Review' src={stars} class="card-text"/>):null
            
        }
          <p id='Price' class="card-text">
            {price}
          </p>
          {btn?
          (<a id='Button'  href="#" class="btn btn-secondary">
            View Options
          </a>):(addbtn?  (<a id='Button' href="#" class="btn btn-secondary" onClick={()=>{setCount(count+1),setAddbtn(false)}}>
            Add to cart
          </a>):(<a id='Button' href="#" class="btn btn-secondary" onClick={()=>{setCount(count-1),setAddbtn(true)}}>
            Remove
          </a>)) 

          }
        </div>
      </div>
    </div>
  );
}
export default Cards;

