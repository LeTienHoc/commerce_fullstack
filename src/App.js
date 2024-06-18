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


const MyContext = createContext();
function App() {

  const [countryList, setcountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setcountryList(res.data.data)
      console.log(res.data.data)
    })
  }
  const [isOpenProductModel, setisOpenProductModel] = useState(false)
  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModel,
    setisOpenProductModel
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/cat/:id" exact={true} element={<Listing />}></Route>
        </Routes>
        <Footer />
        {
          isOpenProductModel && <ProductModal />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext }
