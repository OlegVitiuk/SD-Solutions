import React from 'react';
import {Link} from 'react-router-dom';
import {menu} from "./config";

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <ul className='header__menu'>
                    {
                        menu.map((item, index) => <li key={index}>
                            <Link to={`/${item.route}`} className='header__menu-item'>{item.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}