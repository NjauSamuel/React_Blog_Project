import withCounter from "./HOC/withCounter";

const ClickCounter = ({counter, handleIncrement}) => {

    return(
        <div className="my-3">
            <hr />

            <h2><u>Higher Order Components</u></h2>

            <p className="my-2 py-1 pl-2 bg-green-100">A Higher Order Component is a function that takes a component as a 
                parameter and returns new components. 
            </p>

            <button className="bg-purple-600 hover:bg-purple-800 text-white"  onClick={handleIncrement}>
                Clicked {counter} Times!
            </button>

        </div>
    )
}

export default withCounter(ClickCounter);