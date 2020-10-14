import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';


import './SwipeButtons.css';

function SwipeButtons() {
  return (
    <div className="swipeButton">
        <IconButton className ="swipeButton__repeat">
            <ReplayIcon fontSize ="Large" />
        </IconButton>
        <IconButton className ="swipeButton__left">
            < CloseIcon fontSize ="Large"/>
        </IconButton>
        
        <IconButton className ="swipeButton__star">
            <StarRateIcon fontSize ="Large" />
        </IconButton>
        <IconButton className ="swipeButton__right">
            < FavoriteIcon fontSize ="Large" />
        </IconButton>
        <IconButton className ="swipeButton__flash">
            < FlashOnIcon 
            fontSize ="Large" />
        </IconButton>





        
  
    </div>
  );
}

export default SwipeButtons;
