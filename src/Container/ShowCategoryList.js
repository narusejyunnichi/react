import { connect } from 'react-redux'
import CategoryList from '../Component/CategoryList'
import { getCategory, getCategorySuccess, getCategoryFailure} from '../Action'

const mapStateToProps = (state) => {
    const { categories } = state;
    return ({
        isFetching:categories.isFetching,
        result:categories.result,
        lastUpdated:categories.lastUpdated,
        error:categories.error,
    })
}

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