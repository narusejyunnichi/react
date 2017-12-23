const categories = (state = {
    isFetching:false,
    lastUpdated:'',
    result:[],
    error:''
},action) => {
    switch(action.type){
        case 'GET_CATEGORY':
            return state = {
                isFetching:true,
                lastUpdated:new Date(),
                result:[],
                error:''
            }
        case 'GET_CATEGORY_SUCCESS':
            return state = {
                isFetching:false,
                lastUpdated:state.lastUpdated,
                result:action.result,
                error:''
            }
        case 'GET_CATEGORY_FAILURE':
            return state = {
                isFetching:false,
                lastUpdated:state.lastUpdated,
                result:state.result,
                error:action.error
            }
        default:{
            return state
        }
    }
}

export default categories