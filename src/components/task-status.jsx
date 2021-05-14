import React from "react";

const TaskStatus = ({ tasks }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          {tasks.filter((task) => task.isComplete === false).length} open
        </div>
        <div className="col-md-4 text-center">{tasks.length} tasks</div>
        <div className="col-md-4 text-end">
          {tasks.filter((task) => task.isComplete === true).length} completed
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskStatus;
