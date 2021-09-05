const iniState = [];

export default function productReducer(state = iniState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload.items;
        case 'change_type':
            let update = state[action.payload.id];
            update.type = action.payload.type;
            state[action.payload.id]=update;
            return [...state];
        default:
            return state;

    }
}