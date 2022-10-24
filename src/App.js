import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// == pages == //
import Home from './component/page/Home';
import Intro from './component/page/Intro';
import Login from './component/page/login/Login';
import SignUp from './component/page/login/SignUp';
import FindId from './component/page/login/FindId';
import FindPw from './component/page/login/FindPw';
import ProductView from './component/product/view/ProductView';
import BasketListPage from './component/page/user/basket/BaskListPage';
import BuyInfoFormPage from './component/page/buy/BuyInfoFormPage';
import UserConfigPage from './component/page/user/config/UserConfigPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Intro/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="sign-up" element={<SignUp/>}></Route>
            <Route path="find-id" element={<FindId/>}></Route>
            <Route path="find-pw" element={<FindPw/>}></Route>
            <Route path="user-config" element={<UserConfigPage/>}></Route>
            <Route path="product-view" element={<ProductView/>}></Route>
            <Route path="my-basket" element={<BasketListPage/>}></Route>
            <Route path="buy" element={<BuyInfoFormPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
