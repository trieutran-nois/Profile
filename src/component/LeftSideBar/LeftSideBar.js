
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserButton from './../UserButton/UserButton';

import './LeftSideBar.scss'

function LeftSideBar(props) {

    const showIconContent = (title, icon) => {
        return (
            <div className="content">
                <span className="content__icon">
                    <FontAwesomeIcon
                        icon={icon}
                        color="#cccccc"
                        size="lg"
                    />
                </span>
                <span className="content__name">
                    {title}
                </span>
            </div>
        )
    }

    return (
        <div className="LeftSideBar">
            <div className="LeftSideBar__first">
                <UserButton />
                <span className="LeftSideBar__first__change-store"> Change Store </span>
            </div>
            <div className="LeftSideBar__second">
                <FontAwesomeIcon
                    icon='heart'
                    color="#ff4d4d"
                    size="2x"
                />
                <span className="LeftSideBar__second__favorite-items"> favorite items </span>
            </div>
            <div className="LeftSideBar__list-items">
                <div className="LeftSideBar__list-items__item">
                    <h4> Dash board </h4>
                    {showIconContent('Overview', 'tachometer-alt')}
                    {showIconContent('Order', 'file-invoice-dollar')}
                    {showIconContent('Supplier List', 'luggage-cart')}
                    {showIconContent('Statistic', 'asterisk')}
                </div>
                <div className="LeftSideBar__list-items__item">
                    <h4> Market Place </h4>
                    {showIconContent('Market', 'store')}
                </div>
                <div className="LeftSideBar__list-items__item">
                    <h4> General Settings </h4>
                    {showIconContent('Company Info', 'building')}
                    {showIconContent('Store Info', 'utensils')}
                    {showIconContent('User Management', 'users')}
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
