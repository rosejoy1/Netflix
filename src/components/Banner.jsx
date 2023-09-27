import React,{useEffect,useState} from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Banner.css'


function Banner({fetchUrl}) {
const [movie,setmovie]=useState({})
// console.log(fetchUrl);
const base_url = "https://image.tmdb.org/t/p/original/";
const fetchData=async()=>{
  const {data}=await tmdbAxiosInstance.get(fetchUrl)
//   setmovie(data.results)
setmovie(data.results[Math.floor(Math.random()*data.results.length)]);
}
// console.log(movie);
useEffect(()=>{
  fetchData()
},[])

  return (
    <div  style={{
      
      height:'600px',
      backgroundSize:'cover',
      backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
      backgroundAttachment:'fixed'
    }}>
      <div className='banner_content'>
        <h1>{movie?.name}</h1>
        <h2>{movie?.overview?.slice(0,280)}...</h2>
      </div>2
     </div>
  )
}

export default Banner