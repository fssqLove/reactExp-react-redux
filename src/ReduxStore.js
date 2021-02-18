import { createStore } from 'redux';

function counterReducer(state = 0, action) {
    switch (action.type) {
        case "ADD":
            state += action.payload
            break;

        default:
            break;
    }

    return state
}

export default createStore(counterReducer)