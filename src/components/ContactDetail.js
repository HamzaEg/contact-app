import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContactDetail = (props) => {
  const { name, phone } = props.location.state.contact;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="240" image={user} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <Button size="small">zurück</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default ContactDetail;
