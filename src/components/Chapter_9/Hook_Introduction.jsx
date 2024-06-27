const Introduction = () => {
    return(
        <div className="mt-3">
            <hr />
            <h2><u>React Hooks Introduction</u></h2>
            <p id="paragraph-like">
                <b>What is a React Hook?</b> A React hook is simply a Javascript function that can 
                be used to isolate the reusable part from a functional component. <br/><br/>
                They can be stateful and manage side effects.                 
            </p>

            <p id="paragraph-like">
                <b>React Hooks Scope For This Course: </b><br/>
                <ol className="list-decimal list-inside ml-4">
                    <li>useState</li>
                    <li>UseContext</li>
                    <li>useEffect</li>
                    <li>useCallback</li>
                    <li>useMemo</li>
                    <li>useRef</li>
                    <li>useReducer</li>
                    <li>Custom Hook</li>
                </ol>
            </p>

            <p id="paragraph-like" className="mb-3">
                <b>Hook Rules: </b><br/>
                <ol className="list-decimal list-inside ml-4">
                    <li>Hooks are used at the top of functional components. </li>
                    <li>Hooks are used only in functional components. (Not in class based)</li>
                    <li>Hooks are not used within functions inside of functional components</li>
                    <li>Hooks are not used in plain JavaScript files but rather in React files. </li>
                </ol>
            </p>
        </div>
    )
}

export default Introduction;