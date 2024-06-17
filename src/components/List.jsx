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

            <p className="py-2"><u>Displaying Items In a List: </u></p>
            
            <p >Popular course names: </p>

            <ul className="pl-3 list-disc">
                {items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}

export default List;