import ComponentTwo from "./ComponentTwo";

const ComponentOne = ({course}) => {
    return(
        <div className="mt-5"> 
            <hr />

            <h2><u>Context API</u></h2>

            <p id="paragraph-like">
                <b>Props Drilling:</b> In a scenario where you have lots of components and lots of props, 
                it is inneficient to pass a prop from one compenent to the nth component (Props Drilling) if the 
                number of n components exceds two. <br/> <br/>

                The Props Drilling issue can be solved through <b>Context API</b> <br/><br />

                In this example, the <b>Course="React"</b> has been passed from App.jsx(Component One) to Component Three which is inefficient. 
                 
            </p>

            <p id="paragraph-like">Component One</p>

            <ComponentTwo course={course}/>

        </div>
    )
}

export default ComponentOne;