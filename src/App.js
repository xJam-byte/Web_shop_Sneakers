import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header /> 
      <Content />
    </div>
  );
}

export default App;
