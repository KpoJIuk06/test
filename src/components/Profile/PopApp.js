import React, { Component } from 'react';
import Popup from './Popup';


class App extends Component {

    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
                <h1> Online payment </h1>
                <button onClick={this.togglePopup.bind(this)}> Payment</button>

                {this.state.showPopup ?
                    <Popup

                        text='Payment'

                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>

        );
    }
}

export default App;