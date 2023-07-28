import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavorite } from '../../features/photos/favoriteSlice';
import styles from "./Favorites.module.css";
import Order from './Order';
import Search from './Search';
import { Link, useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';

function SearchedDescription() {
  const searchedInfo = useSelector((state) => state.favorites.searchDescription);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const dispatch = useDispatch();
  const handleEditButtonClick = (photoId, description) => {
    setEditingId(photoId);
    setEditedDescription(description);
    handleModalOpen();
  };
  const location = useLocation();

  console.log("SEARCHED INFO:", searchedInfo)
  

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

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => {
    setOpen(false);
    setEditingId(null);
    setEditedDescription('');
  };

  return (
    <div className={styles.container}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"10%", paddingBottom:"5%"}}>
      <Order/>
      <Search/>

      </div>
    
      {!searchedInfo || searchedInfo.length === 0 ? (
        <div>
          <p>
            <Link to= "/favorites">NOT FOUND GO BACK</Link>
          </p>
        </div>
      ) : (
        searchedInfo.map((e, i) => (
          <div className={styles.cards}>
            <div>
              {console.log("PHOTO***************", e.photo)}
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
            {console.log("PHOTO***************")}
            </div>
            <div>
              <input
                style={{ display: 'inline-block' }}
                type="text"
                placeholder={e.description}
              />
              <button onClick={() => handleEditButtonClick(e.id, e.description)}>
                edit
              </button>
              <p>Width: {e.width}</p>
              <p>Height: {e.height}</p>
              <p>Likes: {e.likes}</p>
              <p>Date added: {e.added}</p>
            </div>
          </div>
        ))
      )}
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
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
          <Button variant="contained" onClick={handleSaveDescription}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default SearchedDescription;