import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAllEmployees} from "actions/employees";

class Info extends React.Component {

    static propTypes = {
        doctors: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        doctors: []
    }

    componentDidMount() {
        //this.props.dispatch(getAllEmployees());
    }


    render() {
        return (
            <div >
                <h1>Info</h1>
            </div>
        );
    }
}

export default connect(state => ({
    employees: state.employees
}))(Info)