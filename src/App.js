import { Route, Routes } from 'react-router-dom';
import './App.css';
import Food from './Pages/Home/Food/Food';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
