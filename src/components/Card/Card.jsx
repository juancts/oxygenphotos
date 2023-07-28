import { BsFillHeartFill, BsDownload } from "react-icons/bs";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFavorites,
} from "../../features/photos/favoriteSlice";
import { ImageListItem, Tooltip } from "@mui/material";

function Card(props) {
  const dispatch = useDispatch();
  const allPhotos = useSelector((state) => state.photos.allPhotos);
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((photo) => photo.id === props.id);
  const location = props.location.pathname;


  const handleClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(props.id));
    } else {
      dispatch(addToFavorites(props.id, allPhotos));
    }
  };

  const handleDownload = ()=>{
    const downloadLink = document.createElement("a");
    downloadLink.href = props.download;
    downloadLink.download = "photo.jpg";
    console.log(props.download)
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }


  return (
    <>
      {location !== "/favorites" && location !== "/favoritessearch" ? (
        <div className={styles.container}>
          <ImageListItem key={props.id}>
            <Tooltip title="Favorites">
              <i
                id="heart"
                onClick={handleClick}
                className={`${styles.hicon} ${
                  isFavorite ||
                  location === "/favorites" ||
                  location === "/favoritessearch"
                    ? styles.favorite
                    : ""
                }`}
              >
                <BsFillHeartFill />
              </i>
            </Tooltip>

            <img
              src={`${props.photo}?w=248&fit=crop&auto=format`}
              srcSet={`${props.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={props.description}
              loading="lazy"
            />
          </ImageListItem>
        </div>
      ) : (
        <div>
          <ImageListItem key={props.id}>
            <Tooltip title="Remove from favorites">
              <i
                id="heart"
                onClick={handleClick}
                className={`${styles.hicon} ${
                  isFavorite &&
                  (location === "/favorites" || location === "/favoritessearch")
                    ? styles.favorite
                    : ""
                }`}
              >
                <BsFillHeartFill />
              </i>
            </Tooltip>
            {(location === "/favoritessearch" || location === "/favorites") && (
              <Tooltip title="Download">
                <i id="download" 
                onClick={handleDownload}
                className={styles.dicon}>
                  <BsDownload />
                </i>
              </Tooltip>
            )}
            <img
               
              src={`${props.photo}?w=248&fit=crop&auto=format`}
              srcSet={`${props.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={props.description}
              loading="lazy"
              style={{
                minWidth: "300px", // Adjust the photo size to be 100% of its container width
                height: location === "/favoritessearch" || location === "/favorites" ? "auto" : "300px", // Reduce the height on mobile view
              }}
            />
          </ImageListItem>
        </div>
      )}
    </>
  );
}

export default Card;
