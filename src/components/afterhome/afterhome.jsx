import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function AfterHome() {

  useEffect(()=>{
    Aos.init({
      duration:100
    })
  })
  return (
    <div className='after-home'>
        <div data-aos="zoom-in" className='nft-identity'>
          <div className='identity-card'></div>
          <div className='identity-card'></div>
          <div className='identity-card'>
            <div className='identity-wrapper'>
              <div className='identity-image'>
              <img className='char' src='./media/6.jpeg'/>
              </div>
              <div className='identity-details'>
                <div className='divider'></div>
                <h2>Lt. John wick</h2>
                <h5>Some more info about NFTs</h5>
              </div>
              <div className='qr'>
                <img  src='./media/qr.png'/>
              </div>
            </div>
            <div className='identity-number'>
            <div className='divider-2'></div>
              <h2>0000 - 1111 - 2222</h2>
              <div className='divider-2'></div>
            </div>
          </div>
        </div>


        <div className='nft-info'>
          <div className='nft-info-container'>
            <h2>10000 Different Characters</h2>
            <h4>Each Character have a Socail Status, Life & A Back Story</h4>
            <h5>Join the world of endless possibilites</h5>
          </div>
        </div>
    </div>
  )
}
