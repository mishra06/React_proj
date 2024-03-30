import LandingPage from './Screen/LandingPage';
import './App.css';
import QuoteScreen from './Screen/QuoteScreen';
import RestaurantPage from './Screen/RestaurantPage';
import FoodPage from './Screen/FoodPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './componant/Signup';
import Signin from './componant/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<LandingPage/>}/> */}
            <Route path='/home' element={<LandingPage/>}/>
            <Route path='/Quotes' element={<QuoteScreen/>}/>
            <Route path='/Restaurant' element={<RestaurantPage/>}/>
            <Route path='/Foods' element={<FoodPage/>}/>
            <Route path='/' element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
