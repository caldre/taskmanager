const addPerson = person => {
  console.log(`ACTION: addPerson`);
  return {
    type: "ADD_PERSON",
    payload: person
  };
};

const addTask = task => {
  console.log(`ACTION: addTask`);
  return {
    type: "ADD_TASK",
    payload: task
  };
};

const addDateDetails = (date, completedTasks) => {
  console.log(`ACTION: addTask`);
  return {
    type: "ADD_DATE_DETAILS",
    payload: { date, completedTasks }
  };
};

const initializeDate = tasks => {
  console.log(`ACTION: initializeDate`);
  return {
    type: "INITIALIZE_DATE",
    payload: tasks
  };
};

const modifyCurrentDate = task => {
  console.log(`ACTION: modifyCurrentDate`);
  console.log(task);
  return {
    type: "MODIFY_CURRENT_DATE",
    payload: task
  };
};

export {
  addPerson,
  addTask,
  addDateDetails,
  initializeDate,
  modifyCurrentDate
};
