import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import HomeIcon from '@mui/icons-material/Home';
import Avatar from "@mui/material/Avatar";

const PhoneDetail = (props) => {
  const {name, phone} = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{phone}</div>          
        </div>
      </div>
      <div className="center-div">
        <Link to='/'>
        <Avatar >
          <HomeIcon color='primary'/>
        </Avatar>          
        </Link>
      </div>
      
    </div>
  );
};
export default PhoneDetail;
