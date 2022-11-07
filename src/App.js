import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// == pages == //
import Home from './component/page/Home';
import Intro from './component/page/Intro';
import ProductView from './component/product/view/ProductView';
import BasketListPage from './component/page/user/basket/BaskListPage';
import BuyInfoFormPage from './component/page/buy/BuyInfoFormPage';
import ProductQuestionPage from './component/product/question/ProductQuestionPage';
import ProductSearchListPage from './component/product/search/ProductSearchListPage';
import DeliveryConfig from './component/page/user/config/DeliveryConfig';
import UserBasicConfig from './component/page/user/config/UserBasicConfig';
import PaymentConfig from './component/page/user/config/PaymentConfig';
import UserConfigPage from './component/page/user/config/UserConfigPage';
import CategorySideNavBar from './component/category/CategorySideNavBar';
import FindId from './component/page/login/form/FindId';
import FindPw from './component/page/login/form/FindPw';
import SignUp from './component/page/login/form/SignUp';
import ProvideManagePage from './component/provide/ProvideManagePage';
import DeliveryForm from './component/delivery/DeliveryForm';
import ProvideProductList from './component/provide/ProvideProductList';
import ProvideProductAddForm from './component/provide/ProvideProductAddForm';

function App() {
  return (
      <BrowserRouter>
          <CategorySideNavBar />
          <div className='main-content'>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="/intro" element={<Intro/>}></Route>
                <Route path="/product-view" element={<ProductView/>}></Route>
                <Route path="/my-basket" element={<BasketListPage/>}></Route>
                <Route path="/buy" element={<BuyInfoFormPage/>}></Route>
                <Route path="/product-question" element={<ProductQuestionPage/>}></Route>
                <Route path="/product-list/:categoryId" element={<ProductSearchListPage/>}></Route>
                {/* <Route path="/basic-config" element={<UserBasicConfig/>}></Route>
                <Route path="/delivery-config" element={<DeliveryConfig/>}></Route>
                <Route path="/payment-config" element={<PaymentConfig/>}></Route> */}
                <Route path="/my-page" element={<UserConfigPage/>}>
                  <Route path="basic" element={<UserBasicConfig/>}></Route>
                  <Route path="delivery" element={<DeliveryConfig/>}></Route>
                  <Route path="delivery/add" element={<DeliveryForm />}></Route>
                  <Route path="payment" element={<PaymentConfig/>}></Route>
                </Route>
                <Route path="/find-id" element={<FindId/>}></Route>
                <Route path="/find-pw" element={<FindPw/>}></Route>
                <Route path="/sign-up" element={<SignUp/>}></Route>
                <Route path="/provide-manage" element={<ProvideManagePage/>}>
                  <Route path=":categoryId" element={<ProvideProductList/>}></Route>
                  <Route path="add" element={<ProvideProductAddForm/>}></Route>
                </Route>
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
