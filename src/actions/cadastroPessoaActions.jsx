export function facaAlgumaCoisa() {
    return {
        type: 'FACA_ALGUMA_COISA',
        payload: 1
    }
}

export function facaAlgumaCoisa2() {
    return (dispatch, getState) => {
        dispatch(facaAlgumaCoisa())
debugger
        const { cadastroPessoa } = getState()

        let x = cadastroPessoa.facaAlgumaCoisa
    }
}
