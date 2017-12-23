import React, { Component } from 'react'
import DoAddFood from '../Container/DoAddFood'
import ShowFoodList from '../Container/ShowFoodList'
import ShowCategoryList from '../Container/ShowCategoryList'

class Home extends Component{
    render(){
        return(
            <div>
                <DoAddFood/>
                <ShowFoodList />
                <ShowCategoryList />
            </div>
        );
    }
}

export default Home