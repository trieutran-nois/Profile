
import React, { useState }  from 'react';
import { connect } from 'react-redux';

import Tabs from './../../common-component/Tabs/Tabs';
import Store from './../Store/Store';
import Information from './../Information/Information';
import LeftSideBar from './../LeftSideBar/LeftSideBar';


import './Profile.scss';

function Profile(props) {
    const [activeTab, setActiveTab] = useState('store');
    const {setting} = props;

    return (
        <div className="Profile">
            <div className={`Profile__leftside ${setting.isOpenLeftSide ? 'show' : 'hide'}`}>
                <LeftSideBar />
            </div>
            <div className="Profile__tabs">
                <Tabs
                    active={activeTab}
                    onChange={active => setActiveTab(active)}
                >
                    <span key="store"> Store </span>
                    <span key="information"> Information </span>
                </Tabs>
                <div className="Profile__content">
                    {activeTab === 'store' ? <Store /> : <Information />}
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        setting: state.setting,
    }
}

export default connect(mapStateToProps, null)(Profile);
