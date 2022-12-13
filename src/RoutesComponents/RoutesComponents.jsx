import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashborad from '../pages/Dashborad';
import Eleves from '../pages/Eleves';
import Promotion from '../pages/Promotion';
import Inscription from '../pages/Inscription';
import Login from '../pages/Login';
import Filiere from '../pages/Filiere';
import Etudiant from '../pages/Etudiant';
import Session from '../pages/Session';

function RoutesComponents() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/inscription' element={<Inscription />} />
                <Route path="/dashboard" element={<Dashborad />} />
                <Route path="/eleves" element={<Eleves />} />
                <Route path="/promotions" element={<Promotion />} />
                <Route path="/promotions/filieres" element={<Filiere />} />
                <Route path="/promotions/filieres/etudiants" element={<Etudiant />} />
                <Route path="/promotions/filieres/etudiants/sessions" element={<Session />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents