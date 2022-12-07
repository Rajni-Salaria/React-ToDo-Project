import { useState } from "react";

function TaskList(props) {
    console.log(props)
    return (
        <div className="task-list">
            <h3 className="task-list-header"> Task list</h3>
            {props.task.map((taskItem, i) => {
                return (
                    // return pura div 
                    <div className="task-list-item" key={i}> 
                        <input type="checkbox" onClick={() => props.checkbox(i)} />
                        {props.edit === i ?
                            <div className="r" ><input type="text" defaultValue={taskItem} onChange={props.Store} />
                                <img className="check.png" src="\assets\check.png" onClick={() => props.EditClick(i)} /> </div>
                            :
                            <div className="edit-check" > <p className="task-name">{taskItem} </p>
                                <img className="edit-img" src="\assets\pencil.png" onClick={() => props.tick(i)} /></div>
                        }
                        <img src="\assets\delete.png" onClick={() => props.callback(i, "tasklist")} />
                    </div>)
            }
            )}

        </div>

    );
}
export default TaskList;