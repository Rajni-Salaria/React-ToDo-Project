function completedTask(props) {
    console.log(props)
    return (
        <div className="completed-task">
            <h3 className="task-list-header">Completed Task</h3>
            {props.abc.map((chk, i) => {
                return (
                    <div className="task-list-item" key={i}>
                        <img src="/assets/arrow-u-left-bottom.png" onClick={() => props.undo(i)} />
                        <p className="completed-task-name"> {chk} </p>
                        <img src="/assets/delete.png" className="completeimg" onClick={() => props.callback(i, "listtype")} />
                    </div>)
            })
            }
        </div>
    );
}
export default completedTask;