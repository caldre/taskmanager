import React from "react";
import AddItem from "../components/AddItem";
import ViewItems from "../components/ViewItems";

const PersonnelView = () => {
  return (
    <React.Fragment>
      <AddItem control="personnel" />
      <ViewItems view="personnel" />
    </React.Fragment>
  );
};

export default PersonnelView;
