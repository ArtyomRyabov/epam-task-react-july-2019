import React from 'react';

class LoginPasswordForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.usernameChange = this.usernameChange.bind(this);//Изменение логина в реальном времени
    this.passwordChange = this.passwordChange.bind(this);//Изменение пароля в реальном времени
    this.onBlurUsername = this.onBlurUsername.bind(this);//Обработчик события снятия фокуса с логина
    this.onBlurPassword = this.onBlurPassword.bind(this);//Обработчик события снятия фокуса с пароля
    this.handleSubmit = this.handleSubmit.bind(this);//Отправка формы
  }

  usernameChange(event) {
    this.setState({username: event.target.value});
    event.preventDefault();
    event.stopPropagation();
  }
  passwordChange(event) {
    this.setState({password: event.target.value});
    event.preventDefault();
    event.stopPropagation();
  }

  onBlurUsername(event) {
    if(this.state.username.length === 0){
      alert("You dont input login")
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onBlurPassword(event) {
    if((this.state.password.length <= 5)&&(this.state.password.length >=1)){
      alert("Short password")
    }
    if(this.state.password.length === 0){
      alert("You dont input password")
    }
    event.preventDefault();
    event.stopPropagation();
  }

  handleSubmit(event) {
    if((this.state.password.length >= 5) && (this.state.username.length >=1)){
      this.props.onChange(this.state.username, this.state.password);
      event.preventDefault();
    }
  }

  render() {
    return (
        <div className="registrationBlock">
          <form onSubmit={this.handleSubmit}>
            <label>
              <div>Username</div>
              <input type="text" value={this.state.username} onChange={this.usernameChange} onBlur={this.onBlurUsername}/><br/>
            </label>
            <label>
              <div>Password</div>
              <input type="text" value={this.state.password} onChange={this.passwordChange} onBlur={this.onBlurPassword}/><br/>
            </label>
            <input type="submit" value="Next step" className="button"/>
          </form>
          <div className="textBlock">
            Welcome to the team!<br/>
            Please proceed the registration<br/>
          </div>
        </div>
    );
  }
}

export default LoginPasswordForm;