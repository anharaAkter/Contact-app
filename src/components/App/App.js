import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.js";
import AddContact from "../AddContact/AddContact.js";
import ContactList from "../ContactList/ContactList";
import ContactDetail from "../ContactDetails/ContactDetails";
import EditContact from "../EditContact/EditContact";
import { ContactsCrudContextProvider } from "../../context/ContactCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" exact element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />

            <Route path="/edit" element={<EditContact />} />

            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
