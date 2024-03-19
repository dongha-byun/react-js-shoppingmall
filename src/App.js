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
import Home from './component/page/Home';
import Intro from './component/page/Intro';
import ProductView from './component/product/view/ProductView';
import BasketListPage from './component/page/user/basket/BaskListPage';
import BuyInfoFormPage from './component/page/buy/BuyInfoFormPage';
import ProductQuestionPage from './component/product/question/ProductQuestionPage';
import DeliveryConfig from './component/page/user/config/DeliveryConfig';
import UserBasicConfig from './component/page/user/config/UserBasicConfig';
import PaymentConfig from './component/page/user/config/PaymentConfig';
import UserConfigPage from './component/page/user/config/UserConfigPage';
import CategorySideNavBar from './component/category/CategorySideNavBar';
import FindId from './component/page/login/form/FindId';
import FindPw from './component/page/login/form/FindPw';
import SignUp from './component/page/login/form/SignUp';
import ProvideManagePage from './component/provide/ProvideManagePage';
import ProvideProductList from './component/provide/ProvideProductList';
import ProvideProductAddForm from './component/provide/ProvideProductAddForm';
import BuyConfig from './component/page/user/config/BuyConfig';
import ReviewWriteForm from './component/page/user/config/buy/ReviewWriteForm';
import IncomeComponent from './component/provide/component/IncomeComponent';
import OrderComponent from './component/provide/component/OrderComponent';
import QnaManageComponent from './component/provide/component/QnaManageComponent';
import { getUserAttribute } from './api/component/login/login';
import AdminPage from './component/admin/AdminPage';
import CategoryManagePage from './component/admin/category/CategoryManagePage';
import CustomServicePage from './component/admin/cs/CustomServicePage';
import OrderConfirmPage from './component/page/buy/OrderConfirmPage';
import DeliveryFormPage from './component/delivery/DeliveryFormPage';
import PayReadyPage from './component/page/buy/pay/kakao/PayReadyPage';
import PayApprovePage from './component/page/buy/pay/kakao/PayApprovePage';
import PaySuccessPage from './component/page/buy/PaySuccessPage';
import PartnersListPage from './component/admin/approve/PartnersListPage';
import ProductListPage from './component/product/list/ProductListPage';
import ProductSearchListPage from './component/product/search/ProductSearchListPage';
import InternalPayPage from './component/page/buy/pay/internal/InternalPayPage';
import PaymentForm from './component/page/user/config/payment/PaymentForm';

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
              <Route path="/provide-manage" element={<ProvideManagePage/>}>
                <Route path="product" element={<ProvideProductList/>}></Route>
                <Route path="product/add" element={<ProvideProductAddForm/>}></Route>
                <Route path="income" element={<IncomeComponent/>}></Route>
                <Route path="order" element={<OrderComponent/>}></Route>
                <Route path="qna" element={<QnaManageComponent/>}></Route>
              </Route>

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
