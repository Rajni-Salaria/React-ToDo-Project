
import './App.css';
import TaskList from "./components/taskList";
import CompletedTask from "./components/completedTasks";
// import SecondComp from "./components/statePractice";
import { useState } from "react";


function App() {
  // state  and useState and type 
  let [text, setText] = useState("");
  let [tasklistItems, setTasklistItems] = useState([]);          
  let [complete, setComplete] = useState([]);
  let [edit, SetEdit] = useState("");
  let [inpchange, setInpchange] = useState("")

  // let Array = ['cleaning', 'reading', 'lunch']
  //............... setTasklistItems function change ho rha hai to tasklistItems ki value me text likhna hai...............

  // .............Using for getting value................
  function handleChange(event) {
    setText(event.target.value)
    // console.log(event)
  }

  // function onChaange (event){
  //   setInpchange(event.target.value)
  // }
  // ..............Event Ho rha hai ..............................
  // Add button par click krte hi tasklistItems value dega 
  function btnClick() {
    if (text === ""){
      alert("Enter the task")
    } else{
      setTasklistItems([...tasklistItems, text]);
    }
   
    // text.pop
    //  console.log(newtask)
    setText("")

  }

  // ..........Event ho rha hai ..................
  // Button delete  ((filter ke ander arrelement? kya role hai) phla element zruri hai kyuki humne second index ko use karna hai varna usko pta nahi lgega ki index hai wo yeh smjhega ki wo !st element hai wo index ki value nhi element ki value dega ) 
  // (Filter : Test pass conditions ke according chlta hai pass ko rakh leta hai (humne ulta kia ) )
  const btndelete = (id, listtype) => {
    // checking fo confirm window.confirm true return karta hai ya false deending on click 
    if (listtype == "tasklistItems") {
      if (window.confirm('Are you sure you wish to delete this item?')) {
        const newlist = tasklistItems.filter((ele, i) => {
          return id !== i
        })
        setTasklistItems(newlist)
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
    const newlist = tasklistItems.filter((ele, i) => {
      return id !== i
    })
    setTasklistItems(newlist)

    // Data transfer to complete task
    const dltlist = tasklistItems.filter((dltele, i) => {
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
    setTasklistItems([...tasklistItems, ...undoitem])
  }


  const Tickclick = (id) => {
    SetEdit(id)
  }

  const editTick = (id) => {
    var newArr = [...tasklistItems]
    newArr[id] = inpchange
    setTasklistItems(newArr)
    SetEdit('')
  }

  // Inpchange 
  const Store = (event) => {
    setInpchange(event.target.value)
    // console.log(event)
    // Store(...tasklistItems)
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
            task={tasklistItems}
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
