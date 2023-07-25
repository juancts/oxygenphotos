import React, { useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { updateFavorite } from '../../features/photos/favoriteSlice.js';
import styles from "./Favorites.module.css";


function Favorites() {

const favorites = useSelector((state)=>state.favorites.favorites)
// const allPhotos = useSelector((state) => state.photos.allPhotos);


const location = useLocation();
const [editingId, setEditingId] = useState(null);
const [editedDescription, setEditedDescription] = useState('');
// Modal state
const [open, setOpen] = useState(false);
const dispatch = useDispatch();

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
  setEditedDescription('');
};


  return (
    
    <div className={styles.container}>
      
      
      {!favorites || favorites.length ===0 ? 
      (<div style={{textAlign:"center"}}>
        <p>
          NO PHOTOS ADDED PLEASE ADD FAVORITES PHOTOS
          </p>
      
      </div>)
      
      
      : (favorites && favorites.map((e, i) => (
        
      <div className = {styles.cards}>
        <div>
      <Card
      id={e.id}
      key={e.id}
      index={i}
      height={e.height}
      width={e.width}
      description={e.description}
      photo={e.photo}
      location={location}
      />

        </div>
      <div >
      <input style={{display:"inline-block"}} type="text" placeholder={e.description}/>
      <button onClick={() => handleEditButtonClick(e.id, e.description)}>edit</button>
      <p>Width: {e.width}</p>
      <p>Height: {e.height}</p>
      <p>Likes: {e.likes}</p>
      <p>Date added:{e.added}</p>

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
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: 400 }}>
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
          <Button variant="contained" onClick={() => handleSaveDescription(editingId)}>
            Save
          </Button>
        </Box>
      </Modal>
      </div>
  )
}

export default Favorites