import './App.css';
import React, { useState } from'react';
import Header from './components/Header';
import Content from './components/Content';
import Cart from './components/Cart';


const App = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const handleClick = () => {
      setCartOpened(!cartOpened);
  }
  return (
    <div className="wrapper clear">
      {cartOpened ? <Cart onCart={handleClick}/> : null}
      <Header onCart={handleClick}/>
      <Content />
    </div>
  );
}

export default App;
