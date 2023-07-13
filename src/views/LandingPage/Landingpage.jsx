import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchPhotos } from '../../features/photos/photosSlice'

function LandingPage() {
  
  //const photos = useSelector ( (state)=>state.photos.allPhotos)
  const dispatch = useDispatch()

  const handleClick = (e)=>{
    
    dispatch(fetchPhotos());
  }

  return (<>
    <Link to="/home">GO HOME!</Link>
    <button onClick={handleClick}>carga datos</button>
  </>
  )
}

export default LandingPage