import React, { useState } from "react";
import { connect } from "react-redux";

const ViewItems = props => {
  const [view] = useState(props.view);

  const renderItems = () => {
    switch (view) {
      case "personnel":
        return props.personList.map(item => (
          <li className="item-row" key={item}>
            {item}
          </li>
        ));
      case "tasks":
        return props.taskList.map(item => (
          <li className="item-row" key={item}>
            {item}
          </li>
        ));
      default:
        return;
    }
  };

  return (
    <div className="item-container">
      <ul>{renderItems()}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { personList: state.personReducer, taskList: state.taskReducer };
};

export default connect(mapStateToProps)(ViewItems);
