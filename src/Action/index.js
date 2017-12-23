let defaultFoodId = 0

export const saveTempInput = (value) => ({
    type:'SAVE_TEMP_INPUT',
    value
})

export const addFood = (name) => ({
    type:'ADD_FOOD',
    id:name === '' ? defaultFoodId:defaultFoodId++,
    name
})

export const deleteFood = (id) => ({
    type:'DELETE_FOOD',
    id
})

export const getCategory = () => ({
    type:'GET_CATEGORY',
})

export const getCategorySuccess = (response) => ({
    type:'GET_CATEGORY_SUCCESS',
    result:response
})

export const getCategoryFailure = (error) => ({
    type:'GET_CATEGORY_FAILURE',
    error:error
})