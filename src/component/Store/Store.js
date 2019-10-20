
import React, { useState }  from 'react';
import { connect } from 'react-redux';

import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

import Button from './../../common-component/Button/Button';
import EditProfile from './../../common-component/EditProfile/EditProfile';

import * as helpers from './../../helpers/helpers';

import './Store.scss';


const StyledCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
          color: green[600],
        },
        marginRight: '0.5rem',
      },
      checked: {},
  })(Checkbox);

function Store(props) {
    const [isOpenEditModal, setOpenEditModal] = useState(false);

    const {storesInfo} = props;
    let stores = JSON.parse(localStorage.getItem('stores')) || storesInfo;

    let img = 'http://startupcity.vn/Uploads/20180320025059.png';

    return (
        <div className="Store">
           <div className="Store__information">
                <div className="Store__information__avatar">
                   <img src={img} alt="Avatar" />
                </div>
                <div className="Store__information__info">
                    <h4 style={{textTransform: 'toUpperCase'}}> STORE INFO </h4>
                    <div className="info--style">
                        <span className="info--style__left"> {helpers.formatCapitalize(Object.keys(stores[0].store)[2])}:</span>
                        <span className="content"> {helpers.formatCapitalize(Object.values(stores[0].store)[2])} </span>
                    </div>
                    <div className="info--style">
                        <span className="info--style__left"> {helpers.formatCapitalize(Object.keys(stores[0].store)[3])}:</span>
                        <span className="content"> {Object.values(stores[0].store)[3]} </span>
                    </div>
                    <div className="info--style">
                        <span className="info--style__left"> {helpers.formatCapitalize(Object.keys(stores[0].store)[6])}:</span>
                        <span className="content"> {Object.values(stores[0].store)[6]} </span>
                    </div>
                </div>

                <div className="Store__information__info">
                    <h4 style={{textTransform: 'toUpperCase'}}> RED INVOICE INFO </h4>
                    <div className="info--style">
                        <span className="info--style__left"> {helpers.formatCapitalize(Object.keys(stores[0].redInvoice)[0])}:</span>
                        <span className="content"> {helpers.formatCapitalize(Object.values(stores[0].redInvoice)[0])} </span>
                    </div>
                    <div className="info--style">
                        <span className="info--style__left"> {helpers.formatCapitalize(Object.keys(stores[0].redInvoice)[1])}:</span>
                        <span className="content"> {Object.values(stores[0].redInvoice)[1]} </span>
                    </div>
                    <div className="info--style">
                        <span className="info--style__left"> MST:</span>
                        <span className="content"> {helpers.formatCapitalize(Object.values(stores[0].redInvoice)[4])} </span>
                    </div>
                </div>
                <div>
                    <Button
                        title='edit profile'
                        type='edit'
                        openProfileEdit={() => setOpenEditModal(true)}
                    />
                </div>
           </div>
           <div className="Store__message">
                <h4 style={{textTransform: 'toUpperCase'}}>DELIVERY DEFAULT MESSAGE </h4>
                <div className="Store__message__item">
                    <div>
                        <StyledCheckbox color='primary' />
                    </div>
                    <textarea className="input" defaultValue="The API documentation of the TextareaAutosize React component. Learn more about the props and the CSS customization points." />
                </div>
                <div style={{opacity: 0.3, marginBottom: '1rem'}}>
                    <div className="Store__message__item">
                        <div>
                            <StyledCheckbox color="default" />
                        </div>
                        <input className="input" type="text" placeholder="Write your message" />
                    </div>
                    <div className="Store__message__item">
                        <div>
                            <StyledCheckbox color="default" />
                        </div>
                        <input className="input" type="text" placeholder="Write your message" />
                    </div>
                    <div className="Store__message__item">
                        <div>
                            <StyledCheckbox color="default" />
                        </div>
                        <input className="input" type="text" placeholder="Write your message" />
                    </div>
                    <div className="Store__message__item">
                        <div>
                            <StyledCheckbox color="default" />
                        </div>
                        <input className="input" type="text" placeholder="Write your message" />
                    </div>
                </div>
                <div style={{marginBottom: '1rem'}}>
                    <Button
                        title='update'
                        width="20%"
                    />
                </div>
           </div>

           <EditProfile isOpenEditModal={isOpenEditModal}
                        closeProfileEdit={() => setOpenEditModal(false)}
           />
        </div>
    );
}


const mapStateToProps = state => {
    return {
        storesInfo: state.store,
    }
}

export default connect(mapStateToProps, null)(Store);
