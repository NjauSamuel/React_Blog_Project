import React from "react";

class ClassBasedComponent extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state = {course: "react"}
    }
    render(){
        return (
            <div>
                <p>Class based Component</p>
                <span>Props: {this.props.test}</span>

                <span>Children: {this.props.children}</span>

                <p>State: This is a {this.state.course} course. </p>
            </div>
        )
    }
}

export default ClassBasedComponent;
