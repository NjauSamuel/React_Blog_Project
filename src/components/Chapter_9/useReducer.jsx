import { useReducer } from "react"

const initialState = 0

const reducer = (state, action) => {
    // Return new state:
    // In reducer function, an action is the work that you want to do something. 
    //In our example, work is increment and decrement. 
    // Normally, in reducer functions we use Switch statements:
    switch(action){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
}

const UseReducer = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="mt-5">

            <hr />

            <h2>7. The useReducer Hook</h2>

            <p id="paragraph-like">
                The <b>useReducer</b> hook is used for state management. <br /><br />

                Why use useReducer while we have the useState hook? <br /><br />

                1. The useState hook is based on the useReducer hook. <br /><br />

                2. useReducer hook is an alternative of the useState hook. <br /><br />

                Example of useReducer hook in action:<br /><br />

                Addition and subtraction by useReducer hook:

            </p>

            <div className="flex items-center justify-center space-x-2">
                <button onClick={() => dispatch("decrement")} className="bg-slate-400 hover:bg-slate-600 text-white" >-</button>
                <p>Counter → {counter}</p>
                <button onClick={() => dispatch("increment")} className="bg-slate-400 hover:bg-slate-600 text-white">+</button>
            </div>

            <p id="paragraph-like">Documentation on how to use the useReducer hook is inline with the code. </p>

        </div>
    )
}

export default UseReducer

 