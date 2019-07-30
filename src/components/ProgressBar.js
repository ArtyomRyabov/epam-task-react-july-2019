import React from 'react';

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.renderSwitch = this.renderSwitch.bind(this);//Выбор того как рендерить статус бар в зависимости от шага
    }


    renderSwitch(param) {
        var roundWidth = {width: '35px', height: '35px', top: '60px', lineHeight: '33px'};
        switch (param) {
            case 1:
                return (
                    <div className="progressBarBlock">
                        <div className="progressPointFirst" style={roundWidth}>1</div>
                        <div className="progressPointSecond">2</div>
                        <div className="progressPointThird">3</div>
                        <hr className="lineCenter"/>
                    </div>
                );
            case 2:
                return (
                    <div className="progressBarBlock">
                        <div className="progressPointFirst">1</div>
                        <div className="progressPointSecond" style={roundWidth}>2</div>
                        <div className="progressPointThird">3</div>
                        <hr className="lineCenter"/>
                    </div>
                );
            case 3:
                return (
                    <div className="progressBarBlock">
                        <div className="progressPointFirst">1</div>
                        <div className="progressPointSecond">2</div>
                        <div className="progressPointThird" style={roundWidth}>3</div>
                        <hr className="lineCenter"/>
                    </div>
                );
            default:
                return (
                    <h1>Something going wrong!</h1>
                );
        }
    }

    render() {
        return (
            this.renderSwitch(this.props.step)
        );
    }
}
export default ProgressBar;
