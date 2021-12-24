import React from "react";
import { Link } from "react-router-dom";
// import user from '../images/user.png'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Phone, DeleteForever, Edit } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const CardPhone = (props) => {
  const { id, name, phone } = props.contact;

  return (
    <ListItem>
      <ListItemAvatar>
        <Link
          to={{ pathname: `/phone/${id}`, state: { contact: props.contact } }}
        >
          <Avatar>
            <Phone />
          </Avatar>
        </Link>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={phone} />
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <Tooltip title="bearbeiten">
          <Edit color="primary" />
        </Tooltip>
      </Link>

      <Tooltip title="Löschen">
        <IconButton onClick={() => props.clickHander(id)}>
          <DeleteForever color="error"  />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};
export default CardPhone;
