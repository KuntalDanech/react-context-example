import React, { Component } from 'react';
import C from '../C';
import { MyReactContext } from '../../context/MyReactContext';

class B extends Component {
    static contextType = MyReactContext
    componentDidMount(){
        this.context.setData("Hello, this is chaged fom B Component");
    }
    render() {
        return (
            <div>
                <C/>
            </div>
        );  
    }
}
export default B;