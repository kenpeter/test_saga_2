// react
import React, { Component } from "react";
// connect
import { connect } from "react-redux";

import { getDataAPI } from '../actions/displayComponentAction';

class DisplayComponent extends Component {
    render() {
        return (
            <div>
                <p>
                    no data
                </p>

                <button onClick={() => this.props.getDataAPI()}>click</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

// Fire the event directly
const mapDispatchToProps = dispatch => {
    return {
        getDataAPI: () => dispatch({ type: "DISPLAY_COMPONENT_GET_DATA" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
