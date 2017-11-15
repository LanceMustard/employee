import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/site.css';
import styled, { css } from 'styled-components';

const TableRow = styled.div`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${props => props.selected && css`
    background: white;
    color: palevioletred;
  `}
`

class EmployeeTable extends Component {
  renderRow(employee, idx){
    return (
      <TableRow key={idx}>
        <Link to={`/${employee.Id}`}>
          {employee.Name}
        </Link>
      </TableRow>
    );
  }
  render() {
    return (
      <div>
        { this.props.employees.map(this.renderRow) }
      </div>
    );
  }
}

export default EmployeeTable;
