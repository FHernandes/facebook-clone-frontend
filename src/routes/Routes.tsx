import React from 'react'
import { Routes as RDRoutes, Route } from 'react-router-dom';
import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

export default function Routes(): React.ReactElement {
    return (
        <RDRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </RDRoutes>
    )
}
