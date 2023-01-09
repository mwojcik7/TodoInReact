import Task from "./Task";

import './TaskList.css'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active)
  const done = props.tasks.filter(task => !task.active)

  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.date.toLowerCase();
      b = b.date.toLowerCase();

      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0
    })
  }
  done.sort((a,b) => b.finishDate - a.finishDate)

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="active">
        <h1>Task to do</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Empty list</p>}
      </div>
      <hr />
      <div className="done">
        <h3>Done task<em>({doneTasks.length})</em></h3>
        {doneTasks}
      </div>
    </>
  );
}
 
export default TaskList;