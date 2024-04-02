import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

// == pages == //
import Home from './page/main/Home';
import Intro from './page/main/Intro';
import ProductView from './page/main/product/view/ProductView';
import BasketListPage from './page/main/user/cart/BaskListPage';
import BuyInfoFormPage from './page/main/order/BuyInfoFormPage';
import ProductQuestionPage from './page/main/product/qna/ProductQuestionPage';
import DeliveryConfig from './page/main/user/delivery/DeliveryConfig';
import UserBasicConfig from './page/main/user/basic/UserBasicConfig';
import PaymentConfig from './page/main/user/payment/PaymentConfig';
import UserConfigPage from './page/main/user/UserConfigPage';
import CategorySideNavBar from './page/main/category/CategorySideNavBar';
import FindId from './page/main/login/find/FindId';
import FindPw from './page/main/login/find/FindPw';
import SignUp from './page/main/login/find/SignUp';
import BuyConfig from './page/main/user/order/BuyConfig';
import ReviewWriteForm from './page/main/user/order/ReviewWriteForm';
import { getUserAttribute } from './js/login/login';
import AdminPage from './page/admin/AdminPage';
import CategoryManagePage from './page/admin/category/CategoryManagePage';
import CustomServicePage from './page/admin/cs/CustomServicePage';
import OrderConfirmPage from './page/main/order/OrderConfirmPage';
import DeliveryFormPage from './page/main/user/delivery/DeliveryFormPage';
import PayReadyPage from './page/main/pay/kakaopay/PayReadyPage';
import PayApprovePage from './page/main/pay/kakaopay/PayApprovePage';
import PaySuccessPage from './page/main/order/PaySuccessPage';
import PartnersListPage from './page/admin/partners/PartnersListPage';
import ProductListPage from './page/main/product/list/ProductListPage';
import ProductSearchListPage from './page/main/product/search/ProductSearchListPage';
import InternalPayPage from './page/main/pay/internal/InternalPayPage';
import PaymentForm from './page/main/user/payment/PaymentForm';

function App() {

  useEffect(()=>{
    console.log(new Date());
    console.log("client time : " + new Date().getTime());
    console.log("server time : " + getUserAttribute("expireDate"));

    console.log( new Date() > getUserAttribute("expireDate") );
    if(new Date().getTime() > getUserAttribute("expireDate")){
      localStorage.clear();
    }
  }, []);

  return (
      <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <CategorySideNavBar />
                  <div className='main-content'>
                    <Outlet />
                  </div>
                </>
            } >
              <Route index element={<Home/>}></Route>
              <Route path="/intro" element={<Intro/>}></Route>
              <Route path="/product/:productId" element={<ProductView/>}></Route>
              <Route path="/product-question/:productId" element={<ProductQuestionPage/>}></Route>
              <Route path="/products/:categoryId/:subCategoryId" element={<ProductListPage/>}></Route>
              <Route path="/search-products" element={<ProductSearchListPage/>}></Route>

              <Route path="/order" element={<BuyInfoFormPage/>}></Route>
              <Route path="/order/confirm" element={<OrderConfirmPage/>}></Route>

              <Route path="/my-page" element={<UserConfigPage/>}>
                <Route path="basic" element={<UserBasicConfig />}/>
                <Route path="basket" element={<BasketListPage/>}></Route>
                <Route path="delivery" element={<DeliveryConfig />}/>
                <Route path="delivery/add" element={<DeliveryFormPage />}/>
                <Route path="payment" element={<PaymentConfig />}/>
                <Route path="payment/add" element={<PaymentForm />}/>
                <Route path="buy" element={<BuyConfig />}/>
                <Route path="buy/review-write" element={<ReviewWriteForm/>}></Route>
              </Route>

              <Route path="/pay/ready" element={<PayReadyPage/>}></Route>
              <Route path="/pay/approve" element={<PayApprovePage/>}></Route>
              <Route path="/pay/success" element={<PaySuccessPage/>}></Route>
              <Route path="/pay/internal/approve" element={<InternalPayPage/>}></Route>

              <Route path="/find-id" element={<FindId/>}></Route>
              <Route path="/find-pw" element={<FindPw/>}></Route>
              <Route path="/sign-up" element={<SignUp/>}></Route>

              <Route path="/admin" element={<AdminPage />}>
                <Route path="category" element={<CategoryManagePage/>}></Route>
                <Route path="cs" element={<CustomServicePage/>}></Route>
                <Route path="partners" element={<PartnersListPage/>}></Route>
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
