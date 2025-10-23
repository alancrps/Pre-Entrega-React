import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import '../src/App.css'

function App() {
	return (
		<BrowserRouter>
			{/* Header */}
			<Header />
			{/* Rutas */}
			
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/products" element={<Products />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/profile/:id" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
				<Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>
				<Route path="*" element={<NotFound/>}></Route>
			</Routes>
			{/* Footer */}
			
			<Footer />
		</BrowserRouter>
	);
}

export default App;
