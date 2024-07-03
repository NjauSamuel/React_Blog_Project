import "../../assets/CSS/style.css"

const CssStyle = () => {
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

                <p id="paragraph-like">
                    Instead of linking CSS link to an individual component, you can alternatively 
                    link CSS to the whole HTML file using the following steps:

                    <div className="my-2 ml-3">
                        1. Go to the index.html file inside of your React file (having commented out the CSS in your react file). <br /> 
                        2. At the bottom of the head section, type out the following: <br />
                        <b><code>&lt;link rel="stylesheet" href="./src/assets/css/style.css" /&gt;</code></b>
                    </div>

                </p>

            </div>


        </div>
    )
}

export default CssStyle