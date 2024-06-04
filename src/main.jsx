import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//const p = React.createElement("p", null, "Hi there"); // Same as const p = <p>Hi there<p>;

const content = "Hi There!";
const index = 5;

const p = (
    <div>
        <p className='main' tabIndex={index}>
            <span className='test'>{content}</span>
            <br />
            <span className='test'>{content}</span>
        </p>
    </div>
);
console.log(p);

ReactDOM.createRoot(document.getElementById("root")).render(p);
