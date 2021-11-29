import CarouselContainer from './components/carousel/CarouselContainer';
import './scss/App.scss';

function App() {
  return (
    <div className="todos">
      <header className="todos-header">
        <h1>Todos</h1>
      </header>
      <main>
        <CarouselContainer />
      </main>
    </div>
  );
}

export default App;
