import React from "react";

class ClassBasedComponent extends React.Component{
    
    state = {course: "react", counter: 0};

    componentDidMount(){
        console.log("after render");
        //this.setState({course: "vue", counter: this.state.counter + 1});

        this.setState((oldState) => {
            return{
                course: "vue",
                counter: oldState.counter + 1,
            };
        });
    }

    // Component will unmount will call before closing your component. 
    componentWillUnmount(){}

    render(){
        console.log("before render");
        return (
            <div>
                <p className="py-4"><u>Class based Component</u></p>

                <p>State: This is a {this.state.course} course. </p>
            </div>
        )
    }
}

export default ClassBasedComponent;
