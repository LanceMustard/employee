import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './../resources/logo.svg';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from './EmployeeForm';
import './../styles/site.css';

const Employees = [
  {
    Id: 1,
    Name: "Jack",
    Gender: "Male"
  },
  {
    Id: 2,
    Name: "Jill",
    Gender: "Female"
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Lance Mustard - Coding Challenge</h1>
          </header>
            <aside>
              <EmployeeTable employees={Employees} current={Employees[0]} />
            </aside>
            <section>
              <Route exact path="/" component={EmployeeForm}/>
              <Route path="/:id" component={EmployeeForm}/>
            </section>
        </div>
      </Router>
    );
  }
}

export default App;
