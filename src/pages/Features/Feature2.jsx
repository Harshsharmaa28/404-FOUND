// import React from "react";
// import { featureBgImg, featureNotesImg } from "../../utils/Constant";

// const Feature2 = () => {
//   return (
//     <div className="">
//       <div class="text-center py-2">
//         <h1 class="inline-block capitalize text-4xl px-3 text-[#002F46] font-bold ">
//           GET ANSWERS OF
//         </h1>
//         <div class="inline-block rounded-2xl m-auto px-2 py-1 w-fit bg-[#20C93B]">
//           <h1 class="inline-block text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl px-3">
//             FAQs
//           </h1>
//         </div>
//         <span className="  px-2 text-4xl text-[#002F46] font-bold ">
//           TO USE
//         </span>
//       </div>
//       <div className=" text-center text-4xl text-[#002F46] font-bold">
//         And Useful for the Future
//       </div>
//       <div class="relative">
//         <div class="bg-cover px-10 py-5 relative">
//           <img src={featureBgImg} alt="featureBgImg" />

//           <div class="absolute inset-0 mx-20  flex justify-evenly items-center">
//             <div class="relative z-10 w-2/3 h-1/3  ">
//               <h1 className="  text-2xl md:text-4xl font-extrabold ">
//                 OUR <span className=" text-[#8F0000] ">SPECIAL</span> PROGRAM
//               </h1>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
//               excepturi deserunt expedita architecto neque maxime quisquam sed
//               asperiores. uidem ratione expedita?
//               <div className=" text-xl sm:text-2xl  font-bold py-4 ">
//                 <h1>Covers Every IIT, NIT, IIIT & GFTI ✅ </h1>
//                 <h1>Almost every Branch CSE, ECE, EE, ME, CE and so on ✅</h1>
//                 <h1>Ready for 1st, 2nd, 3rd & 4th Year ✅</h1>
//               </div>
//               <button
//                 className=" bg-white rounded-3xl px-4 py-1   "
//                 style={{
//                   "box-shadow": "6px 6px 0px 0px #000000",
//                   border: "2px solid #000000",
//                 }}
//               >
//                 Go To Your Notes
//               </button>
//             </div>

//             <div
//               class="relative z-10 w-[200px]  h-[250px] md:w-[300px]  md:h-[300px] p-0
//              "
//             >
//               <img src={featureNotesImg} alt="featureNotesImg" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className=" bg-cover px-10 py-5  ">
//         <img src={featureBgImg} alt="featureBgImg" />
//         <div className=" flex justify-between  ">
//           <div>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
//             excepturi deserunt expedita architecto neque maxime quisquam sed
//             asperiores. Voluptates numquam amet voluptate excepturi error eum
//             deserunt, quo iure totam laborum quisquam officiis commodi
//             blanditiis id rerum, veniam autem ut et! Quam, quisquam labore?
//             Facilis suscipit quas voluptatem quidem ratione expedita?
//           </div>
//           <div>
//             <img src={featureNotesImg} alt="featureNotesImg" />
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Feature2;

import React from "react";
import { featureBgImg, featureNotesImg } from "../../utils/Constant";

const Feature2 = () => {
  return (
    <div className="">
      <div class="text-center py-2">
        <h1 class="inline-block capitalize text-4xl px-3 text-[#002F46] font-bold ">
          GET ANSWERS OF
        </h1>
        <div class="inline-block rounded-2xl m-auto px-2 py-1 w-fit bg-[#20C93B]">
          <h1 class="inline-block text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl px-3">
            FAQs
          </h1>
        </div>
        <span className="  px-2 text-4xl text-[#002F46] font-bold ">
          TO USE
        </span>
      </div>
      <div className=" text-center text-4xl text-[#002F46] font-bold">
        And Useful for the Future
      </div>
      <div class="relative">
        <div class="bg-cover px-10 py-5 relative">
          <img src={featureBgImg} alt="featureBgImg" />

          <div class="absolute inset-0 mx-20  flex justify-evenly items-center">
            <div class="relative z-10 w-2/3 h-1/3   ">
              <h1 className="  text-2xl md:text-4xl font-extrabold ">
                OUR <span className=" text-[#8F0000] ">SPECIAL</span> PROGRAM
              </h1>
              <div className=" hidden md:inline ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                excepturi deserunt expedita architecto neque maxime quisquam sed
                asperiores. uidem ratione expedita?
              </div>
              <div className="  sm:text-2xl  md:font-bold py-1 md:py-4 ">
                <h1>Covers Every IIT, NIT, IIIT & GFTI ✅ </h1>
                <h1 className="hidden md:inline">
                  Almost every Branch CSE, ECE, EE, ME, CE and so on ✅
                </h1>
                <h1>Ready for 1st, 2nd, 3rd & 4th Year ✅</h1>
              </div>
              <button
                className=" bg-white rounded-3xl px-4 py-1   "
                style={{
                  "box-shadow": "6px 6px 0px 0px #000000",
                  border: "2px solid #000000",
                }}
              >
                Go To Your Notes
              </button>
            </div>

            {/* Hide the image for small screens */}
            <div
              class="hidden md:block relative z-10 w-[200px]  h-[250px] md:w-[300px]  md:h-[300px] p-0  
             "
            >
              <img src={featureNotesImg} alt="featureNotesImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
