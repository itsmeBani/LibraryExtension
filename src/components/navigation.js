import React from 'react';
import "../index.css"
import {Link} from "react-router-dom";

import Logo from "../images/ispsclettersgreen.png"
function Navigation(props) {
    return (
        <>
            <nav className="bg-amber-300 h-16 px-5 flex justify-between place-items-center shadow-2xl">
                <div className="h-full">

                <img src={Logo} alt="" className="h-full p-3"/>

                </div>
                <div>
                    <ul className="flex  gap-5">
                        <li><Link  to="/" className="font-bold font-sans text-slate-600 ">Home</Link></li>

                        <li><Link to="/about" className="font-bold font-sans text-slate-600">About ISPSC</Link></li>


                  <li className="group ">
                      <li><p className="font-bold font-sans text-slate-600 ">Be an ISPSCian</p></li>

                      <ul role="menu" data-popover="menu"  data-popover-placement="bottom"
                          className="absolute hidden group-hover:block z-10 w-auto  overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                          <Link to="/EnrollmentProcedure" role="menuitem"
                              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-black/10 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                              Enrollment Procedure
                          </Link>
                          <Link to="/AdmissionRequirements" role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-black/10 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                            Admission Requirements
                          </Link>

                      </ul>
                  </li>
                        <li><Link to="/contacts" className="font-bold font-sans text-slate-600">Contacts</Link></li>

                    </ul>
                </div>


            </nav>
        </>
    );
}

export default Navigation;