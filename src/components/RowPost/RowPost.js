import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl,baseUrl} from '../../constants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies]=  useState([])
  const [urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
           
            setMovies(response.data.results)

        })
   
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
           
            setUrlId(response.data.results[0])
        }else{
            console.log('trailer not found');
        }
     })
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
<div className="posters">
    {movies.map((obj)=>{
return(
    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

)
    })}
   
</div>
           { urlId &&  <YouTube opts={opts} videoId={urlId.key}  />}
    </div>
  )
}

export default RowPost