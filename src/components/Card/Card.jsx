import React, { useState } from 'react'
import {BsFillHeartFill}from "react-icons/bs"
import styles from "./Card.module.css"
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../features/photos/photosSlice';




function Card(props) {

const dispatch = useDispatch();
const [isFavorite, setIsFavorite] = useState(false);

const location = props.location.pathname;


//console.log(isFavorite)

const handleClick = ()=>{
  const photo = props.id
   dispatch (addToFavorites(photo))
   setIsFavorite(!isFavorite);
}


  return (
    <div>
      <div  className={styles.container}>
      <i id='heart' onClick={handleClick} className={`${styles.hicon} ${isFavorite || location==="/favorites" ? styles.favorite : ''}`}>
      <BsFillHeartFill />
        </i>
      <img style={{width: 300 , height: 300}} src={props.photo} alt={props.index} />

      </div>
    </div>
  )
}

export default Card