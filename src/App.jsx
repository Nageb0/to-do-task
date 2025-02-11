import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.css'

export default function App(){

  const [modalIndex, setModalIndex] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDate, setNewTaskDate] = useState(0);
  const [newTaskTime, setNewTaskTime] = useState(0);

  const[addTaskIndex, setAddTaskIndex]= useState([
    { nameTask: "make task", date:12/2/2025 , time: 22 }])


    const handleSubmit = () => {
      event.preventDefault();
      if (newTaskName != "" && newTaskDate != "" && newTaskTime != "") {
        let newTaskName = { nameTask: newTaskName, date: newTaskDate, time: newTaskTime };
        let copy = [...addTaskIndex];
        copy.push(addTaskIndex);
        setAddTaskIndex(copy)
        Swal.fire({
          icon: "success",
          text: "New Task Added Successfully ! ",
          timer: 1200
        })
      } else {
        Swal.fire({
          icon: "error",
          text: "Please Add The Task Data",
          timer: 1500
        })
      }
    }
  return(
    <div className="col-12 App">
      <form className="bg-white d-flex flex-wrap border rounded shadow col-12 p-3" onSubmit={handleSubmit}>
      <h1 className="text-primary m-2">to do list</h1>
      <button className="btn btn-primary mt-4 ms-4" onClick={()=>{setAddTaskIndex}} >Add Task</button>
      <input type="text" className="form-control" placeholder="Add Your Task Here " />
      <input type="number" className="form-control" placeholder="Enter Date Here" />
      </form>

      <table className="table table-light">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
<tbody>
  {addTaskIndex.map(El,index)=>{
    return(
      <tr key={index}>
         <td>{index + 1}</td>
                  <td>{el.nameTask}</td>
                  <td>{el.date} $</td>
                  <td>{el.time} PCS</td>
      </tr>
    )
  }}
</tbody>
      </table>
      </div>



  )
}
