import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

class AddContact extends React.Component {
  state = {
    name: "",
    phone: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "") {
      alert("ALLE Felder sind Pflichtfelder!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", phone: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <Container maxWidth="md" onSubmit={this.add}>
        <Box
          component="form"
          //onSubmit={this.add}
          sx={{
            "& .MuiTypography-root": { m: 2 },
            "& .MuiTextField-root": { m: 1 },
            "& .MuiButton-root": { m: 2 },
          }}
          autoComplete="off"
        >
          <Typography variant="h4" color="initial">
            Kontakt hinzufügen
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
          <Button variant="contained" color="primary" onClick={this.add}>
            hinzufügen
          </Button>
        </Box>
      </Container>
    );
  }
}

export default AddContact;
