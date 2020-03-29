import React, { useState } from "react";
import Task from "./Task.js";
import { addDateDetails } from "../actions";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TaskBoard = props => {
  const [viewDate, setViewDate] = useState(new Date().toLocaleDateString());
  const [completed, setCompleted] = useState({});

  const handleActiveDate = date => {
    setViewDate(date.toLocaleDateString());
    setCompleted({});
  };

  // Lähetä tiedot Storeen
  const sendDate = () => {
    props.addDateDetails(viewDate, completed);
    alert("Date has been sent to store");
  };

  const setWorkerToState = (worker, task) => {
    setCompleted({ ...completed, ...{ [task]: worker } });
  };

  const renderFromStore = viewDate => {
    // Tarkistetaan löytyykö päivästä dataa
    let fromStore = props.dateDetails.filter(item => {
      return item.date === viewDate;
    });

    // Haetaan data nykyisistä tehtävistä ja luodaan uusi objekti.
    // Objekti täytetään tiedoilla jotka löytyvät storesta

    let fromTasklist = { date: viewDate, tasks: {} };

    props.taskList.forEach(task => {
      fromTasklist.tasks[task] = null;
    });

    console.log(fromTasklist);

    if (fromStore.length !== 0) {
      Object.entries(fromStore[0].tasks).forEach(([key, value]) => {
        fromTasklist.tasks[key] = value;
      });
    }

    return props.taskList.map(task => (
      <Task
        key={task}
        name={task}
        getWorker={worker => setWorkerToState(worker, task)}
      />
    ));
  };

  return (
    <div className="task-board">
      <Calendar
        className="calendar"
        onChange={date => handleActiveDate(date)}
      />
      <ul className="task-row-container">{renderFromStore(viewDate)}</ul>

      <button type="button" className="button" onClick={sendDate}>
        Send
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dateDetails: state.dateDetailsReducer,
    taskList: state.taskReducer
  };
};

export default connect(mapStateToProps, { addDateDetails })(TaskBoard);
