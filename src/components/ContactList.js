import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

const ContactList = (props) => {
  console.log(props);
  const inputEl = useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h4" color="initial">
          Telefonliste
        </Typography>
        <Link to="/add">
          <Tooltip title="Telefon hinzufügen">
            <AddIcon color="primary" />
          </Tooltip>
        </Link>
      </Box>
      <TextField
        fullWidth
        inputRef={inputEl}
        label="suche"
        value={props.term}
        onChange={getSearchTerm}
      />

      {renderContactList.length > 0 ? renderContactList : "No Contacts avilable"}
    </Container>
  );
};

export default ContactList;
