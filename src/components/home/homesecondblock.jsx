import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from "./cards";
export default function HomeSecondBlock() {

    const [link,setLink] = useState("https://www.youtube.com/embed/F8KkaWkzEvg");


    function updateLink(link){
        setLink(link);
    }
  useEffect(() => {
    Aos.init({
      duration: 100,
      
    });
  },[]);

  return (
    <div className="second-block">
      
      <div className="background-second">
            <div className="second-block-title">
                <h1>We Are Sen-Z</h1>
            </div>
            <div data-aos="zoom-in" className="video">
                <iframe
                src={link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ></iframe>
            </div>
            <div className="more-videos">
                
            </div>
            <div className="videos">
            <img onClick={() => {updateLink("https://www.youtube.com/embed/F8KkaWkzEvg")}} className="more-video" src="./media/name.svg"/>
            <img onClick={() => {updateLink("https://www.youtube.com/embed/gbtvJkXGDYg")}} className="more-video" src="./media/name.svg"/>
            <img onClick={() => {updateLink("https://www.youtube.com/embed/ZLrtQLoYQe4")}} className="more-video" src="./media/name.svg"/>
            <img onClick={() => {updateLink("https://www.youtube.com/embed/eOq8_0ImziU")}} className="more-video" src="./media/name.svg"/>
            <img onClick={() => {updateLink("https://www.youtube.com/embed/2eLcYlbiq0s")}} className="more-video" src="./media/name.svg"/>
            <img onClick={() => {updateLink("https://www.youtube.com/embed/JDjZB9e9608")}} className="more-video" src="./media/name.svg"/>
            </div>
      </div>
      
    </div>
  );
}
