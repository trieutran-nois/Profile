import React from 'react';
import { connect } from 'react-redux';

import Header from './component/Header/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTimes, faBars, faShoppingCart, faSortDown, faCircle, faHeart, faTachometerAlt, faFileInvoiceDollar,
	faLuggageCart, faAsterisk, faStore, faBuilding, faUtensils, faUsers, faPen
} from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import { openModal } from './actions';

library.add(faEnvelope, faKey, faTimes, faBars, faShoppingCart, faSortDown,faCircle, faHeart,faTachometerAlt, faFileInvoiceDollar,
	faLuggageCart, faAsterisk, faStore, faBuilding, faUtensils, faUsers, faPen
	);

function App(props) {
	const {setting} = props;

	return (
		<div className="App">
			<Header />
			<div className={`${setting.isOpenModal ? 'openModal' : ''}`}> </div>
		</div>
	);
}

const mapStateToProps = state => {
    return {
        setting: state.setting,
    }
}


export default connect(mapStateToProps, null)(App);
