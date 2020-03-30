import React, { useState } from "react";
import Task from "./Task.js";
import { addDateDetails, initializeDate, modifyCurrentDate } from "../actions";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TaskBoard = props => {
  const [viewDate, setViewDate] = useState(new Date().toLocaleDateString());
  const [completed, setCompleted] = useState({});

  let fromTaskList = { date: viewDate, tasks: {} };

  console.log(props.currentTaskList);

  // Resetoi hookit, mikäli vaihdetaan kalenterista päivää
  const handleActiveDate = date => {
    setViewDate(date.toLocaleDateString());
    setCompleted({});
  };

  const setWorkerToState = (worker, task) => {
    console.log("TASKISTA tullut worker " + worker);
    setCompleted({ ...completed, ...{ [task]: worker } });
    fromTaskList.tasks[task] = worker;
  };

  const renderDateDetails = viewDate => {
    // Haetaan data nykyisistä tehtävistä ja tallenetaan ne uuteen muuttujaan.
    // Objekti täytetään tiedoilla jotka löytyvät storesta

    props.taskList.forEach(task => {
      fromTaskList.tasks[task] = null;
    });

    // Tallenetaan mahdollinen storen data valitusta päivästä muuttujaan
    let dateDetailsFromStore = props.dateDetails.filter(dateDetail => {
      return dateDetail.date === viewDate;
    });

    // Mikäli storesta löytyi valitun päivän data, täytetään tiedot nykyisten tehtävien rinnalle
    if (dateDetailsFromStore.length !== 0) {
      Object.entries(dateDetailsFromStore[0].tasks).forEach(([key, value]) => {
        fromTaskList.tasks[key] = value;
      });
    }

    return Object.entries(fromTaskList.tasks).map(([key, value]) => {
      return (
        <Task
          key={key}
          name={key}
          worker={value}
          getWorker={worker => setWorkerToState(worker, key)}
        />
      );
    });
  };

  // Lähetä tiedot Storeen
  const sendDate = () => {
    props.addDateDetails(viewDate, completed);
    alert("Date has been sent to store");
  };

  initializeDate(fromTaskList);

  console.log(props.currentTaskList);

  return (
    <div className="task-board">
      <Calendar
        className="calendar"
        onChange={date => handleActiveDate(date)}
      />
      <ul className="task-row-container">{renderDateDetails(viewDate)}</ul>

      <button type="button" className="button" onClick={sendDate}>
        Send
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dateDetails: state.dateDetailsReducer,
    taskList: state.taskReducer,
    currentTaskList: state.currentDayReducer
  };
};

export default connect(mapStateToProps, {
  addDateDetails,
  initializeDate,
  modifyCurrentDate
})(TaskBoard);
