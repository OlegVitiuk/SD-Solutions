import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {getAllEmployees} from "actions/employees";

class Info extends React.Component {

    static propTypes = {
        doctors: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        doctors: []
    }

    state = {
        activePage: 1
    }

    componentDidMount() {
        this.props.dispatch(getAllEmployees());
    }

    handleChange(option) {
        console.log(option);
    }

    render() {
        const fields = [
            {value: 'name', label: 'Name'},
            {value: 'surname', label: 'Surname'},
            {value: 'email', label: 'Email'},
            {value: 'company', label: 'Company'},
            {value: 'adress', label: 'Adress'},
            {value: 'phone', label: 'Phone'},
        ];
        const typeOfSort = [
            {value: 'asc', label: 'Ascending'},
            {value: 'desc', label: 'Descending'}
        ];
        return (
            <div className='info'>
                <div className="info__sort">
                    <div className='info__sort-item'>
                        <div className='info__sort-label'>Choose variable to sort: </div>
                        <Select onChange={this.handleChange} options={fields} className='info__sort-select'  placeholder='Choose item...'/>
                    </div>
                    <div className='info__sort-item'>
                        <div className='info__sort-label'>Choose order to sort: </div>
                        <Select onChange={this.handleChange} options={typeOfSort} className='info__sort-select' placeholder='Choose item...'/>
                    </div>
                    <button className="info__sort-button" type="submit">Sort!</button>
                </div>
                <div className="info__content">
                    <div className="info__items">
                        {
                            this.props.employees.map(employee => (
                                <div className='info__item' key={Symbol(employee.id).toString()}>
                                    <img src={employee.avatar} alt="avatar" className='info__item-avatar'/>
                                    <div className='info__item-content'>
                                        <span className='info__item-name'>{employee.first_name}</span>
                                        <span className='info__item-surmame'>{employee.last_name}</span>
                                        <span className='info__item-email'>{employee.email}</span>
                                        <span className='info__item-company'>{employee.company}</span>
                                        <span className='info__item-adress'>{employee.adress}</span>
                                        <span className='info__item-phone'>{employee.phone}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={999}
                        pageRangeDisplayed={5}
                        itemClass='page-item'
                        linkClass='page-link'
                        onChange={(pageNumber) => this.setState({activePage: pageNumber})}
                    />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    employees: state.employees
}))(Info)