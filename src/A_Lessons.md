# STATE

## State

-  A state is a components' own data thus why in a class, you can access the
   state using the `this` keyword.
-  Props is not a components own data it is data passed to another component.
-  In a class based component, a state is an object. So we initialize state in a
   constructor.

*  You can also receive a props through a constructor.
*  Whenever you update a state, react will automatically render a component.

## State Shortcut Initialization

state = {course: "react"};

<p> State: This is {this.state.course} course. </p>

## componentDidMount(){}

-  `componentDidMount(){}` is nothing but a method in a class based component.
-  When a jsx element is rendered, this `componentDidMount(){}` method is called
   automatically.

### When to use componentDidMount(){}

-  just imagine you want to show some post list which comes from an API request.
   After rendering all the jsx, you call this API through this
   `componentDidMount(){}` method, thus, after updating our state, react
   automatically rendered this component. "Just keep in mind it is only after
   rendering the jsx element that this component is actually called. '

## Updating State

-  React provides us with methods to update states within a class based
   component.

-  We update a state through the following call back function. :

-  this.setState((oldState) => { return{ course: "vue", counter:
   oldState.counter + 1, }; });

## componentWillUnmount() {}

-  // Component will unmount will be called before closing your component.
-  componentWillUnmount(){}
-  More information about it will be given during the routing phase of the
   course.

## How to use state in functional components.

-  import React from "react";

const FunctionalComponent = () => { const [data, setData] =
React.useState("react");

    console.log(data)

    return(
        <div>
            <p className="py-4"><u>This is a functional component. </u></p>
        </div>
    )

}