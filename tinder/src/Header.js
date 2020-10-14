import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';



function Header() {
  return (
    <div className="Header">

       <IconButton >
       <PersonIcon fontSize="large" className="header__icon" />
       </IconButton>
       <img className="header__logo"
       src =" https://img.icons8.com/fluent/48/000000/--tinder.png"/>
                                                                                                                                                                                            

<ChatIcon fontSize="large" className="header__icon" />



       
       
       
    
    </div>
  );
}

export default Header;
