import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Portfolio } from "../components/Portfolio";
import { Servicios } from "../components/Servicios";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export default function MisRutas() {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION */}
            <HeaderNav />
            {/* CONTENIDO CENTRAL */}
            <section className='content'>
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            {/* FOOTER */}
            <Footer />
        </BrowserRouter >
    )
}
