import React from "react";
import Products from "./Products";
import '../style/App.css'
function Cards({ name, price, review ,btn,count,setCount}) {
  return (
    <div id='cardcontainer'>
      <div class="card text-center" id='card'>
        <img id='image' src='' alt="450x300"/>
        <div class="card-body">
          <h5 id='Name' class="card-title">{name}</h5>
          {review?
            (<img id='Review' src='../src/assets/stars.jpg' class="card-text"/>):null
            
        }
          <p id='Price' class="card-text">
            {price}
          </p>
          {btn?
          (<a id='Button'  href="#" class="btn btn-secondary">
            View Options
          </a>):(<a id='Button' href="#" class="btn btn-secondary" onClick={()=>{setCount(count+1)}}>
            Add to cart
          </a>)

          }
        </div>
      </div>
    </div>
  );
}
export default Cards;

