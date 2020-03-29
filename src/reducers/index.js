import { combineReducers } from "redux";

const personReducer = (personList = [], action) => {
  switch (action.type) {
    case "ADD_PERSON":
      console.log(`REDUCER: ${action.type}`);
      const newListOfPersonnel = [...personList, action.payload];
      return newListOfPersonnel;

    default:
      // console.log(`Default case triggered!`);
      return personList;
  }
};

const taskReducer = (taskList = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log(`REDUCER: ${action.type}`);
      const newListOfTasks = [...taskList, action.payload];
      return newListOfTasks;

    default:
      // console.log(`Default case triggered!`);
      return taskList;
  }
};

const dateDetailsReducer = (dateDetailsList = [], action) => {
  switch (action.type) {
    case "ADD_DATE_DETAILS":
      console.log(`REDUCER: ${action.type}`);
      // Korvataan, mikäli päivä on jo asetettu
      let filtered = dateDetailsList.filter(listItem => {
        return listItem.date !== action.payload.date;
      });

      let newItem = {
        date: action.payload.date,
        tasks: action.payload.completedTasks
      };

      let newDateDetailsList = [...filtered, { ...newItem }];
      return newDateDetailsList;

    default:
      // console.log(`Default case triggered!`);
      return dateDetailsList;
  }
};

export default combineReducers({
  personReducer,
  taskReducer,
  dateDetailsReducer
});
