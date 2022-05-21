import React from "react";
import Footer from "../Footer";
import Advantages from "../advantages";
import Community from "../Community";
import Download from "../download";
import Header from "../Header";
import Laptop from "../../assets/laptop.svg";
import download from "../../assets/download.svg";
import windows from "../../assets/windows.svg";
import apple from "../../assets/apple.svg";
import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";
import "./style.css";

function MainLand82() {
  return (
    <main className="main content ">
      <Header />
      <section className="main__top">
        <div className="top__title-truly">
          <h1 className="title-truly__article">
            The first truly distributed video hosting
          </h1>
          <p className="title-truly__text">
            про преимущества/технологии про преимущества/технологиипро
            преимущества/технологиипро преимущества/технологии
          </p>
          <button className="button-standart button-black">
            <img src={download} alt="" /> Download now
          </button>
        </div>
        <img src={Laptop} alt="" className="top__laptop" />
      </section>
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
        </div>
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
      <section className="main__community">
        <div className="community-left">
        <h2 className="community__title">Community</h2>
        <p className="community__advanteges">
           Gро преимущества/технологии  
          </p>
        <button className="button-standart button-black">
            <img src={telegram} alt="" />t.me/DeCast
          </button>
          <button className="button-standart button-black">
            <img src={github} alt="" />github.com/DeCast
          </button>
          <p className="community__text">
          Fро преимущества/технологии про преимущества/технологиипро преимущества/технологиипро преимущества/технологии про преимущества/
          </p>
          </div>
          <p className="community-right">Gро преимущества/технологии про преимущества/технологиипро преимущества/технологиипро преимущества/технологии про преимущества/технологии про преимущества/технологиипро преимущества/технологиипро преимущества/технологии</p>
      </section>
      <Footer/>
    </main>
  );
}

export default MainLand82;
