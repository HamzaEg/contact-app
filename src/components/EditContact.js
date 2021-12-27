import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

class EditContact extends React.Component {
  constructor(props){
    super(props)
    const {id, name, phone} = props.location.state.contact;
    this.state = {
      id,
      name,
      phone,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", phone: "" });
    this.props.history.push("/");
  };
  render() {
    return (
           <Container maxWidth="md" >
        <Box
          component="form"
          sx={{
            "& .MuiTypography-root": { m: 2 },
            "& .MuiTextField-root": { m: 1 },
            "& .MuiButton-root": { m: 2 },
          }}
          autoComplete="off"
        >
          <Typography variant="h4" color="initial">
            Kontakt bearbeiten
          </Typography>
          <TextField
            fullWidth
            label="Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Telefon"
            value={this.state.phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={this.update}>
            Aktualisieren
          </Button>
        </Box>
      </Container>
    );
  }
}

export default EditContact;