import UseList from "./Hooks/UseList"

const url = "https://jsonplaceholder.typicode.com/posts"
const initialState = {
    loading: true,
    posts: [],
    error: ""
}

const PostListWithCustomHook = () => {
    const state = UseList(url, initialState)

    return(
        <div className="mt-6">
            <hr />

            <h2><u>11. Improved Fetching Data From an API with a Custom Hook</u></h2>

            <p id="paragraph-like">
                This is similar to <b>10</b> above, but instead of directly using the <b>useReducer</b> hook, 
                 we'll wrap the <b>useReducer</b> functionality to a reusable function and import
                 it to be used to fetch the posts by passing parameters to it. <br /><br />

                In this example, we'll fetch data from an API with the help of  
                <b> Axios</b> library from the API enpoint: 
                <b>https://jsonplaceholder.typicode.com/posts</b> with the help of 
                 the <b>useReducer</b> hook.  <br/><br/>
            </p>

            <h3 className="font-bold text-xl my-3 underline underline-offset-2">Post List: </h3>

            {state.loading ? 
                (<h3 className="font-bold text-xl my-3 text-green-600">Loading...</h3> )
                
                : state.error ? <h3 className="text-red-600 font-bold ml-5">Error: {state.error}!</h3> 
                
                : (
                    state.posts.map(
                    (post) => (
                        <div key={post.id}>
                            <h4 className="font-bold pl-5">{post.title}</h4>
                            <p className="pl-5">{post.body}</p>
                            <hr className="border-black my-4"/>
                        </div>
                    )
                    )
                )
            }

        </div>
    )
}

export default PostListWithCustomHook;