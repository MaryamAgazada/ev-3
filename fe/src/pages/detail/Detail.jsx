
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import {BasketContext} from "../../context/BasketProvider"
function Detail() {
    let {id}=useParams()
    const [data,setData]=useState([])
   async function getAllData(params) {
        const response = await fetch("http://localhost:3000/product/"+id);
        const movies = await response.json();
        setData(movies)
    }
    useEffect(()=>{
getAllData()
    },[])
  return (
    <div>
      <div className="card">
                        <p>{data.name}</p>
                        <h2>{data.title}</h2>
                        <p>{data.price}</p>
                        <img src={data.img} alt="" />
                    </div>
    </div>
  )
}

export default Detail
