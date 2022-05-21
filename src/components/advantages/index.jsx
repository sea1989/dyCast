import React from 'react';
import './style.css';
import Laptop from "../../assets/laptop.svg";
import download from "../../assets/download.svg";
export default function Advantages() {
  return (
    <section className="main__top">
        <div className="top__title-truly">
          <h1 className="title-truly__article">
            The first truly distributed video hosting
          </h1>
          <p className="title-truly__text">
            про преимущества/технологии про преимущества/технологиипро
            преимущества/технологиипро преимущества/технологии
          </p>
          <button className="button-standart">
            <img src={download} alt="" /> Download now
          </button>
        </div>
        
        {/* <img src={Laptop} alt="" className="top__laptop" /> */}
      </section>
  );
}
