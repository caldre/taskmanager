const addPerson = person => {
  console.log(`ACTION: addPerson
  PAYLOAD: ${person}`);
  return {
    type: "ADD_PERSON",
    payload: person
  };
};

const addTask = task => {
  console.log(`ACTION: addTask
  PAYLOAD: ${task}`);
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

export { addPerson, addTask, addDateDetails };
