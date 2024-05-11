import React from 'react';
import "../index.css"
function Footer() {
    return (
        <footer className=" bg-red-900/90 flex p-5 justify-end w-full max-[400px]:flex-col max-[400px]:flex-col-reverse max-[400px]:place-items-center flex gap-10">
            <div className="place-items-center justify-center gap-10 max-[400px]:gap-2 flex h-full max-[400px]:flex-col">
                <ul className="flex flex-col  h-full">
                    <h1 className="text-2xl    font-medium  italic  text-amber-300 "> Campuses</h1>
                    <l1><p className="footer-text"> ⦿ Sta. Maria</p></l1>
                    <l1><p className="footer-text"> ⦿ Santiago</p></l1>
                    <l1><p className="footer-text"> ⦿ Narvacan</p></l1>
                    <l1><p className="footer-text"> ⦿ Tagudin</p></l1>
                    <l1><p className="footer-text"> ⦿ Candon City</p></l1>
                    <l1><p className="footer-text"> ⦿ Cervantes</p></l1>
                </ul>
                <ul className="flex flex-col justify-center max-[400px]:place-items-center h-full">
                    <h1 className="text-2xl  font-medium  italic   text-amber-300 max-[400px]:text-center">Office Of The President</h1>
                    <l1><p className="footer-text">⦿ Telefax: (077) 732-5512</p></l1>
                    <l1> <p className="footer-text">⦿ Email: Isps_2705@Yahoo.Com</p></l1>
                    <h1 className="text-2xl    font-medium  italic  text-amber-300 ">Registrar</h1>
                    <l1><p className="footer-text">  ⦿ Tel. No.: (077) 604-1422</p></l1>
                    <l1> <p className="footer-text"> ⦿ Email: Registrarispsc@Yahoo.Com</p></l1>
                    <l1> <p className="footer-text"> ⦿ FB: Registrar's Office Page</p></l1>
                </ul>
            </div>
            <div className="h-full">
                <img alt="" src="https://ispsc.edu.ph/file-manager/images/ispsc_logo_small.png" className="h-full"/>
            </div>
        </footer>
    );
}

export default Footer;