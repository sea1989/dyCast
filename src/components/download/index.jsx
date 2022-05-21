import React from 'react';
import './style.css';
import laptop from "../../assets/laptop-mini.png"
import windows from "../../assets/windows.svg";
import apple from "../../assets/apple.svg";
export default function Download() {
  return (
    <section className="main__main-suggest">
        <div className="main-suggest__suggest-text">
          <h2 className="suggest-title">
            Экран с предложением скачать десктопную версию для просмотра видосов{" "}
          </h2>
          <p className="suggest-text__advanteges">
            про преимущества/технологии про преимущества/технологиипро
            преимущества/технологиипро преимущества/технологии про
            преимущества/преимущества/технологии про преимущества/
          </p>
          <div className="suggest-text__buttons">
          <button className="button-standart">
              <img src={windows} alt="" /> Download Windows
            </button>
          <button className="button-standart button-white">
              <img src={apple} alt="" /> Download Mac OC
            </button>
          </div>
        </div>
        <img src={laptop} alt="" className="main-suggest__laptop" />
        <div className="main-suggest__advanteges">
          <div className="advanteges windows">
            {" "}
            <p className="suggest-text__advanteges">
              про преимущества/технологии про преимущества/технологиипро
              преимущества/технологиипро преимущества/технологии про
              преимущества/
            </p>
            <button className="button-standart button-black">
              <img src={windows} alt="" /> Download Windows
            </button>
          </div>
          <div className="advanteges apple">
            {" "}
            <p className="suggest-text__advanteges">
              про преимущества/технологии про преимущества/технологиипро
              преимущества/технологиипро преимущества/технологии про
              преимущества/
            </p>
            <button className="button-standart button-white">
              <img src={apple} alt="" /> Download Mac OC
            </button>
          </div>
        </div>
      </section>
  );
}
