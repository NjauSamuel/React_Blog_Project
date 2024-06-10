import React from "react";

class ClassBasedComponent extends React.Component{
    
    state = {course: "react"};

    componentDidMount(){
        console.log("after render");
    }

    render(){
        console.log("before render");
        return (
            <div>
                <p><u>Class based Component</u></p>

                <p>State: This is a {this.state.course} course. </p>
            </div>
        )
    }
}

export default ClassBasedComponent;
