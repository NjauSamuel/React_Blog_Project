import SubComponent from "./components/SubComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ConditionalRendering from "./components/ConditionalRendering";

function App() {
  return (
    <div>
      <p>This is a root component. </p>
      <SubComponent>
        This is children
      </SubComponent>

      <ClassBasedComponent test="nice test" />

      <FunctionalComponent />

      <ConditionalRendering />
    </div>
  )
}

export default App
