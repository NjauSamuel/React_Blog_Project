import "../../assets/CSS/style.css"
import classes from "../../assets/CSS/test.module.css"
import { useState } from "react"

const CssStyle = () => {

    const [color, setColor] = useState(true)

    const handleClick = () => {
        setColor(!color)
    }

    return(
        <div className="mt-5">
            <hr />

            <h1 className="container">Chapter11: CSS Styling</h1>

            <h2>1. CSS Styling</h2>

            <p id="paragraph-like">
                In this module, we learnt how styling is achieved in React. <br /><br />

                For the default CSS that applies in this course, it's file is found in 
                the <b>src</b> folder and it is imported into the <b>main.jsx</b> file 
                using the syntax <b>import './index.css'</b> . <br /><br />

                For this Lesson, we styled the <b>H1</b> tag <b>chapter 11</b> above, 
                using CSS found in the directory <b>import "../../assets/CSS/style.css"</b> .
            </p>

            <div className="pt-5">

                <hr />

                <h2>2. Linking CSS to The Whole HTML</h2>

                <div id="paragraph-like">
                    Instead of linking CSS link to an individual component, you can alternatively 
                    link CSS to the whole HTML file using the following steps:

                    <div className="my-2 ml-3">
                        1. Go to the index.html file inside of your React file (having commented out the CSS in your react file). <br /> 
                        2. At the bottom of the head section, type out the following: <br />
                        <b><code>&lt;link rel="stylesheet" href="./src/assets/css/style.css" /&gt;</code></b>
                    </div>

                </div>

            </div>

            <div className="pt-5">
                <hr />

                <h2>3. Inline CSS in React</h2>

                <p id="paragraph-like">
                    React provides functionality to make inline CSS through the help of a <b>Style Props</b> . <br /> <br />

                    In the style prop, CSS arguments are passed as objects. <br /> <br />

                    The <b>paragraph</b> below has been styled with the help of <b>Style Props</b> .
                </p>

                <p style={{ "--tw-bg-opacity": 1, backgroundColor: "rgb(254 240 138 / var(--tw-bg-opacity))", paddingLeft: "0.5rem", paddingRight: "0.5rem", paddingTop: "0.25rem", paddingBottom: "0.25rem", marginTop: "0.5rem", marginBottom: "0.5rem", maxWidth: "fit-content"}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.
                </p>

            </div>

            <div className="pt-5 b">
                <hr />

                <h2>4. CSS Modules</h2>

                <p id="paragraph-like">
                    To start styling with <b>CSS Modules</b> , make a css file with the extention <b>modules.css</b> e.g., 
                    <b> test.module.css</b> . <br /><br/>

                    Next, import the CSS to a component using the syntax: <br /> 
                    <b>import classes from "../../assets/CSS/test.module.css"</b>
                    . <br /><br />

                    The difference between normal css and css modules is the extra <b>.module.css</b> extension and 
                    also the css modules require more than just the file path to import to a component. <br /> <br />

                    The following container below has been styled using <b>CSS Modules</b>: 
                </p>

                <div className={classes.container}>
                    <p className={classes.text}>CSS Module Styling</p>
                </div>

                <p id="paragraph-like">
                    Importantly, CSS module styling is <b>component specific</b> . Meaning, the advanage
                     of using a CSS Module is that the styles chosen will only be applied to a 
                     specific module and not the global code. 
                </p>

            </div>

            <div className="mt-5">
                <hr />

                <h2>5. Dynamic CSS</h2>

                <div className={color ? classes.container : classes.container1} id="centered-like">
                    <p className={color ? classes.text : classes.text1 } id="centered-like2">CSS Module Styling</p>
                    <div className="bg-slate-200 mr-4" id="button-like">
                        <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-900 text-white item">Change Color</button>
                    </div>
                </div>

                <p id="paragraph-like">
                    Learnt how to conditionally change the color of an element by 
                    leveraging <b>CSS Module</b>(s) and utilizing <b>useEffect</b> hook in 
                    an event handler. 
                </p>

            </div>

        </div>
    )
}

export default CssStyle