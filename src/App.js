import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='index.html' element={<Home />}></Route>
        <Route path='pages/ui-features/buttons.html' element={<Buttons />}></Route>
        <Route path='pages/ui-features/dropdowns.html' element={<Dropdown />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
