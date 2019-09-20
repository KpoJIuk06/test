import React from 'react';
import './style.css';
import PaymentForm from "./creditcard/paymentcard";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <PaymentForm/>
                    <button className='close' onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default Popup;