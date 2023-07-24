import React, { useState, useEffect } from "react";
import "../App/App.css";
import Header from "../Header/Header";
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };
  // Save contacts to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Retrieve contacts from local storage on initial mount
  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, []);
  return (
    <>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
