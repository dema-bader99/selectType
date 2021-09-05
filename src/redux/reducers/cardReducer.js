const iniState = [];

export default function cartReducer(state = iniState, action) {
    switch (action.type) {
        case 'card_type':
            let data = action.payload.data;
            state = data.filter(item => item.type === action.payload.sel )
            return state;
        default:
            return state;
    }
}