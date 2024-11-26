import React from 'react';

import Call from "../images/phone-call.png"
import Email from "../images/envelope.png"
import Home from "../images/home.png"
import Ispsc from "../images/3-Story Building-LHS.jpg"
import Messenger from "../images/facebook-messenger.png"
import Github from "../images/github.png"
import Quicklinks from "../components/quicklinks";

function Contacts(props) {


    const  styles = "contacs-p flex gap-2 place-items-center  "
    return (
        <>
            <div className="w-full   p-10 px-10 gap-10 max-[600px]:p-1  max-[600px]:flex-col flex ">

            <div>
                <Quicklinks/>
            </div>

                <div className=" grid grid-cols-2 grid-rows-2 w-full  max-[700px]:grid-cols-1   gap-3">

                    <div className="bg-[#F9FAFB] flex-col flex max-[600px]:p-4  max-[600px]:shadow-md   gap-2 p-10 shadow-xl  rounded-xl h-auto">
                        <h1 className="text-xl text-slate-700 font-thin opacity-70  mb-3 ">General Contact
                            Information</h1>
                        <p className={styles}><img src={Call} alt="" className="h-5 opacity-60"/> 077-674-1474</p>
                        <p className={styles}><img src={Email} alt="" className="h-5 opacity-60"/> <a
                            href="mailto:ispsctagudin@yahoo.com"
                            className="text-blue-500 hover:text-blue-900  truncate w-full">ispsctagudin@yahoo.com</a></p>
                        <p className={styles}><img src={Home} alt="" className="h-5 opacity-60"/> Quirino, Tagudin,
                            Ilocos Sur </p>


                    </div>
                    <div className="bg-[#F9FAFB] p-10 shadow-xl flex max-[600px]:p-4  max-[600px]:shadow-md  flex-col gap-2  rounded-xl h-auto ">
                        <h1 className="text-xl text-slate-800 opacity-70 font-thin mb-3 ">Office Of The President</h1>
                        <p className={styles + " truncate w-full"}><img src={Call} alt="" className="h-5 opacity-60"/> (077) 732-5512</p>
                        <p className={styles}><img src={Email} alt="" className="h-5 opacity-60"/> <a
                            href="mailto:ispsc_2705@yahoo.com"
                            className="text-blue-500 hover:text-blue-900  truncate w-full">ispsc_2705@yahoo.com</a></p>

                    </div>
                    <div className="bg-[#F9FAFB] p-10 shadow-xl  max-[600px]:p-4 flex-col flex   max-[600px]:shadow-md  gap-2  rounded-xl w-full ">
                        <h1 className="text-xl text-slate-800 opacity-70 font-thin mb-3 ">Registrar</h1>
                        <p className={styles}><img src={Call} alt="" className="h-5 opacity-60"/> 09306166132</p>
                        <p className={styles}><img src={Email} alt="" className="h-5 opacity-60"/> <a
                            href="mailto:registrarispsc@yahoo.com"
                            className="text-blue-500 hover:text-blue-900  truncate w-full ">registrarispsc@yahoo.com</a></p>
                        <p className={styles}><img src={Messenger} alt="" className="h-5 opacity-60"/> <a
                            href="https://www.messenger.com/t/1846888500" className="text-blue-500 hover:text-blue-900  truncate w-full">Liam
                            Pedro</a></p>

                    </div>
                    <div className="bg-[#F9FAFB] p-10 shadow-xl max-[600px]:p-4 max-[600px]:shadow-md flex-col flex  gap-2  rounded-xl  w-full ">
                        <h1 className="text-xl text-slate-800 opacity-70 font-thin mb-3 ">Developer</h1>
                        <p className={styles}><img src={Call} alt="" className="h-5  opacity-60"/>09107645918</p>
                        <p className={styles}><img src={Email} alt="" className="h-5 opacity-60"/> <a
                            href="mailto:ballesterosbaldwinnico13@gmail.com"
                            className="text-blue-500 hover:text-blue-900  truncate w-full ">ballesterosbaldwinnico13@gmail.com</a></p>

                    </div>
                </div>


            </div>
            <div className="p-10   max-[600px]:p-1   flex place-items-center  flex-col">

                <h1 className=" bg-red-900/90 text-center p-3 text-md text-white font-medium rounded-sm px-28 mb-5">
                    Google Maps </h1>
                <div className="flex gap-10  max-[600px]:gap-2  max-[600px]:flex-col   w-full">

                    <div className="h-auto w-full">

                        <img src={Ispsc} alt={""} className="w-full h-full max-[600px]:rounded-md  rounded-xl  "/>
                    </div>
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6418.985593780626!2d120.4420535755874!3d16.937521929863415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e6a477e86e37%3A0x4dbcd7fff796de95!2sUniversity%20of%20Ilocos%20Philippines-%20Tagudin%20Campus!5e0!3m2!1sen!2sph!4v1702321034201!5m2!1sen!2sph"
                            height="450" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className="rounded-xl max-[600px]:rounded-md  w-full"></iframe>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Contacts;


