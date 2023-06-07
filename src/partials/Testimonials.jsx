import React, { useState, useRef, useEffect } from "react";
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image-01.jpg';
// import TestimonialImage01 from '../images/testimonial-01.jpg';
// import TestimonialImage02 from '../images/testimonial-02.jpg';
// import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]); 
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div>
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                className="mx-auto"
                src={HeroImage}
                width="1024"
                height="504"
                alt="Hero"
              />
              <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="78.169%"
                      y1="9.507%"
                      x2="24.434%"
                      y2="90.469%"
                      id="a"
                    >
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a>
            </div>
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <video
                  ref={video}
                  className="absolute w-full h-full"
                  width="1920"
                  height="1080"
                  loop
                  autoPlay
                  controls
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
      </div>
    </section>
//     <section>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20 border-t border-gray-800">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h2 className="h2 mb-4">Don't take our word for it</h2>
//             <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
//           </div>

//           {/* Testimonials */}
//           <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

//             {/* 1st testimonial */}
//             <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
//               <div>
//                 <div className="relative inline-flex flex-col mb-4">
//                   {/* <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" /> */}
//                     <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
//                     </svg>
//                         </div>
//                 </div>
//                 <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
//                 <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                   <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
//                 </div>
//               </div>

//               {/* 2nd testimonial */}
//               <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
//                 <div>
//                   <div className="relative inline-flex flex-col mb-4">
//                     {/* <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" /> */}
//                       <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
//                       </svg>
//                         </div>
//                   </div>
//                   <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
//                   <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                     <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
//                   </div>
//                 </div>

//                 {/* 3rd testimonial */}
//                 <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
//                   <div>
//                     <div className="relative inline-flex flex-col mb-4">
//                       {/* <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" /> */}
//                         <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
//                         </svg>
//                         </div>
//                     </div>
//                     <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
//                     <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                       <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
//                     </div>
//                   </div>

//                 </div>

//               </div>
//             </div>
// </section>


  );
}

export default Testimonials;
