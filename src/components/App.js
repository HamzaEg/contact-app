import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import SearchAppBar from "./SearchAppBar";
import AddPhone from "./AddPhone";
import PhoneList from "./PhoneList";
import Box from "@mui/material/Box";
import PhoneDetail from "./PhoneDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Router>
        <SearchAppBar />
        <Box sx={{ p: 2 }}>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <PhoneList
                  {...props}
                  contacts={contacts}
                  getContactId="removePhoneHanler"
                />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddPhone {...props} addContactHandler={addContactHandler} />
              )}
            />
            <Route
              path="/phone/:id"
              component={PhoneDetail}
            />
            
          </Switch>
          {/* <AddPhone addContactHandler={addContactHandler} /> */}
          {/* <PhoneList contacts={contacts} getContactId={removeContactHandler}/> */}
        </Box>
      </Router>
    </Box>
  );
}

export default App;
