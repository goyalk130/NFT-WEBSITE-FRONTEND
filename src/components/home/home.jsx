import React from "react";
import AfterHome from "../afterhome/afterhome";
import Characters from "../characters/characters";
import Header from "../header/header";
import StoryBlock from "../storyblock/storyblock";
import HomeFirstBlock from "./homefirstblock";

export default function Home() {
  return (
    <>
      <Header />

      <div className="back-final">
        </div>
      <div className="home">
        <div className="test-back-circle"></div>
        <div className="test-back-circle"></div>
        <div className="test-back-circle"></div>
        <div className="test-back-circle"></div>
        <div className="back-blur">
          <HomeFirstBlock />
          <AfterHome />
          <Characters />
          <StoryBlock />
        </div>
      </div>
    </>
  );
}
