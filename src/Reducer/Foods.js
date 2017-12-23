const foods = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD':
            if(action.name){
                return [
                    ...state,
                    {
                        id:action.id,
                        name:action.name
                    }
                ]
            }else{
                return state
            }
        case 'DELETE_FOOD':
            return [
                ...state.filter(food => food.id !== action.id)
            ]
        default:
            return state
    }
}

export default foods