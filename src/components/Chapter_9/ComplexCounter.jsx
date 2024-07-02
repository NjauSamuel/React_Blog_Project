import { useReducer } from "react"

const initialState = {
    counter: 10
} // The initial value is often an object as shown above. 

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return {counter: state.counter + 1};
        case "decrement":
            return {counter: state.counter - action.value};
        default:
            return state;
    }
}

const ComplexCounter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="mt-5">
            <hr />

            <h2>8. Complex Counter → useReducer Hook</h2>

            <div className="flex items-center space-x-2">
                <button onClick={() => dispatch({type: "decrement", value: 2})} className="bg-slate-400 hover:bg-slate-600 text-white" >-</button>
                <p>Counter → {state.counter}</p>
                <button onClick={() => dispatch({type: "increment"})} className="bg-slate-400 hover:bg-slate-600 text-white">+</button>
            </div>

            <p id="paragraph-like">Learnt about the redux reducer parttern. It uses objects, and its different from previous <b>useReducer</b>. </p>

        </div>
    )
}

export default ComplexCounter