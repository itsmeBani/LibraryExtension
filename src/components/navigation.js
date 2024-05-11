import React from 'react';

import {Link} from "react-router-dom";

import Logo from "../images/ispsclettersgreen.png"
function Navigation(props) {
    return (
        <>
            <nav   className="sticky flex place-items-center w-full justify-between top-0 z-10 block w-full max-w-full px-4  text-white bg-amber-300/80 rounded-none shadow-md h-16  backdrop-blur-2xl  ">
                <div className="h-full">

                <img src={Logo} alt="" className="h-full p-3"/>

                </div>
                <div className="">
                    <ul className="flex  gap-5 max-[530px]:hidden">
                        <li><Link  to="/" className="font-medium font-sans text-slate-600 hover:text-blue-500 ">Home</Link></li>

                        <li><Link to="/about" className="font-medium font-sans text-slate-600 hover:text-blue-500">About ISPSC</Link></li>


                  <li className="group ">
                      <li><p className="font-medium font-sans  z-20 text-slate-600 hover:text-blue-500">Be an ISPSCian</p></li>

                      <ul role="menu" data-popover="menu"  data-popover-placement="bottom"
                          className="absolute text-slate-700 hidden group-hover:block z-10 w-auto  overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                          <Link to="/EnrollmentProcedure" role="menuitem"
                              className="block hover:text-blue-500 w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-black/10 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                              Enrollment Procedure
                          </Link>
                          <Link to="/AdmissionRequirements" role="menuitem"
                                className="block hover:text-blue-500 w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-black/10 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                            Admission Requirements
                          </Link>

                      </ul>
                  </li>
                        <li><Link to="/contacts" className="font-medium font-sans text-slate-600 hover:text-blue-500">Contacts</Link></li>

                    </ul>
                </div>


            </nav>
        </>
    );
}

export default Navigation;