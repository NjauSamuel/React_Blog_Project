const MemoHook = () => {
    return(
        <div>
            <h2>5. Memo Hook (Component Performance Optimization)</h2>

            <p id="paragraph-like">
                In React, once a Child inside of a component is rerendered, the whole component is 
                rerendered, to prevent this default behaviour, we can wrap this child component with
                 a <b>memo</b> hook so that when a Prop inside the child is changed, only that child is 
                 re-rendered and not the whole Component. This increases the Performance of a component. 
                 <br/><br />

                 The <b>useCallback</b> React Hook also helps to optimize the functions inside of a 
                 component further. <br /><br />

                 The Hooks <b>memo & useCallback</b> are normally used inside of very large components only. <br /><br />

                 Use <b>useCallback</b> hook, to memorize a function reference, and use <b>memo</b> hook, to 
                 memorize a functions return value. 
            </p>
        </div>
    )
}

export default MemoHook;