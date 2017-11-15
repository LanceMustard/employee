import React, { Component } from 'react';
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

const DefaultEmployeeDetails = { Id: "", Name: "", Gender: ""};

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: DefaultEmployeeDetails
    };
  }

  componentDidMount() {
    // axios.get(`https://content.thewest.com.au/publication/${this.props.match.params.id}`)
    // .then(res => {
    //   this.setState({ heading: res.data.heading });
    //   this.setState({ videoDescription: res.data.videoDescription });
    //   this.setState({ image: res.data.posterImage.reference });
    // });
    console.log(this.props.match.params.id);
    let employee = Employees.find(x => x.Id == this.props.match.params.id);
    console.log(JSON.stringify(employee));
    if (employee) {
      // edit an existing employee
      this.setState({ employee });
    } else {
      // create a new employee
      this.setState({ employee: DefaultEmployeeDetails });
    }
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(JSON.stringify(this.state.employee));
    return (
      <div>
        <label>Id</label>
        <input text={this.state.employee.Id} />
        <br />
        <label>Name</label>
        <input text={this.state.employee.Name} />
        <br />
        <label>Gender</label>
        <input text={this.state.employee.Gender} />
        <br />
      </div>
    );
  }
}

export default EmployeeForm;
