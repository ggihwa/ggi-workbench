import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from "@storybook/addon-actions";
import Task from './Task'

const task = {
  title: "Story book",
  state: '',
};

const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

storiesOf("Task", module).
  add("default", () => <Task task={task} {...actions} />).
  add("pinned", () => (
    <Task task={{...task, state: "TASK_PINNED"}} {...actions} />
  )).
  add("achived", () => (
    <Task task={{...task, state: "TASK_ARCHIVED"}} {...actions} />
  ));
