import * as typeAction from './../constant/ActionType';

export const editStoreProfile = (newStore) => {
    return {
        type: typeAction.EDIT_STORE_PROFILE,
        newStore
    }
}

export const openLeftSideBar = (isOpenLeftSide) => {
    return {
        type: typeAction.OPEN_LEFT_SIDE_BAR,
        isOpenLeftSide
    }
}

export const openModal = () => {
    return {
        type: typeAction.OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: typeAction.CLOSE_MODAL
    }
}