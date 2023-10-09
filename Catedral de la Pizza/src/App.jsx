import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './page/HomePage';
import AdministrationPage from './page/AdministrationPage';
import SignupPage from './page/SignupPage';
import RecoverPasswordPage from './page/RecoverPasswordPage';
import AboutUsPage from './page/AboutUsPage';
import Error404Page from './page/Error404Page';

import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='administation' element={<AdministrationPage />} />
          <Route path='signup' element={<SignupPage />}/>
          <Route path='recoverPassword' element={<RecoverPasswordPage />} />
          <Route path='aboutUs' element={<AboutUsPage />} />
          <Route path='*' element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
