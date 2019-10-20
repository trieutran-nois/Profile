
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './UserButton.scss'

function UserButton(props) {


    return (
        <div className="UserButton">
            <div className="UserButton__btn">
                <FontAwesomeIcon
                    icon='circle'
                    color="darkgray"
                    size="2x"
                />
            </div>
            <div className="UserButton__name">
                <span className="UserButton__name__first">Taku Tanka</span>
                <span className="UserButton__name__second">Taku mabaas kiolo</span>
            </div>
        </div>
    );
}

export default UserButton;
