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
        </Routes>
    </BrowserRouter>
  );
}

export default App;
