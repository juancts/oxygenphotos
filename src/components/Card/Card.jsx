import { BsFillHeartFill } from "react-icons/bs";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFavorites,
} from "../../features/photos/favoriteSlice";
import { ImageListItem } from "@mui/material";

function Card(props) {
  const dispatch = useDispatch();
  const allPhotos = useSelector((state)=>state.photos.allPhotos);
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((photo) => photo.id === props.id);
  const location = props.location.pathname;
  console.log(location)

  const handleClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(props.id));
    } else {
      dispatch(addToFavorites(props.id, allPhotos));
    }
  };

  return (
    <div>
      <div className={styles.container}>
      <ImageListItem key={props.id}>
        <i
          id="heart"
          onClick={handleClick}
          className={`${styles.hicon} ${
            isFavorite || location === "/favorites" ? styles.favorite : ""
          }`}
        >
          <BsFillHeartFill />
        </i>
        
        <img
        src={`${props.photo}?w=248&fit=crop&auto=format`}
        srcSet={`${props.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={props.description}
        loading="lazy"
          // style={{ width: 300, height: 300 }}
          // src={props.photo}
          // alt={props.index}
        />

        </ImageListItem>
      </div>
    </div>
  );
}

export default Card;
