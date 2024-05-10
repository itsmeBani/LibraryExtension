import React from 'react';
import Studentportal from "../images/graduation-cap.png";
import library from "../images/book.png";

function Quicklinks(props) {
    return (
        <>


            <div className="  px-5 w-[500px]  bg-[#F9FAFB] p-10 shadow-xl rounded-xl">
                <h1 className="bg-red-900/90 text-center p-3 text-md text-white font-medium rounded-sm">Announcements</h1>
                <p className="p-2 font-thin text-slate-800 ">⦿ 2023-11-08: Midterm Exam <br/> (November
                    8 to 11, 2023)</p>
                <p className="pb-2 px-2 font-thin text-slate-800">⦿ 2023-09-26: 1st Semester Enrollment
                    Schedule SY 2023-2024</p>
                <h1 className="bg-red-900/90 text-center p-3 text-md text-white font-medium rounded-sm mb-2">Quick
                    Links</h1>
                <p className=" contacs-p"><img src={Studentportal} alt="" className="h-5 opacity-60"/> <a
                    href="https://www.ispsctagudin.info/student-portal/"
                    className="text-blue-500 hover:text-blue-900">Student Portal</a></p>
                <p className=" contacs-p"><img src={library} alt="" className="h-5 opacity-60"/> <a
                    href="https://www.ispsctagudin.info/library/"
                    className="text-blue-500 hover:text-blue-900">eLibrary</a></p>
            </div>
        </>
    );
}

export default Quicklinks;