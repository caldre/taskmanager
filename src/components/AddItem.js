import React, { useState } from "react";
import { addPerson, addTask } from "../actions";
import { connect } from "react-redux";

const AddItem = props => {
  const [control] = useState(props.control);
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    switch (control) {
      case "personnel":
        props.addPerson(name);
        setName("");
        break;
      case "tasks":
        props.addTask(name);
        setName("");
        break;
      default:
        break;
    }
  };

  return (
    <div className="input-container">
      <form className="add-item" onSubmit={handleSubmit}>
        <label htmlFor="name" value="name">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="submit" value="Add"></input>
      </form>
    </div>
  );
};

export default connect(null, { addPerson, addTask })(AddItem);
