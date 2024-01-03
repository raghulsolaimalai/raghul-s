import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from "./footer/footer";
import Navbar from './Navbar/Navbar';
import Product from './Product/Product';
import Login from './login/Login';
import Signup from './Signup/Signup'
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
// import ReturnAndRefund from './ReturnAndRefund/ReturnAndRefund';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
// import ShippingPolicy from './ShippingPolicy/ShippingPolicy';
import FAQ from './FAQ/FAQ';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Routes>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
      <Route exact path='/TermsAndConditions' element={<TermsAndConditions/>}/>
      {/* <Route exact path='/ReturnAndRefund' element={<ReturnAndRefund/>}/> */}
      <Route exact path='/AboutUs' element={<AboutUs/>}/>
      <Route exact path='/ContactUs' element={<ContactUs/>}/>
      {/* <Route exact path='/ShippingPolicy' element={<ShippingPolicy/>}/> */}
      <Route exact path='/FAQ' element={<FAQ/>}/>
      <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route index element={<Product/>} />
</Routes>
      </Router>
      <Footer/>
      </div>
   
  );
}

export default App;