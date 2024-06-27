import SubComponent from "./components/SubComponent";
import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import List from "./components/List";
import CounterApp from "./components/CounterApp";
import Form from "./components/Form";
import RegistrationForm from "./components/RegistrationForm";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import RenderProps from "./components/RenderProps";
import ClickCounterByHOC from "./components/ClickCounterByHOC";
import HoverCounterByHOC from "./components/HoverCounterByHOC";
import Counter from "./components/Counter";
import ClickCounterByRenderProps from "./components/ClickCounterByRenderProps";
import HoverCounterByRenderProps from "./components/HoverCounterByRenderProps";
import ComponentOne from "./components/ComponentOne";
import CourseContext from "./components/context/courseContext";
import Introduction from "./components/Chapter_9/Hook_Introduction";

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

      <RegistrationForm />

      <ClickCounter />

      <HoverCounter />

      <RenderProps course="React" functionProp={(isFavourite) => (isFavourite ? 'React is favourite. ' : 'Vue')} />

      <ClickCounterByHOC />

      <HoverCounterByHOC />

      <Counter 
        render={
          (counter, handleIncrement) => (
            <ClickCounterByRenderProps counter={counter} handleIncrement={handleIncrement} />
          )
        }
      />

      <Counter 
        render={
          (counter, handleIncrement) => (
            <HoverCounterByRenderProps counter={counter} handleIncrement={handleIncrement} />
          )
        }
      />

      <CourseContext.Provider value={{courses: "React"}}>
        <ComponentOne course="React" />
      </CourseContext.Provider>

      <Introduction />

    </div>
  )
}

export default App
