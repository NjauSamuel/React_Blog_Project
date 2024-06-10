import SubComponent from "./components/SubComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div>
      <p>This is a root component. </p>
      <SubComponent>
        This is children
      </SubComponent>

      <ClassBasedComponent test="nice test" />

      <FunctionalComponent />
    </div>
  )
}

export default App
