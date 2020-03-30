import React, { useState } from "react";
import { connect } from "react-redux";
import { modifyCurrentDate } from "../actions";

const Task = props => {
  const [worker, setWorker] = useState(props.worker);
  const [toggledWorkers, setToggledWorkers] = useState(false);

  //console.log("TASK " + worker);
  //console.log("BOARD " + props.worker);

  const handleWorkerClick = person => {
    setWorker(person);
    props.getWorker(person);
    modifyCurrentDate({ [props.name]: person });
  };

  const renderWorkers = () => {
    if (toggledWorkers) {
      const workers = props.personList.map(person => (
        <li key={person} onClick={() => handleWorkerClick(person)}>
          {person}
        </li>
      ));
      return workers;
    }
    return null;
  };

  return (
    <div
      className="task-row"
      onClick={() => {
        setToggledWorkers(!toggledWorkers);
      }}
    >
      <p className="task-row task">{props.name}</p>
      <p
        className="task-row worker"
        onChange={() => {
          setWorker(props.worker);
        }}
      >
        {props.worker}
        {/* täällä tapahtuu hämärää */}
      </p>
      <br></br>
      <ul className="task-row workers">{renderWorkers()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    personList: state.personReducer
  };
};

export default connect(mapStateToProps)(Task);
