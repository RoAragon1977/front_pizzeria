import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './page/HomePage';
import AdministrationPage from './page/AdministrationPage';
import SignupPage from './page/SignupPage';
import RecoverPasswordPage from './page/RecoverPasswordPage';
import AboutUsPage from './page/AboutUsPage';
import Error404Page from './page/Error404Page';
import CustonNavbar from './components/navbar';
import Footer from './components/footer';

import './App.css'

function App() {
  return (
      <BrowserRouter>
      <CustonNavbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='administration' element={<AdministrationPage />} />
          <Route path='signup' element={<SignupPage />}/>
          <Route path='recoverPassword' element={<RecoverPasswordPage />} />
          <Route path='aboutUs' element={<AboutUsPage />} />
          <Route path='*' element={<Error404Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default App
