import React, { useEffect } from "react";
import Block from "../home/block";
import Card from "../home/cards";
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Characters() {

    useEffect(()=>{
        Aos.init({
            duration:500
        })
    })
  return (
    <div className="all-characters">
      <div className="character-name">
        <h1>Characters</h1>
      </div>
      <div className="all-characters-wrapper">
        <div data-aos-duration="500" data-aos="fade-right" className="character-card">
          <h2>Name</h2>
          <div className="character">
            <img src="./media/6.jpeg" alt="image" />
          </div>
          <div className="character">
            <img src="./media/6.jpeg" alt="image" />
          </div>
        </div>
        <div data-aos-duration="500" data-aos="fade-up" className="character-card">
          <h2>Name</h2>
          <div className="character">
            <img src="./media/6.jpeg" alt="image" />
          </div>
          <div className="character">
            <img src="./media/6.jpeg" alt="image" />
          </div>
        </div>
        <div data-aos-duration="500" data-aos="fade-left" className="character-card">
          <h2>Name</h2>
          <div className="character">
            <img src="./media/6.jpeg" alt="image" />
          </div>
          <div className="character">
            <img src="./media/6.jpeg" alt="image" />
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
