
import './App.css';
import TaskList from "./components/taskList";
import CompletedTask from "./components/completedTasks";
// import SecondComp from "./components/statePractice";
import { useState } from "react";


function App() {
  let [text, setText] = useState("");
  let [update, setUpdate] = useState([]);
  let [complete, setComplete] = useState([]);
  let [edit, SetEdit] = useState("");
  let [inpchange, setInpchange] = useState("")

  // let Array = ['cleaning', 'reading', 'lunch']
  //............... setupdate function change ho rha hai to update ki value me text likhna hai...............

  // .............Using for getting value................
  function handleChange(event) {
    setText(event.target.value)
    // console.log(event)
  }

  // function onChaange (event){
  //   setInpchange(event.target.value)
  // }
  // ..............Event Ho rha hai ..............................
  // Add button par click krte hi update value dega 
  function btnClick() {
    setUpdate([...update, text]);
    // text.pop
    //  console.log(newtask)
    setText("")

  }

  // ..........Event ho rha hai ..................
  // Button delete  ((filter ke ander arrelement? kya role hai) phla element zruri hai kyuki humne second index ko use karna hai varna usko pta nahi lgega ki index hai wo yeh smjhega ki wo !st element hai wo index ki value nhi element ki value dega ) 
  // (Filter : Test pass conditions ke according chlta hai )
  const btndelete = (id, listtype) => {
    // checking fo confirm 
    if (listtype == "tasklist") {
      if (window.confirm('Are you sure you wish to delete this item?')) {
        const newlist = update.filter((ele, i) => {
          return id !== i
        })
        setUpdate(newlist)
      }
    }
    else {
      if (window.confirm('Are you sure you wish to delete this item?')) {
        const newlist = complete.filter((ele, i) => {
          return id !== i
        })
        setComplete(newlist)
      }
    }
  }
  // checkbox clicked then data pass to complete task

  // task list element remove then we use filter and comparing statement 
  const removecheckbox = (id) => {
    const newlist = update.filter((ele, i) => {
      return id !== i
    })
    setUpdate(newlist)

    // Data transfer to complete task
    const dltlist = update.filter((dltele, i) => {
      return id == i
    })
    setComplete([...complete, ...dltlist])

  }

  // undo
  const undofunction = (id) => {
    var backitem = complete.filter((ele, i) => {
      console.log(ele)
      return id !== i
    })
    setComplete(backitem)
    console.log(backitem)


    var undoitem = complete.filter((ele, i) => {
      console.log(ele)
      return id == i
    })
    setUpdate([...update, ...undoitem])
  }


  const Tickclick = (id) => {
    SetEdit(id)
  }

  const editTick = (id) => {
    var newArr = [...update]
    newArr[id] = inpchange
    setUpdate(newArr)
    SetEdit('')
  }

  // Inpchange 
  const Store = (event) => {
    setInpchange(event.target.value)
    // console.log(event)
    // Store(...update)
  }

  // var task1 = 'submit Assignment'
  return (
    <div className="App">
      <h1 className="app-header">Welcome to your To-Do App</h1>
      <div className="container">
        <div className="add-task">
          <input type="text" placeholder="Add a new task" value={text} onChange={handleChange} />
          <button onClick={btnClick}> Add</button>
        </div>
        <div className="task-row">
          <TaskList
            task={update}
            callback={btndelete}
            checkbox={removecheckbox}
            edit={edit}
            tick={Tickclick}
            EditClick={editTick}
            Store={Store}
          />
          <CompletedTask abc={complete} undo={undofunction}
            callback={btndelete}
          />
          {/* <SecondComp /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
