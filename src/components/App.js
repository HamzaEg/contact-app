import React, {useState, useEffect} from 'react'
import { v4 as uuid } from "uuid";
import './App.css';
import SearchAppBar from './SearchAppBar';
import AddPhone from './AddPhone';
import PhoneList from './PhoneList';
import Box from '@mui/material/Box';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <Box sx={{ flexGrow: 1}}>
      <SearchAppBar />
      <Box sx={{ p: 2 }}>
      <AddPhone addContactHandler={addContactHandler} />
      <PhoneList contacts={contacts} getContactId={removeContactHandler}/>
      </Box>
    </Box>
  );
}

export default App;
