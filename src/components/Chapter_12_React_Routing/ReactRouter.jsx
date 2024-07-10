const ReactRouter = () => {
    return(
        <div className="mt-5">
            <hr />

            <h1 className="mb-3 mt-5 underline text-center">Section 12 - React Router</h1>

            <h2>1. What is React Router?</h2>

            <p id="paragraph-like">
                React router is a third party Library used in React that enables creation of multiple
                routes within a React application. <br /><br />

                It is installed through the terminal with the command. <b>npm install react-router-dom</b> .
            </p>

            <hr />

            <h2>2. Trying out React Routing</h2>

            <p id="paragraph-like">
                The Navbar is at the bottom of this section. <br />
                To try out React Routing, try any of the following routes to your browser. <br /><br />
                
                <b>
                    - /home <br />
                    - /about <br />
                    - /contact 
                </b><br /><br />

                More documenation about Nav-Bars is in the NavBar source code. 
                
            </p>

            <h2>3. Navigating Programatically </h2>

            <p id="paragraph-like">
                Learnt how to <b>navigate different routes Programatically</b> . An example is in the navbar below. <br /><br />

                In the Home page below, there is a button that redirects you to the order confirmation page and back. 
            </p>

            <h2>4. Implemented the 404 page not found in the Navigation </h2>

            <p id="paragraph-like">
                If you try to navigate to a route that is non existent in your browser, React by default
                does not have a `404` page not found. You have to implement it manually and then link it
                to your application as follows: <br /> <br />

                <b>&lt;Route path="*" element=&lt;NotFound /&gt;&gt;&lt;/Route&gt; </b>

            </p>

            <h2>5. Dynamic Routing</h2>

            <p id="paragraph-like">
                Learnt how to navigate dynamicly depending on the parameter on the URL. <br /> <br />

                Try it out in the path: <b>posts/&lt;any value&gt;</b>
            </p>
            
        </div>
    )
}

export default ReactRouter