import React, { Component } from 'react'

class FoodItem extends Component{
    render(){
        return(
            <div>
                {this.props.id}.
                {this.props.name}
                <a href='#' 
                   onClick = {this.props.deleteClick}
                   >删除</a>
            </div>
        );
    }
}

export default FoodItem