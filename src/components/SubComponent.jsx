const SubComponent = (props) => {

    console.log(props);

    return (
        <div>
            <p>This is a sub component</p>
            <span>{props.children}</span>
        </div>
    )
}

export default SubComponent;
