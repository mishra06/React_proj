import LandingPage from './Screen/LandingPage';
import './App.css';
import QuoteScreen from './Screen/QuoteScreen';
import RestaurantPage from './Screen/RestaurantPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/home' element={<LandingPage/>}/>
            <Route path='/Quotes' element={<QuoteScreen/>}/>
            <Route path='/Restaurant' element={<RestaurantPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
