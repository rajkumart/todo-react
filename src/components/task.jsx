import React from "react";

const Task = (props) => {
  const { id, name, isComplete } = props.task;
  const formattedName = isComplete ? <s>{name}</s> : name;
  return (
    <li className="list-group-item">
      <input type="checkbox" onChange={() => props.onComplete(id)} />{" "}
      {formattedName}
      <i
        className="fa fa-trash pull-right"
        onClick={() => props.onDelete(id)}
      ></i>
    </li>
  );
};

export default Task;
