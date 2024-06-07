import SubComponent from "./components/SubComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";

function App() {
  return (
    <div>
      <p>This is a root component. </p>
      <SubComponent>
        This is children
      </SubComponent>

      <ClassBasedComponent test="This is test props" />
    </div>
  )
}

export default App
