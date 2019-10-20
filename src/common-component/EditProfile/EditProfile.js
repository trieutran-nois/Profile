
import React from 'react';
import { connect } from 'react-redux';

import Button from './../Button/Button';

import { ToastContainer, toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as helpers from './../../helpers/helpers';
import * as actions from './../../actions/index';

import './EditProfile.scss';
import 'react-toastify/dist/ReactToastify.css';


function EditProfile(props) {

    let img = 'http://startupcity.vn/Uploads/20180320025059.png';
    const {isOpenEditModal, closeProfileEdit, updateStoreProfile, stores} = props;

    let store = {...stores[0].store};
    let redInvoice = {...stores[0].redInvoice};

    window.scrollTo(0, 0);

    const notify = (type) => {
        switch (type) {
            case 'warning':
                return toast.warn("Warning Notification !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            case 'success':
                return toast.success("Success Updated Successfully !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            case 'error':
                return toast.error("Error ! Please type correct format of number and length of number over 7 characters !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            default:
                return;
        };
    }

    const onChangeStore = (event) => {
        let target = event.target;
        let name = target.name;
        store[name] = target.value;
    }

    const onChangeRedInvoice = (event) => {
        let target = event.target;
        let name = target.name;
        redInvoice[name] = target.value;
    }

    const updatedStoreProfile = () => {
        let stores = [];
        stores.push({store, redInvoice});
        if (stores[0].store.phone) {
            if(!helpers.validatePhoneNumber(stores[0].store.phone)) {
                notify('error');
                return;
            }
        }
        updateStoreProfile(stores);
        localStorage.setItem('stores', JSON.stringify(stores));
        notify('success');
        setTimeout(() => {
            closeProfileEdit();
            props.closeModal();
        }, 2000);
    }

    return (
        <div className="EditProfile"
             style={{display: (isOpenEditModal ? 'block' : 'none')}}
        >
            <div className="EditProfile__header">
                <span className="EditProfile__header__edit">
                    <FontAwesomeIcon
                        icon='pen'
                        color="rgba(109, 182, 91)"
                        size="lg"
                    />
                 </span>
                <span className="EditProfile__title"> EDIT STORE PROFILE </span>
            </div>
            <div className="EditProfile--container">
                <div className="EditProfile--container__image">
                    <h4> STORE IMAGE</h4>
                    <img src={img} alt="Avatar" />
                    <div className="EditProfile--container__left-btn">
                        <Button
                            title="Remove"
                        />
                        <Button
                            title="Upload Image"
                        />
                    </div>
                </div>
                <div className="EditProfile--container__info">
                    <div>
                        <h4> BASIC INFO</h4>
                        <form>
                            <div className="form-contain mb-1">
                                <span className="mb-1 form-contain__font"> Store Name </span>
                                <div className="form-contain--input">
                                    <input className="form form--full" type="text" name="name"
                                        onChange={onChangeStore}
                                    />
                                </div>
                            </div>
                            <div className="form-contain mb-1">
                                <span className="mb-1 form-contain__font"> Store Address </span>
                                <div className="form-contain--input">
                                    <input className="form form--full" type="text" name="address" placeholder="address"
                                        onChange={onChangeStore}
                                    />
                                    <select className="form form--half" name="district" onChange={onChangeStore}>
                                        <option value="">District</option>
                                        <option value="volvo">Q1</option>
                                        <option value="saab">Q2</option>
                                    </select>
                                    <select className="form form--half" name="city" onChange={onChangeStore}>
                                        <option value="">City</option>
                                        <option value="volvo">HCM</option>
                                        <option value="saab">HN</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-contain mb-1">
                                <span className="mb-1 form-contain__font"> Phone # </span>
                                <div className="form-contain--input">
                                    <input className="form form--full" type="text" name="phone" placeholder="phone" onChange={onChangeStore} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h4> RED INVOICE INFO</h4>
                        <form>
                            <div className="form-contain mb-1">
                                <span className="mb-1 form-contain__font"> Company Name </span>
                                <div className="form-contain--input">
                                    <input className="form form--full" type="text" name="name" onChange={onChangeRedInvoice} />
                                </div>
                            </div>
                            <div className="form-contain mb-1">
                                <span className="mb-1 form-contain__font"> Company Address </span>
                                <div className="form-contain--input">
                                    <input className="form form--full" type="text" name="address" placeholder="address" onChange={onChangeRedInvoice}/>
                                    <select className="form form--half" name="district" onChange={onChangeRedInvoice}>
                                        <option value="">District</option>
                                        <option value="volvo">Q1</option>
                                        <option value="saab">Q2</option>
                                    </select>
                                    <select className="form form--half" name="city" onChange={onChangeRedInvoice}>
                                        <option value="">City</option>
                                        <option value="volvo">HCM</option>
                                        <option value="saab">HN</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-contain mb-1">
                                <span className="mb-1 form-contain__font"> MST </span>
                                <div className="form-contain--input">
                                    <input className="form form--full" type="text" name="taxCode" placeholder="MST" onChange={onChangeRedInvoice}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="EditProfile--container__btn">
                        <Button
                            title="save"
                            background="#008040"
                            color="#fff"
                            type="save"
                            typeColor="green"
                            updatedStoreProfile={() => updatedStoreProfile()}
                        />
                        <Button
                            title="cancel"
                            closeProfileEdit={() => closeProfileEdit()}
                            type="cancel"
                        />
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
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
        updateStoreProfile: newStore => dispatch(actions.editStoreProfile(newStore)),
        closeModal: () => dispatch(actions.closeModal()),
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(EditProfile);
