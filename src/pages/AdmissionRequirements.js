import React from 'react';
import {ADMISSION_REQUIREMENTS} from "../admissionData/AdmissionData";

function AdmissionRequirements(props){

    return (
        <div className=" flex flex-col gap-7 pb-10  pt-10" id="adm">
            <h1 className=" opacity-70 text-shadow-md font-extrabold text-5xl sm:text-5xl lg:text-5xl tracking-tight text-center text-pretty "  id='ar'>Admission
                Requirements
            </h1>

            <div className="grid grid-cols-3  max-md:grid-cols-1 place-items-center px-36 gap-5  max-[733px]:px-3   ">
                {          ADMISSION_REQUIREMENTS.map((data,i) =>
                    (
                        <div className="shadow-xl w-full h-full relative rounded-xl p-5" >
                            <h1 className=" font-extrabold  text-slate-800 tracking-[0.01rem] leading-6 opacity-70 text-lg pb-2">{data.title}</h1>
                            {data.requirments.map((data)=>(
                                <p className=" text-slate-600 ">{data}</p>
                            ))
                            }
                            <div className="absolute top-0 left-0 w-2 bg-red-900 h-full opacity-60 rounded-l-xl">
                            </div>
                        </div>
                    )
                )

                }


            </div>


        </div>
    );
}

export default AdmissionRequirements;