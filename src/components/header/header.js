import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import classes from "./header.module.css"

export default function Header() {
    const [toogle,setToogle] = useState(false);
    useEffect(()=>{
        AOS.init({
            duration: 2000,
          });
    })

    function toogleNav(){
        setToogle(prevalue => {
            return !prevalue;
        })
        
    }
    
    const [scrollLocation,setScrollLocation] = useState(false);

    const updateScroll = () => {
        console.log(window.pageYOffset,window.innerWidth);
        if(window.pageYOffset > 100){
            setScrollLocation(true);
        }else{
            setScrollLocation(false);
        };
    }
    window.addEventListener("scroll",updateScroll)
    
  return (<div className='header-wrapper'>
    <div  className="header">
       <div className='title'>
           {/* <img src='./media/name.svg'/> */}
           <h1>SenZ</h1>
           
       </div>
       <div className='nav'>
            <ul type="none">
                        <li><Link style={{textDecoration:"none",opacity:1}} to="/"><p>Home</p></Link></li>
                        <li><Link style={{textDecoration:"none",opacity:1}} to="/blogs"><p>Blogs</p></Link></li>
                        <li><Link style={{textDecoration:"none",opacity:1}} to="/"><p>News</p></Link></li>
                        <li><button>Connect</button></li>
            </ul>
       </div>
    </div>
    </div>
  )
}
