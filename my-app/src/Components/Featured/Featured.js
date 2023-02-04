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
        <span className="fpName">Hotel Cherry</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <span>
            <FaStar />
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={apartments} alt="" className="fpImg" />
        </div>
        <span className="fpName">Apart Bossa</span>
        <span className="fpPrice">Starting from $80</span>
        <div className="fpRating">
          <span>
            <FaStar />
          </span>
          <span>9.4</span>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={villas} alt="" className="fpImg" />
        </div>
        <span className="fpName">Villa Miles</span>
        <span className="fpPrice">Starting from $280</span>
        <div className="fpRating">
          <span>
            <FaStar />
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={resorts} alt="" className="fpImg" />
        </div>
        <span className="fpName">Resort Swing</span>
        <span className="fpPrice">Starting from $160</span>
        <div className="fpRating">
          <span>
            <FaStar />
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={cabin} alt="" className="fpImg" />
        </div>
        <span className="fpName">Cabin Bebop</span>
        <span className="fpPrice">Starting from $200</span>
        <div className="fpRating">
          <span>
            <FaStar />
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
      </div>
      <div className="fp">
        <div className="fpItem">
          <img src={hotel1} alt="" className="fpImg" />
        </div>
        <span className="fpName">Hotel Nocturne</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <span>
            <FaStar />
          </span>
          <span>9.1</span>
          <span>Excelent</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
