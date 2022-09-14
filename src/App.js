import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Header cart={cart}/>
     <Home cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
