import React,{Component} from 'react';

import './css/styleApp.css';

import LoginPasswordForm from './components/LoginPasswordForm.js';
import ChosePaymentType from './components/ChosePaymentType.js';
import PersonalDataForm from './components/PersonalDataForm.js';
import ProgressBar from './components/ProgressBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: 1,
      login : "",
      password: "",
      paymentType: "",
      firstName: "",
      lastName: "",
      age: ""
    };
    this.logPassChange = this.logPassChange.bind(this);//изменение значения пароля и логина
    this.paymentTypeChange = this.paymentTypeChange.bind(this);//изменение значения типа оплаты
    this.personalInfChange = this.personalInfChange.bind(this);//изменение значений личных данных
  }

  logPassChange(newLogin, newPassword) {
    this.setState({logged: 2, login: newLogin, password : newPassword});
  }

  paymentTypeChange(newType) {
    this.setState({logged: 3, paymentType: newType});
  }

  personalInfChange(newFirstName,newLastName,newAge) {
    this.setState({logged: 4, age: newAge, firstName: newFirstName, lastName: newLastName});
  }
  render() {
    if (this.state.logged === 1) {
      return (
          <div className="mainFrame">
            <div className="registrationNameText">Registration</div>
            <div>
              <ProgressBar step = {this.state.logged}/>
              <LoginPasswordForm onChange={this.logPassChange} />
            </div>
          </div>
      );
    }
    if (this.state.logged === 2){
      return (
          <div className="mainFrame">
            <div className="registrationNameText">Registration</div>
            <div>
              <ProgressBar step = {this.state.logged}/>
              <ChosePaymentType onChange={this.paymentTypeChange}/>
            </div>
          </div>
      );
    }
    if (this.state.logged === 3){
      return (
          <div className="mainFrame">
            <div className="registrationNameText">Registration</div>
            <div>
              <ProgressBar step = {this.state.logged}/>
              <PersonalDataForm onChange={this.personalInfChange}/>
            </div>
          </div>
      );
    }
    return (
        <div className="mainFrame">
          <div className="resultBlock">
            <div className="nameText">Congratulations! You've successfully registered</div><br/>
            <div className="nameLabelText">Provided data</div><br/>
            <table>
              <tbody>
              <tr>
                <td>Username:</td>
                <td>{this.state.login}</td>
              </tr>
              <tr>
                <td>First name:</td>
                <td>{this.state.firstName}</td>
              </tr>
              <tr>
                <td>Last name:</td>
                <td>{this.state.lastName}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{this.state.age}</td>
              </tr>
              <tr>
                <td>Payment method:</td>
                <td>{this.state.paymentType}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
    );

  }
}

export default App;
