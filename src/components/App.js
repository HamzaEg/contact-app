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



  const getTestEntryJosnFile = () => {
    // add one new random record from the json file!
    const maxLen = Object.values(JSONDATA).length;
    const randomPosition = Math.floor(Math.random() * maxLen);
    const arrayOfObj = Object.values(JSONDATA).slice(
      randomPosition,
      randomPosition + 1
    );
    arrayOfObj.map((e) => {
      const isExist = contacts.filter((a) => a.name === e.name);
      if (isExist.length === 0) {
        addContactHandler(e);
      } else {
        alert(`Bitte versuchen Sie es erneut! ${e.name} ist schon vorhanden!`);
      }
    });
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    setContacts([response.data, ...contacts]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    // const {id, name, phone} = response.data;
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHanler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      // search just by name and phone attributes!
      const newContactList = contacts.filter((obj) => {
        return (obj.name.toLowerCase() + " " + obj.phone).includes(
          searchTerm.toLowerCase()
        );
      });

      // search in all attributes 'uuidv4'
      // const newContactList = contacts.filter((contact) => {
      //   return Object.values(contact)
      //     .join(" ")
      //     .toLowerCase()
      //     .includes(searchTerm.toLowerCase());
      // });
      setSearchResults(newContactList);
    } else {
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

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

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
            <Route path="/phone/:id" component={ContactDetail} />
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
