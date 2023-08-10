import './App.css';
import Fiscal from './components/fiscal';
import Home from './components/home';
import Nif from './components/nif';
import Niss from './components/niss';
import { Routes, Route, Navigate } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="nif" element={<Nif />} />
        <Route path="niss" element={<Niss />} />
        <Route path="fiscal" element={<Fiscal />} />
        <Route path="*" element={<Navigate to="home" replace={true} />} />
      </Routes>
    </div>
  );
}
// 

export default App;
