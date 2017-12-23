import { connect } from 'react-redux'
import FoodList from '../Component/FoodList'
import { deleteFood } from '../Action'

const mapStateToProps = (state) => ({
    foods:state.foods
})

const mapDispatchToProps = (dispatch) => ({
    deleteClick: (id) => {
        dispatch(deleteFood(id))
    }
})

const ShowFoodList = connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodList)

export default ShowFoodList