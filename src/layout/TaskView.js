import React from "react";
import AddItem from "../components/AddItem";
import ViewItems from "../components/ViewItems";

const TaskView = () => {
  return (
    <React.Fragment>
      <AddItem control="tasks" />
      <ViewItems view="tasks" />
    </React.Fragment>
  );
};

export default TaskView;
