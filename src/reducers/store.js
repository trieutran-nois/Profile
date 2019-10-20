import * as typeAction from './../constant/ActionType';

const initialState = [
    {
        redInvoice: {
            name: 'Luffy',
            address: '02/52/5123/523/12 Pham Ngoc Thach',
            district: 'Q1',
            city: 'HCM',
            taxCode: '022dasc'
        },
        store: {
            id: 1,
            logoUrl: 'test',
            name: 'name',
            address: '02/52/5123/523/12 Pham Ngoc Thach',
            district: 'Q1',
            city: 'HCM',
            phone: 84125489484521,
            redInvoice: 'red',
        }
    }
]

const store = (state = initialState, action) => {
    switch (action.type) {
        case typeAction.EDIT_STORE_PROFILE:
            let newState = action.newStore;
            return [...newState];
        default: return [...state];
    }
}

export default store;