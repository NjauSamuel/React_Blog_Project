const Introduction = () => {
    return(
        <div className="mt-3">
            <hr />
            <h2><u>React Hooks Introduction</u></h2>
            <div id="paragraph-like">
                <p><b>What is a React Hook?</b> A React hook is simply a Javascript function that can 
                be used to isolate the reusable part from a functional component. <br/><br/>
                They can be stateful and manage side effects.  </p>               
            </div>

            <div id="paragraph-like">
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
            </div>

            <div id="paragraph-like">
                <b>Hook Rules: </b><br/>
                <ol className="list-decimal list-inside ml-4">
                    <li>Hooks are used at the top of functional components. </li>
                    <li>Hooks are used only in functional components. (Not in class based)</li>
                    <li>Hooks are not used within functions inside of functional components</li>
                    <li>Hooks are not used in plain JavaScript files but rather in React files. </li>
                </ol>
            </div>

            <div id="paragraph-like">
                <b>React's Responsibilities</b><br/>

                <ol className="list-decimal list-inside ml-4">
                    <li>Render/ Re-render JSX code. </li>
                    <li>Manage States and Props. </li>
                    <li>Evaluating State/Props. </li>
                    <li>React to Events/Inputs. </li>
                </ol><br/>                
            </div>

            <div id="paragraph-like">
                <b>Side Effect Example in React</b>

                <ol className="list-decimal list-inside ml-4">
                    <li>Fetching Data from an API</li>
                    <li>Updating the DOM</li>
                    <li>Setting any Subscriptions or Timer etc. </li>
                </ol><br/>

                <p>We usually manage all kinds of sideffects using the use effect Hook. </p>
            </div>

        </div>
    )
}

export default Introduction;