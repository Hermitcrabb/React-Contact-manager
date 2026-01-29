import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []); // to not get undefined null value it will only getContacts or process empty array to iterate

  const addContactData = (ContactData) => {
    const allContacts = [ContactData, ...contacts];
    setContacts(allContacts); // new data on top and old data bottom
    //setContacts([...contacts, ContactData]); old data on top and mew data bottom
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact-list">
        <h3> Contact list: </h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact> // we need to provide key for performance and to render multiple data we have to provide key
        ))}

        <button
          onClick={clearAllContacts}
          style={{ background: "#F44336", color: "white" }}
        >
          {" "}
          Clear ALL Contact
        </button>
      </div>
    </>
  );
};

export default App;
