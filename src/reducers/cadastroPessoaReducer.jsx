const INITIAL_STATE = {
    facaAlgumaCoisa: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FACA_ALGUMA_COISA':
            return { ...state, facaAlgumaCoisa: action.payload }
        default:
            return state
    }
}