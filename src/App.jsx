import SubComponent from "./components/SubComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import List from "./components/List";
import CounterApp from "./components/CounterApp";
import Form from "./components/Form";

function App() {
  return (
    <div  className="pt-2">
      
      <h1 className="text-center font-bold">React Course 2024</h1>

      
      <p className="pt-2">This is a root component. </p>
      
      <SubComponent>
        This is children
      </SubComponent>

      <ClassBasedComponent test="nice test" />

      <FunctionalComponent />

      <ConditionalRendering />

      <List />

      <CounterApp />

      <Form />

    </div>
  )
}

export default App
