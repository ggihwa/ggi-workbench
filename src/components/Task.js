import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task: {title, state}, onArchiveTask, onPinTask}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox" htmlFor="">
        <input
          type="checkbox"
          name="checked"
          disabled={true}
          defaultChecked={state === 'TASK_ARCHIVED'}
        />
        <span className="checkbox-custom" onClick={onArchiveTask} />
      </label>

      <div className="title">
        <input type="text" value={title} readOnly={true} />
      </div>

      {state !== 'TASK_ARCHIVED' && (
        <div className="actions">
          <a>
            <span className="icon-star" onClick={onPinTask} />
          </a>
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
export default Task;
