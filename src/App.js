import CarouselContainer from "./components/carousel/CarouselContainer";
import TodoList from "./components/todos/TodoList";
import "./scss/App.scss";

function App() {
  return (
    <div className="todos">
      <main>
        <CarouselContainer />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
