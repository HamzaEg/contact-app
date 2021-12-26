import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../api/contacts";
import AppBar from "./AppBar";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import Box from "@mui/material/Box";
import ContactDetail from "./ContactDetail";
import JSONDATA from "../json/telefonbuch.json";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    // set the new value in the head of the "State" of the contacts array.
    setContacts([response.data, ...contacts]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
    setSearchTerm("");
  };

  const removeContactHanler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    // reset the contacts array "State" after delete an item.
    setContacts(newContactList);    
    setSearchTerm("");
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      // search by name!
      const newContactList = contacts.filter((obj) => {
        return obj.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // add one new random record from the json file!
  const getTestEntryJosnFile = () => {
    const maxLen = Object.values(JSONDATA).length;
    const randomPosition = Math.floor(Math.random() * maxLen);
    const arrayOfObj = Object.values(JSONDATA).slice(
      randomPosition,
      randomPosition + 1
    );
    arrayOfObj.map((RandomContact) => {
      // check if this new random name exist!
      const isExist = contacts.filter(
        (contact) => contact.name === RandomContact.name
      );
      if (isExist.length === 0) {
        addContactHandler(RandomContact);
      } else {
        alert(
          `Bitte versuchen Sie es erneut! ${RandomContact.name} ist schon vorhanden!`
        );
      }
    });
  };

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
                  getTestJsonArray={getTestEntryJosnFile}
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
            <Route path="/contact/:id" component={ContactDetail} />
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
