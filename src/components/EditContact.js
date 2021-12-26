import React from "react";
import Container from "@mui/material/Container";

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
      <Container maxWidth="md">
        <h2>Kontakt bearbeiten</h2>
        <form className="ui form" onSubmit={this.update}>
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
            <label>Telefon</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <button className="ui button blue">Aktualisieren</button>
        </form>
      </Container>

    );
  }
}

export default EditContact;