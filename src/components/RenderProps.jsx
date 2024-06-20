const RenderProps = ({course, functionProp}) => {
    return (
    <div className="mt-3">
        <hr />
        <h2><u>Render Props</u></h2>

        <p>{course}</p>
        <p>{functionProp(true)}</p>
    </div>)
}

export default RenderProps