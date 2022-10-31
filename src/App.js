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
import ProductQuestionPage from './component/product/question/ProductQuestionPage';
import ProductSearchListPage from './component/product/search/ProductSearchListPage';
import Header from './component/header/Header';
import DeliveryConfig from './component/page/user/config/DeliveryConfig';
import UserBasicConfig from './component/page/user/config/UserBasicConfig';
import PaymentConfig from './component/page/user/config/PaymentConfig';
import CategoryMenu from './component/category/CategoryMenu';
import UserConfigPage from './component/page/user/config/UserConfigPage';

function App() {
  return (
    <div className='grid-container'>
      <BrowserRouter>
          <Header/>
          <CategoryMenu />
          <Routes>
              <Route index element={<Home/>}></Route>
              <Route path="intro" element={<Intro/>}></Route>
              <Route path="login" element={<Login/>}></Route>
              <Route path="sign-up" element={<SignUp/>}></Route>
              <Route path="find-id" element={<FindId/>}></Route>
              <Route path="find-pw" element={<FindPw/>}></Route>
              <Route path="product-view" element={<ProductView/>}></Route>
              <Route path="my-basket" element={<BasketListPage/>}></Route>
              <Route path="buy" element={<BuyInfoFormPage/>}></Route>
              <Route path="product-question" element={<ProductQuestionPage/>}></Route>
              <Route path="product-list/:categoryId" element={<ProductSearchListPage/>}></Route>
              <Route path="basic-config" element={<UserBasicConfig/>}></Route>
              <Route path="delivery-config" element={<DeliveryConfig/>}></Route>
              <Route path="payment-config" element={<PaymentConfig/>}></Route>
              <Route path="my-page" element={<UserConfigPage/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
