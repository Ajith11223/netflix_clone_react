import React,{useEffect} from 'react'
import { useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../axios'

import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState('')
    useEffect(()=>{
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
             setMovie(response.data.results[7])
          
            
        })

    },[])
  return (
    
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}

    className='banner'>
        <div className='content'>
  <h1 className='title'>{movie.title}</h1>
  <div className='banner_button'>
    <button className='button'>Play</button>
    <button className='button'>My List</button>

  </div>
  <h1 className='description'>{movie.overview} </h1>
        </div>
     <div className="fade_bottom">

     </div>
    </div>
  
  )
}

export default Banner