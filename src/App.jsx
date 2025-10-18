import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RutaProtegida from './components/RutaProtegida';
import Administracion from './pages/Administracion';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';

function App() {
	return (
		<BrowserRouter>
			{/* Header */}
			<Header />
			{/* Rutas */}
			<Routes>
				<Route path="/" element={<Inicio />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/productos" element={<Productos />}></Route>
				<Route path="/contacto" element={<Contacto />}></Route>
				<Route path="/perfil/:id" element={<RutaProtegida><Perfil/></RutaProtegida>}></Route>
				<Route path="/admin" element={<RutaProtegida><Administracion/></RutaProtegida>}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			{/* Footer */}
			<Footer />
		</BrowserRouter>
	);
}

export default App;
