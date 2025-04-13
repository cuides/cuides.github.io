import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import CookieConsent from './components/footer/CookieConsent';
import Layout from './components/Layout';

import Home from './components/Home';
import Contact from './components/Contact';
import Ayuda from './components/Ayuda';
import Terms from './components/footer/Términos de Uso';
import Privacy from './components/footer/Política de Privacidad';

import SignIn from './components/firebase/SignIn';
import SignUp from './components/firebase/SignUp';
import ForgotPassword from './components/firebase/ForgotPassword';
import Redirect from './components/firebase/Redirect';

import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const lazyLoadComponent = (componentPath) =>
        React.lazy(() => import(/* @vite-ignore */ `.${componentPath}`));

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Router>
                    <Routes>
                        {/* Rutas públicas fuera del layout */}
                        <Route path='/user/*' element={<Redirect url="/" />} />
                        <Route path='/login' element={<SignIn />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='/forgot-password' element={<ForgotPassword />} />

                        {/* Layout envolvente */}
                        <Route element={<Layout />}>
                            <Route path='/' element={<Home />} />
                            <Route path='/contacto' element={<Contact />} />
                            <Route path='/ayuda' element={<Ayuda />} />
                            <Route path='/terms' element={<Terms />} />
                            <Route path='/privacy' element={<Privacy />} />
                        </Route>
                    </Routes>
                    <CookieConsent />
                </Router>
            </Box>
        </>
    );
};

export default App;
