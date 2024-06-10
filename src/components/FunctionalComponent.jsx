import React from "react";

const FunctionalComponent = () => {
    const [data, setData] = React.useState("react");

    console.log(data)

    return(
        <div>
            <p className="py-4"><u>This is a functional component. </u></p>
        </div>
    )
}

export default FunctionalComponent;