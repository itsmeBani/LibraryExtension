import React, {useEffect, useState} from 'react';
import ISPSC from "../images/wc.jpg"
import b from "../images/3-Story Building-LHS.jpg"
import Quicklinks from "../components/quicklinks";

function Home(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [ISPSC, b];

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(()=>{

        const interval = setTimeout(() => {
            const newIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(newIndex);
        }, 5000);


        return () => clearTimeout(interval);
    },[currentIndex,images.length])


    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };
    return (
        <>


            <div
                className="w-full max-[624px]:p-0 p-0 flex flex-row gap-5 max-[924px]:flex-col max-[924px]:flex-col-reverse">

                <div className=" h-full w-full">

                    <div className="h-[90%]  relative  ">
                        <div className="absolute bg-gradient-to-l from-white opacity-60 h-full w-full">

                        </div>
                        <img src={images[currentIndex]} alt="" className="w-full aspect-[5/2]"/>
                        <div className="flex p-2 justify-end gap-2 absolute bottom-0 right-2 ">


                            <button type="button" onClick={prevSlide}
                                    className=" top-0 start-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
                            >
        <span
            className="inline-flex items-center  justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
        </span>
                            </button>


                            <button type="button" onClick={nextSlide}
                                    className=" top-0 end-0  flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
                            >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
                            </button>
                        </div>


                    </div>


                </div>


            </div>

            <div className="px-20  max-[800px]:px-2 max-[800px]:pb-3">
                <h1 className="text-2xl  max-[900px]:text-xs font-bold text-slate-900 text-center pt-6  opacity-90 tracking ">Welcome
                    to <span className="text-yellow-400 opacity-100">Ilocos Sur Polytechnic State College!</span> Get
                    ready for an exciting journey of learning, innovation, and endless opportunities. Let's unlock your
                    potential together</h1>
            </div>
            <div className="flex gap-5 flex  max-[700px]:p-2 max-[700px]:flex-col p-10">
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=335&amp;href=https%3A%2F%2Fwww.facebook.com%2Fssctagudin%2Fvideos%2F1366186200979346%2F&amp;show_text=false&amp;width=560&amp;t=0"
                    scrolling="no" frameBorder="0" allowFullScreen="true"
                    className="w-full rounded-lg  max-[700px]:h-[200px] max-[700px]:w-auto  h-[400px]"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe className="w-full h-[400px] max-[700px]:h-[300px] max-[700px]:w-auto rounded-lg"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F6BF26&ctz=Asia%2FManila&showTz=1&showTitle=0&showCalendars=1&showTabs=1&showPrint=1&src=ZmFicm9qaW92YW5pMUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTExMTYyMjkxMTkzNjk3NDcwMTk1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb204NmY2N2E2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAzMjA3MTE0NjYyMjEyNzkxODkyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb21hMzkxNDAzNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb205ZmQ5NzI4NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb20wYWE5MzY5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTA1NDY1NTQ3ODUwNTk2NTEzNTgxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA5MjY0MTU2ODczMjk1MzEyODg0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEzMjkwMDgxODgzMTgzNjIyMTE0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE2OTc3OTU5Njk3NTcyODEwNTc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE4MzkxMjc4MDA4MDY2MTA0NjA3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19jbGFzc3Jvb21iN2VmZGNhMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTE3ODAxMTMwODI4ODMyNDc0MTIzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTE3MjI3ODA3Nzc0MDc3MjQ5NDkwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTEzNjMxNTg4NDc1NTI0NDIzNDk4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%23137333&color=%23137333&color=%230047a8&color=%23202124&color=%23007b83&color=%237627bb&color=%23007b83&color=%230B8043&color=%23007b83&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%230047a8&color=%23007b83&color=%230047a8"
                        frameBorder="0" scrolling="no"></iframe>
            </div>
            <div className="w-full  p-5 flex flex-col  gap-5 max-[700px]:p-1">


                <div className="w-full p-5 flex gap-5  max-[650px]:flex-col max-[650px]:p-0">
                    <Quicklinks/>
                    <div className="w-full h-auto  flex flex-col place-items-center max-[700px]:p-1 p-5 ">

                        <h1 className="text-2xl font-bold text-slate-700  opacity-70 tracking -wide max-[650px]:text-center ">Welcome
                            to Ilocos
                            Sur Polytechnic State College</h1>

                        <p className="font-semibold text-slate-700 tracking-wide opacity-70 text-xl mb-10">Departments</p>

                        <div className="grid grid-cols- w-full h-auto gap-2 grid-cols-3  ">
                            <div
                                className="department-card  h-full row-start-1 col-start-1 max-[700px]:col-end-4 max-[700px]:p-4">
                                <h1 className="text-xl font-bold text-slate-700  opacity-70 tracking-wide"> CBME </h1>
                                <p className="font-thin">The College of Business and Management Education</p>
                            </div>
                            <div
                                className="department-card   h-full  row-start-1 max-[700px]:col-start-1 col-start-2 max-[700px]:p-4 max-[700px]:row-start-2 max-[700px]:col-end-4  ">

                                <h1 className="text-xl font-bold text-slate-700  opacity-70 tracking-wide"> CAS </h1>
                                <p className="font-thin">The College of Arts and Sciences</p>

                            </div>
                            <div
                                className="department-card  h-full  max-[700px]:col-start-1 col-start-3 row-start-1 max-[700px]:p-4 max-[700px]:row-start-3  max-[700px]:col-end-4 ">
                                <h1 className="text-xl font-bold text-slate-700  opacity-70 tracking-wide"> CTE </h1>
                                <p className="font-thin text-slate-700">College of Teacher Education</p>
                            </div>


                        </div>


                    </div>

                </div>


            </div>
        </>
    );
}

export default Home;