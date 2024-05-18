import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Contacts from "../pages/contacts";
import  Enrollment from "../pages/EnrollmentProcedure";
import AdmissionRequirements from "../pages/AdmissionRequirements";

function Section() {
    return (

        <section className="flex flex-col w-full">

        <Routes>
            <Route index path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/EnrollmentProcedure" element={<Enrollment/>}></Route>
            <Route path="/AdmissionRequirements" element={<AdmissionRequirements/>}></Route>

        </Routes>

        </section>
    );
}

export default Section;