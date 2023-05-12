import './App.css';
import EmployeePage from './pages/EmployeePage';
import HomePage from './pages/HomePage';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Employees from './employees';


function App() {

  const [ employee, setEmployee ] = useState(null)
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage employees={Employees}/>} />
        <Route path="/employee/:id" element={<EmployeePage employees={Employees}/>}  />
      </Routes>
    </div>
  );
}

export default App;
