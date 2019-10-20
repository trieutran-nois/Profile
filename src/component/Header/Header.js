
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from './../../actions/index';

import Profile from './../Profile/Profile';
import UserButton from './../UserButton/UserButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';

function Header(props) {

    const {openLeftSideBar, setting} = props;

    return (
        <Router>
            <div className="header">
                <div className="header__left">
                    <div className="header__left__content">
                        <span className="icon" onClick={() => openLeftSideBar(!setting.isOpenLeftSide)}>
                            <FontAwesomeIcon
                                icon={!setting.isOpenLeftSide ? 'bars' : 'times'}
                                color="#6DB65B"
                                size="2x"
                            />
                        </span>
                        <span className="text"> KAMEREO </span>
                    </div>

                </div>
                <div className="header__right">
                    <div className="header__right__item">
                        <FontAwesomeIcon
                            icon='envelope'
                            color="darkgray"
                            size="lg"
                        />
                    </div>
                    <div className="header__right__item">
                        <FontAwesomeIcon
                            icon='shopping-cart'
                            color="darkgray"
                            size="lg"
                        />
                        <span className="circle"> 4 </span>
                    </div>
                    <div className="header__right__item">
                        <span style={{marginRight: '10px'}}>ENG</span>
                        <span style={{display: 'flex'}}>
                            <FontAwesomeIcon
                                icon='sort-down'
                                color="darkgray"
                                size="lg"
                            />
                        </span>
                    </div>
                    <div className="header__right__item">
                        <UserButton  />
                        <span style={{display: 'flex'}}>
                            <FontAwesomeIcon
                                icon='sort-down'
                                color="darkgray"
                                size="lg"
                            />
                        </span>
                    </div>
                </div>
            </div>
                <Switch>
                    <Route path="/profile" exact component={Profile} />
                    <Redirect from="/" to="/profile" />
                </Switch>
        </Router>

    );
}

const mapStateToProps = state => {
    return {
        setting: state.setting,
    }
}

const mapDispactchToProps = dispatch => {
    return {
        openLeftSideBar: (isOpenLeftSide) => dispatch(actions.openLeftSideBar(isOpenLeftSide)),
    }
}


export default connect(mapStateToProps, mapDispactchToProps)(Header);
