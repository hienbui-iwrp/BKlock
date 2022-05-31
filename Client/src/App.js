import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage";
import CartPage from './page/cartPage';
import ContactPage from './page/contactPage';
import DetailPage from './page/detailPage';
import IntroPage from './page/introPage';
import NewsPage from './page/newsPage';
import SignupPage from './page/signupPage';
import SigninPage from './page/signinPage';
import ProductPage from './page/productPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cart" element={<CartPage />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/detail" element={<DetailPage />} exact />
        <Route path="/introduction" element={<IntroPage />} exact />
        <Route path="/news" element={<NewsPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/signin" element={<SignupPage />} exact />
        <Route path="/product" element={<ProductPage />} exact />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
