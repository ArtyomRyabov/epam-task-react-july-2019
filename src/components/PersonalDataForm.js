import React from 'react';

class PersonalDataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      agree: false
    };

    this.agreeChange = this.agreeChange.bind(this);//Изменение статуса согласия с правилами
    this.firstNameChange = this.firstNameChange.bind(this);//Изменение имени в реальном времени
    this.lastNameChange = this.lastNameChange.bind(this);//Изменение фамилии в реальном времени
    this.ageChange = this.ageChange.bind(this);//Изменение возраста в реальном времени
    this.onBlurFirstName = this.onBlurFirstName.bind(this);//Обработчик события снятия фокуса с имени
    this.onBlurLastName = this.onBlurLastName.bind(this);//Обработчик события снятия фокуса с фамилии
    this.onBlurAge = this.onBlurAge.bind(this);//Обработчик события снятия фокуса с возраста
    this.handleSubmit = this.handleSubmit.bind(this);//Отправка формы
  }

  agreeChange(event) {
    if(this.state.agree){
      this.setState({
        agree: false
      });
    }else{
      this.setState({
        agree: true

      });
    }
  }
  firstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  lastNameChange(event) {
    this.setState({lastName: event.target.value});
  }
  ageChange(event) {
    if(Number(event.target.value)){
      this.setState({age: event.target.value});
    }
  }

  onBlurFirstName(event) {
    if(this.state.firstName.length === 0){
      alert("You dont input First Name")
    }
    event.preventDefault();
  }
  onBlurLastName(event) {
    if(this.state.lastName.length === 0){
      alert("You dont input Last name")
    }
  }
  onBlurAge(event) {
    if(this.state.lastName.length === 0){
      alert("You dont input Last name")
    }
    event.preventDefault();
  }

  handleSubmit(event) {
    if(this.state.agree && this.state.firstName && this.state.lastName && this.state.age){
      this.props.onChange(this.state.firstName, this.state.lastName, this.state.age);
    }else{
      alert("Your not agree or dont input data");
    }
    event.preventDefault();
  }


  render() {
    return (
        <div className='personalData'>
          <div className="nameLabelText">Enter your personal data</div><br/>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBlock">
              <label>
                <div>First name</div>
                <input type="text" value={this.state.firstName} onChange={this.firstNameChange} onBlur={this.onBlurFirstName}/><br/>
              </label>
              <label>
                <div>Last name</div>
                <input type="text" value={this.state.lastName} onChange={this.lastNameChange} onBlur={this.onBlurLastName}/><br/>
              </label>
              <label>
                <div>Age</div>
                <input type="text" value={this.state.age} onChange={this.ageChange} onBlur={this.onBlurAge} placeholder={"only numbers"}/><br/>
              </label>
            </div>
            <div className="agreeBlock">
              <label>
                <input name="agree" type="checkbox" checked={this.state.agree} onChange={this.agreeChange} />
                Accept terms and conditions
              </label><br/>
              <input type="submit" value="Register" className="button"/>
            </div>
          </form>
        </div>
    );
  }
}

export default PersonalDataForm;
