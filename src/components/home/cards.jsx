import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
export default function Card(props) {
    useEffect(()=>{
        Aos.init({
            duration:500,
            delay:500
        })
    })
  return (
    <div data-aos="zoom-in" className='blog-card'><img src={props.image}/>
    <h2>{props.text}</h2></div>
  )
}
