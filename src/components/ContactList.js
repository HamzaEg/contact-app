import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {TextField, IconButton} from "@mui/material";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Button from '@mui/material/Button'
import SearchOutlined from "@mui/icons-material/SearchOutlined";




const ContactList = (props) => {
  console.log(props);
  const inputEl = useRef("");

  const loadJsonFileToApi = () => {
    props.getTestJsonArray();
  }

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

          <Tooltip title="Test Entry From Json">
          <Button variant="contained" color="primary" onClick={loadJsonFileToApi}>
            +1 Random            
          </Button>
          </Tooltip>
        
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
        InputProps={{
        endAdornment: (
          <IconButton>
            <SearchOutlined />
          </IconButton>
        ),
      }}
      />
      <Box sx={{p: 8}} >
       {renderContactList.length > 0 ? renderContactList : "No Contacts avilable"}
      </Box>

    </Container>
  );
};

export default ContactList;
