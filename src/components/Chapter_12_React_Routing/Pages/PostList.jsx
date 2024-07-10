import { useSearchParams } from "react-router-dom";

const PostList = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const filterValue = searchParams.get("filter")

    console.log(filterValue)

    return(
        <div>
            <h2>{filterValue === "latest" ? "Latest Posts List" : "All Posts List"}</h2>

            <p>Post 1</p>
            <p>Post 2</p>
            <p>Post 3</p>

            <div className="flex space-x-4 ">
                <button onClick={() => setSearchParams({filter: "latest"})} className="min-w-[125px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Latest Posts
                </button>

                <button onClick={() => setSearchParams({})} className="min-w-[125px] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Reset
                </button>
            </div>

        </div>
    )
}

export default PostList;