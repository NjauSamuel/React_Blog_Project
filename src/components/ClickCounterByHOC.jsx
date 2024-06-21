import withCounter from "./HOC/withCounter";

const ClickCounterByHOC = ({counter, handleIncrement}) => {

    return(
        <div className="my-3">
            <hr />

            <h2><u>Click and Hover Counter By Higher Order Components + Render Props</u></h2>

            <button className="bg-purple-600 hover:bg-purple-800 text-white"  onClick={handleIncrement}>
                Clicked {counter} Times!
            </button>

        </div>
    )
}

export default withCounter(ClickCounterByHOC);