import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import YouTube from 'react-youtube';

function Recipie() {
    const {  idMeal } = useParams();
    const [recipie,setRecipie]=useState([])

    // Replace 'YOUR_VIDEO_ID' with your actual YouTube video ID

  // Optional: Configure additional player options
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,  // This will make the video automatically play when loaded
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();  // For example, pause the video when it's ready (remove this line if not needed)
  };


    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            console.log(response.data);
            setRecipie(response.data.meals)
        }
        fetchData()
    },[])
    return (
    <div className='p-3'>
{recipie.map((item,index)=>(
    <div key={index}>
        <h1>{item.strMeal}</h1>
        <img src={item.strMealThumb} alt="" />
        <h3>Instructions</h3>
        <p>{item.strInstructions}</p>
        <YouTube videoId={item.strYoutube} opts={opts} onReady={onReady} />
    </div>
    
))}
           

    </div>
  )
}

export default Recipie