import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {getEmployees} from "actions/employees";
import {fields, typeOfSort} from './config';

class Info extends React.Component {

    static propTypes = {
        doctors: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        doctors: []
    }

    state = {
        activePage: 1,
        sortConfig: {}
    }

    componentDidMount() {
        this.props.dispatch(getEmployees(this.state.activePage));
    }

    makeSortConfig = (option, currentField) => {
        this.setState((prevState) => ({
            sortConfig: {
                ...prevState.sortConfig,
                [currentField]: option ? option.value : null
            }
        }));
    }

    checkSortConfig = () => {
        const {sortConfig} = this.state;
        if (Object.keys(sortConfig).length !== 2) {
            return false;
        } else {
            let result = true;
            for (const item in sortConfig) {
                if (!sortConfig[item]) {
                    result = false;
                    break;
                }
            }
            return result;
        }
    }

    changePage = (pageNumber) => {
        this.setState({activePage: pageNumber});
        const sortConfig = this.checkSortConfig() ? this.state.sortConfig : null;
        this.props.dispatch(getEmployees(pageNumber, sortConfig));
    }

    sortItems = () => {
        if(this.checkSortConfig()){
            this.props.dispatch(getEmployees(this.state.activePage, this.state.sortConfig));
        }
    }

    render() {
        const {sortConfig} = this.state;

        return (
            <div className='info'>
                <div className="info__sort">
                    <div className='info__sort-item'>
                        <div className='info__sort-label'>Choose variable to sort:</div>
                        <Select onChange={(option) => this.makeSortConfig(option, 'field')} options={fields}
                                value={sortConfig['field']}
                                className='info__sort-select' placeholder='Choose item...'/>
                    </div>
                    <div className='info__sort-item'>
                        <div className='info__sort-label'>Choose order to sort:</div>
                        <Select onChange={(option) => this.makeSortConfig(option, 'type')} options={typeOfSort}
                                value={sortConfig['type']}
                                className='info__sort-select' placeholder='Choose item...'/>
                    </div>
                    <button className="info__sort-button" type="submit" onClick={this.sortItems}>Sort!</button>
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
                        onChange={(pageNumber) => this.changePage(pageNumber)}
                    />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    employees: state.employees
}))(Info)