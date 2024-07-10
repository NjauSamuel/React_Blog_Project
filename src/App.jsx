import { Routes, Route } from "react-router-dom";


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
import UseEffectCom from "./components/Chapter_9/UseEffect";
import Timer from "./components/Chapter_9/Timer";
import CleanUpInterval from "./components/Chapter_9/CleanUpInterval";
import Posts from "./components/Chapter_9/Post";
import MemoHook from "./components/Chapter_9/MemoHook";
import UseRef from "./components/Chapter_9/useRef";
import UseReducer from "./components/Chapter_9/useReducer";
import ComplexCounter from "./components/Chapter_9/ComplexCounter";
import PostListWithoutReducer from "./components/Chapter_9/PostListWithoutReducer";
import PostListWithReducer from "./components/Chapter_9/PostListWithReducer";
import PostListWithCustomHook from "./components/Chapter_9/PostListWithCustomHook";
import CssStyle from "./components/Chapter_11/CssStyle";
import ReactRouter from "./components/Chapter_12_React_Routing/ReactRouter";
import Home from "./components/Chapter_12_React_Routing/Pages/Home";
import About from "./components/Chapter_12_React_Routing/Pages/About";
import Contact from "./components/Chapter_12_React_Routing/Pages/Contact";
import NavBar from "./components/Chapter_12_React_Routing/NavBar";
import OrderConfirmation from "./components/Chapter_12_React_Routing/Pages/OrderConfirmation";
import NotFound from "./components/Chapter_12_React_Routing/Pages/NotFound";
import PostList from "./components/Chapter_12_React_Routing/Pages/PostList";
import PostDetail from "./components/Chapter_12_React_Routing/Pages/PostDetail";
import HotPosts from "./components/Chapter_12_React_Routing/Pages/HotPosts";
import ProductList from "./components/Chapter_12_React_Routing/Pages/ProductList";
import FeaturedProducts from "./components/Chapter_12_React_Routing/Pages/FeaturedProducts";
import NewProducts from "./components/Chapter_12_React_Routing/Pages/NewProducts";

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

      <UseEffectCom />

      <Timer />

      <CleanUpInterval />

      <Posts />

      <MemoHook/>

      <UseRef />

      <UseReducer/>

      <ComplexCounter />

      <PostListWithoutReducer />

      <PostListWithReducer/>

      <PostListWithCustomHook />

      <CssStyle />

      <ReactRouter />

      {/* React Router */}

      <NavBar />

      <Routes>

        <Route path="home" element={<Home />}></Route>

        <Route path="about" element={ <About />}></Route>

        <Route path="contact" element={ <Contact /> }></Route>

        <Route path="order-confirmation" element={ <OrderConfirmation /> }></Route>

        <Route path="posts" element={<PostList/>}></Route>

        <Route path="posts/:postId" element={<PostDetail/>}></Route>

        <Route path="posts/hot" element={<HotPosts/>}></Route>

        <Route path="products" element={<ProductList/>}>
          <Route path="featured" element={<FeaturedProducts/>}></Route>
          <Route path="new" element={<NewProducts/>}></Route>
        </Route>

        <Route></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>

    </div>
  )
}

export default App
