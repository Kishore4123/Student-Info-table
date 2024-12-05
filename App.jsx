import { useState } from 'react';
import './App.css';
import info from "./info.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="table-responsive">
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="">   </th>
      <th scope="col" colSpan={"3"}>{info[0].exercise_name}</th>
      <th scope="col" colSpan={"3"}>{info[1].exercise_name}</th>
      <th scope="coL" colSpan={"3"}>EXERCISE_3</th>
    </tr>
    <tr>
      <th scope="col" >S.No &nbsp;&nbsp;&nbsp;Name</th>
      <th scope="col" >Viva</th>
      <th scope="col">Question Marks</th>
      <th scope="col">Total</th>
      <th scope="col">Viva</th>
      <th scope="col">Question Marks</th>
      <th scope="col">Total</th>
      <th scope="col">Viva</th>
      <th scope="col">Question Marks</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {info[0].student_name}</th>
      <td>{info[0].viva_marks}</td>
      <td>{info[0].question_marks}</td>
      <td>{info[0].total_marks}</td>
      <td> {info[1].viva_marks} </td>
      <td> {info[1].question_marks} </td>
      <td>{info[1].total_marks}</td>
      <td> 10 </td>
      <td> 10 </td>
      <td>20</td>
    </tr>
    <tr>
    <th scope="row">2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kumar</th>
    <td> 10 </td>
      <td> 10 </td>
      <td>20</td>
      <td> 10 </td>
      <td> 10 </td>
      <td>20</td>
      <td> 10 </td>
      <td> 10 </td>
      <td>20</td>
    </tr>
  </tbody>
    </table>
  </div>
  );
}

export default App
