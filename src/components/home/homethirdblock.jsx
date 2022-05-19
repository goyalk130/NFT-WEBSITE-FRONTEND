import React from 'react'
import { useState } from 'react'
import Card from './cards'

export default function HomeThirdBlock() {
    const [data,setData] = useState([{id:0,image:"./media/background.png",text:"Hi NFT"},{id:0,image:"./media/background.png",text:"Hi NFT"},{id:0,image:"./media/background.png",text:"Hi NFT"},{id:0,image:"./media/background.png",text:"Hi NFT"},{id:0,image:"./media/background.png",text:"Hi NFT"},{id:0,image:"./media/background.png",text:"Hi NFT"},{id:0,image:"./media/background.png",text:"Hi NFT"}])
    return (
      <div className='third-block'>
          {data.map(data=>{
              return <Card image={data.image} text={data.text} />
          })}
          
      </div>
    )
}
