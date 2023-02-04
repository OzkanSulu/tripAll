import React from "react";
import "./Featured.css";
import hotels from "../../assets/hotels.png";
import hotel1 from "../../assets/hotel1.png";
import apartments from "../../assets/apartments.png";
import villas from "../../assets/villas.png";
import resorts from "../../assets/resorts.png";
import cabin from "../../assets/cabin.png";
import { FaStar } from "react-icons/fa";

function Featured() {
  return (
    <div className="fpContainer">
      <div className="fp">
        <div className="fpItem">
          <img src={hotels} alt="" className="fpImg" />
        </div>
        <div className="fpHead">
        <span className="fpName">Hotel Cherry</span>
        <div className="fpRating">
          <span>
            <FaStar style={{color:"yellow"}}/>
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
        </div>
        <span className="fpPrice">Starting from $100</span>
        <span className="fpDesc">Impeccable luxury awaits you at Hotel Cherry, with spacious rooms, on-site dining, and breathtaking views of the city skyline.</span>
        <a href="/" style={{color:"#1A6781"}}>Read More...</a>
      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={apartments} alt="" className="fpImg" />
        </div>
        
        <div className="fpHead">
        <span className="fpName">Apart Bossa</span>
        <div className="fpRating">
          <span>
            <FaStar style={{color:"yellow"}}/>
          </span>
          <span>9.4</span>
          <span>Excelent</span>
        </div>
        </div>
        <span className="fpPrice">Starting from $160</span>
        <span className="fpDesc">Discover the beauty of the city at Apart Bossa, featuring stylish rooms and breathtaking views of the metropolis.</span>
        <a href="/" style={{color:"#1A6781"}}>Read More...</a>

      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={villas} alt="" className="fpImg" />
        </div>
        
        <div className="fpHead">
        <span className="fpName">Villa Miles</span>
        <div className="fpRating">
          <span>
            <FaStar style={{color:"yellow"}}/>
          </span>
          <span>9.3</span>
          <span>Excelent</span>
        </div>
        </div>
        <span className="fpPrice">Starting from $120</span>
        <span className="fpDesc">Escape to a peaceful haven at The Villa Miles, surrounded by lush greenery, a private pool, and breathtaking views.</span>
        <a href="/" style={{color:"#1A6781"}}>Read More...</a>

      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={resorts} alt="" className="fpImg" />
        </div>
        
        <div className="fpHead">
        <span className="fpName">Resort Swing</span>
        <div className="fpRating">
          <span>
            <FaStar style={{color:"yellow"}}/>
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
        </div>
        <span className="fpPrice">Starting from $100</span>
        <span className="fpDesc">Escape to the beach, featuring refreshing swimming pools, and easy access to the sand and surf.</span>
        <a href="/" style={{color:"#1A6781"}}>Read More...</a>

      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={cabin} alt="" className="fpImg" />
        </div>
        
        <div className="fpHead">
        <span className="fpName">Cabin Bebop</span>
        <div className="fpRating">
          <span>
            <FaStar style={{color:"yellow"}}/>
          </span>
          <span>9.9</span>
          <span>Excelent</span>
        </div>
        </div>
        <span className="fpPrice">Starting from $200</span>
        <span className="fpDesc">Embrace the serenity of nature at Cabin Bebop, nestled in the heart of the forest, a warm fireplace, and breathtaking views.</span>
        <a href="/" style={{color:"#1A6781"}}>Read More...</a>

      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={hotel1} alt="" className="fpImg" />
        </div>
        
        <div className="fpHead">
        <span className="fpName">Hotel Nocturne</span>
        <div className="fpRating">
          <span>
            <FaStar style={{color:"yellow"}}/>
          </span>
          <span>9.9</span>
          <span>Excelent</span>
        </div>
        </div>
        <span className="fpPrice">Starting from $160</span>
        <span className="fpDesc">Impeccable luxury awaits you at The Grand Hotel, with spacious rooms, on-site dining, and breathtaking views of the city skyline.</span>
        <a href="/" style={{color:"#1A6781"}}>Read More...</a>

      </div>
    </div>
  );
}

export default Featured;
