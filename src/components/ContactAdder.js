import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number: mobile, location };

    if (name.length < 1 || location.length < 1 || mobile.length !== 10) {
      alert("Please all the fields properly!!");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h2>Contact adder:</h2> <br />
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>

          <div>
            <button>Add Contact!</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
