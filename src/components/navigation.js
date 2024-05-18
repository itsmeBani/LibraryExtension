import React, {useEffect, useState} from 'react';

import {Link, useLocation} from "react-router-dom";

import Logo from "../images/ispsclettersgreen.png"

function Navigation(props) {
    const location = useLocation();


    const [isOpen, setIsOpen] = useState(false)
    const OpenMenu = () => {
        setIsOpen(true)


    }
    useEffect(() => {

        setIsOpen(false)

    }, [location])
    return (
        <>
            <nav
                className="sticky flex place-items-center w-full justify-between top-0 z-10 block w-full max-w-full px-4     max-[650px]:h-auto text-white bg-amber-300/80 rounded-none shadow-md h-16  backdrop-blur-2xl  ">
                <div className="h-full">

                    <img src={Logo} alt="" className="h-full p-3    max-[650px]:h-12"/>

                </div>
                <div className="">
                    <ul className="flex  gap-5 max-[530px]:hidden ">
                        <li><Link to="/"
                                  className="font-medium font-sans text-slate-600 hover:text-blue-500 ">Home</Link></li>

                        <li><Link to="/about" className="font-medium font-sans text-slate-600 hover:text-blue-500">About
                            ISPSC</Link></li>


                        <ol className="group ">
                            <li><p className="font-medium font-sans  z-20 text-slate-600 hover:text-blue-500">Be an
                                ISPSCian</p></li>

                            <ul role="menu" data-popover="menu" data-popover-placement="bottom"
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



                        </ol>


                        <li><Link to="/contacts"
                                  className="font-medium font-sans text-slate-600 hover:text-blue-500">Contacts</Link>
                        </li>

                    </ul>

                    <ul className="hidden max-[530px]:flex">

                        <button className="h-full " onClick={OpenMenu}>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"
                                 className="w-6 h-full">
                                <path fillRule="evenodd"
                                      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                                      clipRule="evenodd"/>
                            </svg>


                        </button>
                    </ul>
                </div>


            </nav>


            {isOpen &&
                <nav className="fixed  bg-black/70 h-full z-50  flex justify-end  w-full  overflow-hidden">


                    <div className="bg-white w-[60%] p-5 ">
                        <ul className="flex flex-col place-items-end  justify-end">

                            <svg onClick={() => {
                                setIsOpen(false)
                            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"
                                 className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </ul>

                        <ul className="flex flex-col gap-3 ">
                            <li><Link to="/"
                                      className="font-medium flex  place-items-end  gap-1 font-sans text-slate-600 hover:text-blue-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6">
                                    <path
                                        d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/>
                                    <path
                                        d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/>
                                </svg>
                                Home</Link></li>

                            <li><Link to="/about" className="font-medium flex  place-items-end  gap-1 font-sans text-slate-600 hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6">
                                    <path fillRule="evenodd"
                                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                                 About
                                ISPSC</Link></li>


                            <ol className="group ">
                                <li><p className="font-medium font-sans  z-20 text-slate-600 hover:text-blue-500 flex  place-items-end  gap-1 " >





                                    <svg  className="w-6 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                        <path d="m2.395,16.061c-.87.104-1.696.437-2.395.964V5C0,2.624,1.672.575,4,.1v15.9h-1c-.203,0-.406.02-.605.061Zm15.605-6.061c.692,0,1.359.097,2,.263v-5.263c0-2.761-2.239-5-5-5H6v16h4.263c.892-3.445,4.017-6,7.737-6Zm-8,8H3c-1.657,0-3,1.343-3,3s1.343,3,3,3h9.726c-1.667-1.467-2.726-3.61-2.726-6Zm14,0c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-5,1c0-.552-.448-1-1-1s-1,.448-1,1v2c0,.552.448,1,1,1s1-.448,1-1v-2Zm.5-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
                                    </svg>




                                    Be an
                                    ISPSCian</p></li>

                                <ul role="menu" data-popover="menu" data-popover-placement="bottom"
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
                            </ol>
                            <li><Link to="/contacts"
                                      className="font-medium font-sans flex  place-items-end  gap-1 text-slate-600 hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-5">
                                    <path fillRule="evenodd"
                                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                          clipRule="evenodd"/>
                                </svg>
                                Contacts</Link>
                            </li>

                        </ul>

                    </div>


                </nav>


            }


        </>
    );
}

export default Navigation;