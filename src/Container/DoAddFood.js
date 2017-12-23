import { connect } from 'react-redux'
import AddFood from '../Component/AddFood'
import { addFood, saveTempInput } from '../Action'

const mapStateToProps = (state) => ({
    value:state.tempInput
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    onChange : (event) => {
        dispatch(saveTempInput(event.target.value))
    },
    onClick : (event) => {
        dispatch(addFood(event.target.value));
        dispatch(saveTempInput(''))
    }
})

const DoAddFood = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFood)

export default DoAddFood