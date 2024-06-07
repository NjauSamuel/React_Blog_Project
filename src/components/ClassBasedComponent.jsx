import React from "react";

class ClassBasedComponent extends React.Component{
    render(){
        return (
            <div>
                <p>Class based Component</p>
                <span>Props: {this.props.test}</span>
            </div>
        )
    }
}

export default ClassBasedComponent;
