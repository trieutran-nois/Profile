
import React from 'react';
import { connect } from 'react-redux';

import * as helpers from './../../helpers/helpers';
import * as actions from './../../actions/index';

import './Button.scss';

function Button(props) {
    let {title, background, width, type, color, typeColor} = props;
    let btn = 'grey';

    if (typeColor === 'green') {
        btn = 'green';
    }

    const handleRequirement = (type) => {
        switch (type) {
           case 'edit':
                props.openProfileEdit();
                props.openModal();
           break;
           case 'cancel':
                props.closeProfileEdit();
                props.closeModal();
            break;
            case 'save':
                props.updatedStoreProfile();
            break;
           default:
        }
    }

    return (
        <div className={`Button ${btn}`}
            style={{ width: (width ? width : ''),
                    backgroundColor: (background ? background : '#e6e6e6'),
                    color: (color ? color : '#000'),
            }}
            onClick={() => handleRequirement(type)}
        >
           {helpers.formatCapitalize(title)}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        stores: state.store,
    }
}

const mapDispactchToProps = dispatch => {
    return {
        openModal: () => dispatch(actions.openModal()),
        closeModal: () => dispatch(actions.closeModal()),
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(Button);
