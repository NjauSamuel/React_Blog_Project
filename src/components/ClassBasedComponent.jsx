import React from "react";

class ClassBasedComponent extends React.Component{
    
    state = {course: "react", counter: 0};

    componentDidMount(){
        console.log("after render");
        //this.setState({course: "vue", counter: this.state.counter + 1});

        this.setState((oldState) => {
            return{
                course: "React",
                counter: oldState.counter + 1,
            };
        });
    }

    // Component will unmount will call before closing your component. 
    componentWillUnmount(){}

    render(){
        console.log("before render");
        return (
            <div className="pt-2">
                <hr />
                <h2><u>This is a Class based Component</u></h2>

                <p>State: Welcome to {this.state.course} course. </p>
            </div>
        )
    }
}

export default ClassBasedComponent;
