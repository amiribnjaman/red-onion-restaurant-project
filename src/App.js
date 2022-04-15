import { Route, Routes } from 'react-router-dom';
import './App.css';
import Food from './Pages/Home/Food/Food';
import Home from './Pages/Home/Home/Home';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path=':foodName' element={<Food />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
