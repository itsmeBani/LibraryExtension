import React from 'react';
import "../index.css"


function Header() {
    return (
        <header className="h-40   bg-red-900/90   flex  w-full p-3 gap-10  max-[650px]:gap-3 ">
            <div className="h-full flex place-items-center ">
                <img src="https://ispsc.edu.ph/file-manager/images/ispsc_logo_small.png" alt="" className="h-full max-[650px]:h-auto  max-[650px]:text-sm"/>
            </div>


            <div  className="flex   justify-center flex-col">
                <p className="header-text pb-3 max-[650px]:text-sm max-[650px]:pb-2">Republic Of The Philippines</p>

                <p className="text-2xl max-[650px]:text-[15px]  text-slate-800 leading-5 font-medium  italic overline text-white leading-3">ILOCOS SUR POLYTECHNIC STATE COLLEGE</p>
                <p className="header-text">Ilocus Sur, Philippines</p>
            </div>


        </header>
    );
}

export default Header;