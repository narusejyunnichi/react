import { connect } from 'react-redux'
import CategoryList from '../Component/CategoryList'
import { getCategory, getCategorySuccess, getCategoryFailure} from '../Action'

const mapStateToProps = (state) => ({
    isFetching:state.isFetching,
    result:state.result,
    lastUpdated:state.lastUpdated,
    error:state.error,
})

const mapDispatchToProps = (dispatch,wonProps) => ({
    getCategory:() => {
        dispatch(getCategory())
    }
}) 

const ShowCategoryList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)

export default ShowCategoryList