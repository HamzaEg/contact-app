import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {TextField, IconButton} from "@mui/material";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import ContactPhone from "@mui/icons-material/ContactPhone";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
 



const ContactList = (props) => {
  const inputEl = useRef("");
  
  const ContactListTitle = "Telefonliste";

  const smTitle = (title) => {
    return title.slice(0,3).toUpperCase() + '.';
  }

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
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        
        <Typography // show full title, only when the screen 'md' or larger //
        variant="h5" 
        color="initial"
        sx={{display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" }}}
        >
          {ContactListTitle}
        </Typography>

        <Typography // show acronym title, only when the screen 'xs' or 'sm'  //
        variant="h5" 
        color="initial"
        sx={{display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none"}}}
        >
          {smTitle(ContactListTitle)}
        </Typography>

        <Link to=''>
        
          <Tooltip title="Zufälligen Testkontakt hinzufügen">          
            <ContactPhone fontSize="large" color="secondary" onClick={loadJsonFileToApi}/>   
          </Tooltip>
        </Link>
        
        <Link to="/add">
          <Tooltip title="neue Kontakt anlegen!">
            <ContactPhone fontSize="large" color="primary" />
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
      <Box sx={{pt:4}} >
       {renderContactList.length > 0 ? renderContactList : "No Contacts avilable"}
      </Box>

    </Container>
  );
};

export default ContactList;
