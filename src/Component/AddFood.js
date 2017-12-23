import React, { Component } from 'react'

var REQUEST_URL = 'http://localhost:3003/food';

class AddFood extends Component{

    // promise --- 图片下载
    // loadImageAsync = (url) => {
    //     return new Promise(function(resolve, reject) {
    //       const image = new Image();
      
    //       image.onload = function() {
    //         resolve(image);
    //       };
      
    //       image.onerror = function() {
    //         reject(new Error('Could not load image at ' + url));
    //       };
      
    //       image.src = 'http://d.hiphotos.baidu.com/image/pic/item/314e251f95cad1c8dc89fced763e6709c83d51cd.jpg';
    //     });
    //   }

    render(){
        return(
            <div>
                <input value = {this.props.value}
                       onChange = {this.props.onChange}
                       />
                <button 
                    value = {this.props.value}
                    onClick = {this.props.onClick}
                >
                添加
                </button>
                {/* <button onClick = {this.loadImageAsync}>
                    down
                </button> */}
            </div>
        );
    }
}

export default AddFood