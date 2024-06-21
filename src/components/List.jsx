const List = () => {

    const items = [
        "React",
        "Vue",
        "Angular",
        "Svelte"
    ]

    return (
        <div className="pt-2">
            <hr/>

            <h2><u>Displaying Items In a List: </u></h2>
            
            <p >Popular course names: </p>

            <ul className="pl-3 list-disc">
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}

export default List;