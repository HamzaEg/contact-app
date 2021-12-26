import React from "react";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

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

      <Container maxWidth="md">
      <Typography variant="h2" color="initial">Kontakt hinzufügen</Typography>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <button className="ui button blue">hinzufügen</button>
        </form>
      </Container>
    );
  }
}

export default AddContact;