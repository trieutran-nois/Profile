import * as typeAction from './../constant/ActionType';

const initialState = {
    isOpenLeftSide: true,
    isOpenModal: false,
};

const setting = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.OPEN_LEFT_SIDE_BAR:
            state.isOpenLeftSide = action.isOpenLeftSide;
            return {...state};
        case typeAction.OPEN_MODAL:
            state.isOpenModal = true;
            return {...state};
        case typeAction.CLOSE_MODAL:
            state.isOpenModal = false;
            return {...state};
        default: return {...state};
    }
}

export default setting;