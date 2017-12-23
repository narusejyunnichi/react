import React, { Component } from 'react'

class CategoryList extends Component {
    render(){
        return(
            <div>
                {this.props.result.map(category =>
                    <a href='#' 
                    key={category.id}>{category.name}
                    </a>
                )}
            </div>
        )
    }
}

export default CategoryList