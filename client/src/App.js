import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


const MyContext = createContext();
function App() {

  const [countryList, setcountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true)
  const [isOpenProductModel, setisOpenProductModel] = useState(false)
  const [isLogin,setIsLogin] = useState(false)
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setcountryList(res.data.data)
      console.log(res.data.data)
    })
  }
  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModel,
    setisOpenProductModel,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/cat/:id" exact={true} element={<Listing />}></Route>
          <Route path="/product/:id" exact={true} element={<ProductDetails />}></Route>
          <Route path="/cart" exact={true} element={<Cart />}></Route>
          <Route path="/SignIn" exact={true} element={<SignIn />}></Route>
          <Route path="/SignUp" exact={true} element={<SignUp />}></Route>

        </Routes>
        {
          isHeaderFooterShow === true && <Footer />
        }
        {
          isOpenProductModel && <ProductModal />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext }
