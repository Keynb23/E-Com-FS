import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './store';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';


import { Landing } from './pages/Landing/Landing';
import NavBar from './components/navbar/NavBar';
import Products from './pages/products/Products';
import Pricing from './pages/products/pricing';
import Contact from './pages/home/contact';
import Register from './pages/register/register';
import Profile from './pages/profile/Profile';
import Login from './components/login/Login';

function App() {
  const client =  new QueryClient();
  return (
  
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login onLogin={() => console.log('User logged in')} />} />
        </Routes>
      </div>
    </Provider>
  </QueryClientProvider>
  );
}

export default App;