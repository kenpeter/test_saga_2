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

    // test
    console.log('-- test state --');
    console.log(state);

    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // pass in dispatch, func def, dispatch, then api
        getDataAPI: () => dispatch(getDataAPI())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
