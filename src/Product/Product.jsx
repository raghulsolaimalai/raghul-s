import React from "react";
import './Product.css';
import scfi from '../assets/11.jpg';
import fan from '../assets/13.jpeg';
import com from '../assets/5.jpg';
import rom from '../assets/7.jpeg';
import cla from '../assets/2.jpg';
import thr from '../assets/4.jpg';
import sun from '../assets/6.jpg';
import co from '../assets/8.jpg';
const Product = () =>{
    return(
      <div className="bd">
      <div className="gh">
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        <p>“I am a huge animal lover. Growing up, my mother and I rescued countless animals – dogs, cats, birds, rabbits, even a turtle. I have been accused of caring more about animals than I do about people.” — Amanda Schull</p>
      </div>
        <div class="cards-list">
<div class="card 1">
  <div class="card_image">
    <img src={scfi}></img>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div class="card_title title-white">
    <p><a href="">Harry</a></p>
  </div>
</div>
  <div class="card 2">
  <div class="card_image">
    <img src={fan}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-white">
    <p>Rose</p>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src={com}/>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div class="card_title title-white">
    <p>Moo</p> 
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src={thr}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Potter</p>
  </div>
  </div>
  <div class="card 5">
  <div class="card_image">
    <img src={rom}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Riyazz</p>
  </div>
  </div>
  <div class="card 6">
  <div class="card_image">
    <img src={cla}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Pusu</p>
  </div>
  </div>
  <div class="card 7">
  <div class="card_image">
    <img src={sun}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Subramani</p>
  </div>
  </div>
  <div class="card 8">
  <div class="card_image">
    <img src={co}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Pichumani</p>
  </div>
  </div>
</div>
</div>
    )
}
export default Product;