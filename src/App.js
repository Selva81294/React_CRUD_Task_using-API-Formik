import './App.css';
import {useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddDataStudent from './Components/AddDataStudent';
import EditStudData from './Components/EditStudData';
import LoginPg from './Components/LoginPg';
import Students from './Components/Students';
import ViewStudent from './Components/ViewStudent';

function App(){
  const [stud,setStud] = useState([])

useEffect(()=>{
  const getStudents = async ()=>{
    try {
      const response = await fetch("https://63b3190d5901da0ab3773d01.mockapi.io/users",{method:"GET"})
      const data = await response.json();
      setStud(data);
    } catch (error) {
      console.log(error)
    }
  };
  getStudents();
},[])

  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
          <LoginPg/>
        </Route>
        <Route exact path="/students">
          <Students stud={stud} setStud={setStud}/>
        </Route>
        <Route path="/addStudents">
           <AddDataStudent stud={stud} setStud={setStud}/>
        </Route>
        <Route path="/edit/:idx/:studId">
          <EditStudData stud={stud}/>
        </Route>
        <Route path="/view/:idx">
          <ViewStudent stud={stud} setStud={setStud}/>
        </Route>
      </Switch>
      
    </div>
  );
}





export default App;
