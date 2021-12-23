import React from "react";
import { Link } from "react-router-dom";
// import user from '../images/user.png'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const CardPhone = (props) => {
  const { id, name, phone } = props.contact;

  return (
    <ListItem>
      <ListItemAvatar>
      <Link to={`/phone/${id}`}>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </Link>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={phone} />
       <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </ListItem>
  );
};
export default CardPhone;
