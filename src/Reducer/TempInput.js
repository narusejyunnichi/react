const tempInput = (state = '', action) => {
    switch (action.type){
        case 'SAVE_TEMP_INPUT':
            return action.value
        default:
            return state
    }
}

export default tempInput