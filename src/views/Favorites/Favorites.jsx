import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  searchDescription,
  updateFavorite,
} from "../../features/photos/favoriteSlice.js";
import styles from "./Favorites.module.css";
import Order from "./Order.jsx";
import Search from "./Search.jsx";

function Favorites() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const searchedDescription = useSelector(
    (state) => state.favorites.searchDescription
  );
  const dispatch = useDispatch();
  const [searchedfavorites, setSearchedfavorites] = useState(favorites);

  const handleResetSearch = () => {
    dispatch(searchDescription([]));
  };

  useEffect(() => {
    if (searchedDescription.length > 0) {
      setSearchedfavorites(searchedDescription);
    } else {
      setSearchedfavorites(favorites);
    }
  }, [searchedDescription, favorites]);

  const location = useLocation();
  const [editingId, setEditingId] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");
  // Modal state
  const [open, setOpen] = useState(false);

  const handleEditButtonClick = (photoId, description) => {
    setEditingId(photoId);
    setEditedDescription(description);
    handleModalOpen();
  };

  const handleSaveDescription = () => {
    if (editingId && editedDescription) {
      const photo = favorites.find((photo) => photo.id === editingId);
      if (photo) {
        const updatedPhoto = { ...photo, description: editedDescription };

        dispatch(updateFavorite(updatedPhoto.id, updatedPhoto, favorites)); // Dispatch the action to update the description
      }
      handleModalClose();
    }
  };

  // Modal state
  const handleModalOpen = () => setOpen(true);
  // inicializo datos
  const handleModalClose = () => {
    setOpen(false);
    setEditingId(null);
    setEditedDescription("");
  };

  return (
    <Box className={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10%",
          paddingBottom: "5%",
        }}
      >
        <Order />
        <Search />
      </Box>

      {!searchedfavorites || searchedfavorites.length === 0 ? (
        <Box style={{ textAlign: "center" }}>
          <Typography variant="body1">
            NO PHOTOS ADDED PLEASE ADD FAVORITES PHOTOS
          </Typography>
        </Box>
      ) : (
        <Box className={styles.cards}>
          {searchedfavorites.map((e, i) => (
            <Box key={e.id}>
              <Card
                id={e.id}
                key={e.id}
                index={i}
                height={e.height}
                width={e.width}
                description={e.description}
                photo={e.photo}
                download={e.download}
                location={location}
              />
              <Box>
                <TextField
                  style={{ display: "block", width: "100%" }}
                  type="text"
                  placeholder={e.description}
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <Button
                  onClick={() => handleEditButtonClick(e.id, e.description)}
                >
                  edit
                </Button>
                <Typography>Width: {e.width}</Typography>
                <Typography>Height: {e.height}</Typography>
                <Typography>Likes: {e.likes}</Typography>
                <Typography>Date added: {e.added}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {searchedDescription.length > 0 && (
        <Button onClick={handleResetSearch}>Back to Favorites</Button>
      )}
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Description
          </Typography>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <Button variant="contained" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSaveDescription(editingId)}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Favorites;
