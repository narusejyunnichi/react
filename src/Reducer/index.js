import { combineReducers } from 'redux'
import foods from './Foods'
import tempInput from './TempInput'
import categories from './Category'

const lunchHelper = combineReducers({
    foods,
    tempInput,
    categories
})

export default lunchHelper
