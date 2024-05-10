import React from 'react';
import Quicklinks from "../components/quicklinks";

function About(props) {




    return (
        <>
        <div className="w-full h-auto   p-10 px-10 gap-10  flex ">
            <Quicklinks/>
            <div className="w-full  flex ">
                <Card title="BRIEF HISTORY" description="  Tagudin Campus is the seat of governance in the South Cluster. It was known formerly as the
                        Tagudin General Comprehensive High School established which started as the Tagudin High School
                        and became a national high school by virtue of RA 4447 which was signed into law in June 19,
                        1965. After its integration into ISPSC, it became the College of Arts and Sciences. Today it
                        houses the College of Teacher Education, the College of Business and Hospitality Management, the
                        College of Arts and Sciences, and the College of Information Technology"/>


            </div>



        </div>

            <div className="w-full h-auto    px-10 gap-10  flex flex-col">
                     <div className=" w-full   h-full gap-5 flex h-auto">


                         <Card  title="VISION" description="A vibrant and nurturing Polytechnic Service College for transforming lives and communities"/>
                         <Card title="MISSION" description="  To improve the lives of people and communities through quality instruction, innovations, productivity, initiatives, environment and industry-feasible technologies, resource mobilization and transformational outreach programs and services."/>




                     </div>

                <div className=" w-full pb-10  h-full gap-5 flex h-auto">

                    <div className="w-full px-10 py-20  shadow-xl rounded-xl">
                        <h1 className="text-xl text-slate-800 opacity-70 font-bold mb-3">Goals and Objectives</h1>
                        <p className="font-thin leading-7 w-full">
                            ⦿ To make the college responsive and relevant to the individual and social needs for optimum human development.
                        </p>


                        <p className="font-thin leading-7 w-full">⦿ To offer priority programs in tourism, teacher education, agriculture fishery, agro-forestry, trades, business industry, and Information technology which will generate knowledge base to educate the people and communities.</p>
                        <p className="font-thin leading-7 w-full">⦿ To conduct a wide-range of research and extension programs to provide quality training and technologies for inclusive growth.</p>
                        <p className="font-thin leading-7 w-full">⦿ To implement government programs and thrusts in the context of regional and national development for poverty alleviation.</p>
                            <p className="font-thin leading-7 w-full">⦿ To prepare and develop highly productive and employable professionals, “glocal” (global and local) technopreneurs who are morally-crafted and environmentally-oriented for coping globalization standards.</p>



                    </div>

                    <div className="w-full px-10 py-20  shadow-xl rounded-xl">
                        <h1 className="text-xl text-slate-800 opacity-70 font-bold mb-3">Core Values</h1>
                        <p className="font-thin leading-7 py-1 w-full"> <span className="text-amber-300 font-bold text-2xl p-1 mt-2">P</span>roductivity - The delivery of quality programs in instruction, research, extension, production, and development of responsive, proactive professionals and graduates and professing determination and hard work in the system.</p>
                        <p className="font-thin leading-7 py-1 w-full"> <span className="text-amber-300 font-bold text-2xl p-1 mt-2">R</span>esiliency - Refers to the renewal and motivational strategies, looking at the bright side of academic life and cultivating positive attitudes amidst failures and adversities.</p>
                        <p className="font-thin leading-7 py-1 w-full"> <span className="text-amber-300 font-bold text-2xl p-1 mt-2">A</span>ccountability - Means the responsibility, answerability, transparency, impartially, decisiveness, and delegation of work roles and streamlining of functions.</p>
                        <p className="font-thin leading-7 py-1 w-full"> <span className="text-amber-300 font-bold text-2xl p-1 mt-2">I</span>ngenuity - Refers to prudent use of resources, prudence in spending, cost-cutting measures, and deciding the best possible action considering circumstances.</p>
                        <p className="font-thin leading-7 py-1 w-full"> <span className="text-amber-300 font-bold text-2xl p-1 mt-2">S</span>ynergy - Pertains to teamwork, collaboration, orchestration, subordination, and of all partner agencies, sponsors, and stakeholders, parents, alumni, and communities.</p>
                        <p className="font-thin leading-7 py-1 w-full"> <span className="text-amber-300 font-bold text-2xl p-1 mt-2">E</span>xcellence - Refers to global orientation, borderless perspective, equal opportunities, empowerment, and transformation, multi-tasking and leading by example.</p>
                    </div>



                </div>

            </div>

            </>

    );
}

export default About;



function Card(props) {

    const {title,description}=props
    return (

        <div className="w-full px-10 py-20  shadow-xl rounded-xl">
            <h1 className="text-xl text-slate-800 opacity-70 font-bold mb-3">{title}</h1>
            <p className="font-thin leading-7 w-full">
                {description}</p>
        </div>

    )
}