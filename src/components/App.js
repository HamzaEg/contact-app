import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../api/contacts";
import "./App.css";
import AppBar from "./AppBar";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import Box from "@mui/material/Box";
import ContactDetail from "./ContactDetail";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // RetrieveContacts
  const retrieveContacts = async () => {
    //const response = await api.get("/contacts");
    const response = await api.get("/users");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/users", request);
    setContacts([response.data, ...contacts]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/users/${contact.id}`, contact);
    // const {id, name, phone} = response.data;
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHanler = async (id) => {
    

    await api.delete(`/users/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);


  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Router>
        <AppBar />
        <Box sx={{ p: 2 }}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={searchTerm.length < 1 ? contacts : searchResults}
                  getContactId={removeContactHanler}
                  term={searchTerm}
                  searchKeyword={searchHandler}
                />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddContact {...props} addContactHandler={addContactHandler} />
              )}
            />
            <Route
              path="/edit"
              render={(props) => (
                <EditContact
                  {...props}
                  updateContactHandler={updateContactHandler}
                />
              )}
            />
            <Route path="/phone/:id" component={ContactDetail} />
          </Switch>
          {/* <AddContact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} getContactId={removeContactHanler}/> */}
        </Box>
      </Router>
    </Box>
  );
}

export default App;
