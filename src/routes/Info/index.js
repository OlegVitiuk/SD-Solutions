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
        this.props.dispatch(getAllEmployees());
    }


    render() {
        return (
            <div className='info'>
                {
                    this.props.employees.map(employee =>(
                        <div className='info__item' key={employee.id}>
                            <img src={employee.avatar} alt="avatar" className='info__item-avatar'/>
                            <div className='info__item-content'>
                                <span className='info__item-name' >{employee.first_name}</span>
                                <span className='info__item-surmame' >{employee.last_name}</span>
                                <span className='info__item-email'>{employee.email}</span>
                                <span className='info__item-company'>{employee.company}</span>
                                <span className='info__item-adress'>{employee.adress}</span>
                                <span className='info__item-phone'>{employee.phone}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default connect(state => ({
    employees: state.employees
}))(Info)