import React, { Component } from 'react'
import FoodItem from './FoodItem'

class FoodList extends Component{
    render(){
        return(
            <ul>
                {this.props.foods.map(food => 
                    <FoodItem name = {food.name}
                              key = {food.id}
                              id = {food.id}
                              deleteClick = {() => this.props.deleteClick(food.id)}
                    />
                )}
            </ul>
        );
    }
}

export default FoodList