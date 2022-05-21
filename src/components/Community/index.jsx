import React from 'react';
import './style.css';
import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";
export default function Community() {
  return (
    <section className="main__community">
        <div className="community-left">
        <h2 className="community__title">Community</h2>
        <p className="community__advanteges">
           Gро преимущества/технологии  
          </p>
        <button className="button-standart">
            <img src={telegram} alt="" />t.me/DeCast
          </button>
          <button className="button-standart">
            <img src={github} alt="" />github.com/DeCast
          </button>
          <p className="community__text">
          Fро преимущества/технологии про преимущества/технологиипро преимущества/технологиипро преимущества/технологии про преимущества/
          </p>
          </div>
          <p className="community-right">Gро преимущества/технологии про преимущества/технологиипро преимущества/технологиипро преимущества/технологии про преимущества/технологии про преимущества/технологиипро преимущества/технологиипро преимущества/технологии</p>
      </section>
  );
}
