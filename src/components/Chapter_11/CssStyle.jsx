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
        </div>
    )
}

export default CssStyle