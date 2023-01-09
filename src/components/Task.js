import './Task.css'

const Task = props => {

  const { id, text, date, active, finishDate } = props.task

  
  if(active) {
    return (
      <div className="task">
        <div className="task-data">
          <p>
            <strong>{text}</strong>
          </p>
          <p>
            Finish to <span>{new Date(date).toLocaleDateString()} </span>
          </p>
        </div>
        <div className="task-buttons-box">
          <button onClick={() => props.change(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
          </button>
          <button onClick={() => props.delete(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
          </button>
        </div>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <div className="task">
        <div className="task-data">
          <p>
            <strong>{text}</strong>
          </p>
          <p>
            Finish to {new Date(date).toLocaleDateString()}
            <br />
            Finished in <span>{finish} </span>
          </p>
        </div>
        <div className="task-buttons-box">
          <button onClick={() => props.delete(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
          </button>
        </div>
      </div>
    );
  }
}
 
export default Task;