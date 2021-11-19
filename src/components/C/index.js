import React, { Component } from 'react';
import { MyReactContextConsumer } from '../../context/MyReactContext';

class C extends Component {
    render() {
        return (
            <MyReactContextConsumer>
                {
                    ({data,setData})=>{
                        return <div>
                            <div>{data}</div>
                            <button onClick={()=>{
                                setData("Hello, It changed");
                            }}>Click Here !</button>
                        </div>
                    }
                }
            </MyReactContextConsumer>
        );
    }
}

export default C;