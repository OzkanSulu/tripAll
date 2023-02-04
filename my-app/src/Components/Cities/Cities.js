import React, { useContext } from "react";
import "./Cities.css";
import busan from "../../assets/busan.png";
import jeju from "../../assets/jeju.png";
import seoul from "../../assets/seoul.png";
import kyoto from "../../assets/kyoto.png"
import london from "../../assets/london.png"
import paris from "../../assets/paris.png"
import sanFrancisco from "../../assets/sanFrancisco.png"
import tokio from "../../assets/tokio.png"
import { bookContext } from "../../context/bookingContext";

function Cities() {
  const { book, setBook, hideBook } = useContext(bookContext);

  return (
    <div className="featured" onClick={hideBook}>
      <div className="featuredContainer">
        <div className="featuredItem">
          <img src={seoul} alt="cities" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Seoul</h1>
            <h2>789 Props</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={busan} alt="cities" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Busan</h1>
            <h2>563 Props</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={jeju} alt="cities" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Jeju</h1>
            <h2>343 Props</h2>
          </div>
        </div>
      </div>
      <div className="propContainer">
        <div className="featuredProps hotels">
          <img src={kyoto} alt="cities" className="featuredImg " />
          <div className="featuredTitles">
            <h3>Kyoto</h3>
            <h5>343 Props</h5>
          </div>
        </div>
        <div className="featuredProps apartments">
          <img src={london} alt="cities" className="featuredImg " />
          <div className="featuredTitles">
            <h3>London</h3>
            <h5>443 Props</h5>
          </div>
        </div>
        <div className="featuredProps villas">
          <img src={paris} alt="cities" className="featuredImg " />
          <div className="featuredTitles">
            <h3>Paris</h3>
            <h5>242 Props</h5>
          </div>
        </div>
        <div className="featuredProps resorts">
          <img src={sanFrancisco} alt="cities" className="featuredImg " />
          <div className="featuredTitles">
            <h3>San Francisco</h3>
            <h5>643 Props</h5>
          </div>
        </div>
        <div className="featuredProps cabin">
          <img src={tokio} alt="cities" className="featuredImg " />
          <div className="featuredTitles">
            <h3>Tokio</h3>
            <h5>143 Props</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cities;
