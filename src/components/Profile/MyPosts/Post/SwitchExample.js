import  React, { Component } from 'react';
import Switch from "react-switch";

class SwitchExample extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label htmlFor="small-radius-switch">
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    handleDiameter={15}
                    offColor="#08f"
                    onColor="#0ff"
                    offHandleColor="#0ff"
                    onHandleColor="#08f"
                    height={20}
                    width={35}
                    className="react-switch"
                    id="small-radius-switch"
                />
            </label>
        );
    }
}

export default SwitchExample;