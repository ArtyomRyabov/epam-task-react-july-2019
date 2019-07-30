import React from 'react';

class ChosePaymentType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentType: 'cash',
      cash: true,
      card: false
    };

    this.cashInputChange = this.cashInputChange.bind(this);//Изменение на тип наличные
    this.cardInputChange = this.cardInputChange.bind(this);//Изменение на тип карта
    this.handleSubmit = this.handleSubmit.bind(this);//Отправка формы
  }

  cashInputChange(event) {
    this.setState({
      paymentType: 'cash',
      cash: true,
      card: false
    });
  }
  cardInputChange(event) {
    this.setState({
      paymentType: 'card',
      cash: false,
      card: true
    });
  }

  handleSubmit(event) {
    this.props.onChange(this.state.paymentType);
    event.preventDefault();
  }


  render() {
    return (
        <div className="payTypeBlock">
          <form onSubmit={this.handleSubmit} className="paymentTypeForm">
            <div className="formNameText">Chose payment type</div><br/>
            <label className="radioButtons">
              <input
                  name="Credit card"
                  type="radio"
                  checked={this.state.card}
                  onChange={this.cardInputChange}
                  className="radioButton"
                  id="cardRadio"/>
              <label htmlFor="radio2"><label htmlFor="cardRadio"></label></label>
              <div>Credit card</div>
            </label>
            <br/>
            <label className="radioButtons">
              <input
                  name="Cash"
                  type="radio"
                  checked={this.state.cash}
                  onChange={this.cashInputChange}
                  className="radioButton"
                  id="cashRadio"/>
              <label htmlFor="radio1"><label htmlFor="cashRadio"></label></label>
              <div>Cash</div>
            </label>
            <br/>
            <input type="submit" value="Next step" className="button"/>
          </form>
        </div>
    );
  }
}

export default ChosePaymentType;