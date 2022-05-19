import React from 'react'
import { Navigate, useParams } from 'react-router-dom'


export default function Navi() {
    const {param} = useParams();
    
    console.log(param)
  return (
    <Navigate to="/" replace/>
  )
}
