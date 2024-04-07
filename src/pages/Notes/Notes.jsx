import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { profileLocked } from '../../utils/Constant'

const Notes = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <img className=' px-4 ' src={profileLocked} alt="error" />
                    <span className=' absolute -mt-[4.4rem] ml-[42rem]'>Sign To Continue..</span>
                </div>
                <div className=' flex justify-center py-6  gap-4'>
                    <span className=' text-3xl'>Your</span>
                    <span className=' rounded-full  text-3xl bg-[#20C95A] px-4 py-2'>Notes</span>
                    <input className=' w-30 border border-black' type="text" />
                </div>
                <div>

                    <div className=' font-bold text-3xl flex  gap-5 justify-between px-28'>
                        <div className='py-2 border border-dashed  border-black text-center rounded-lg w-[25rem] h-auto bg-[#F3F3F3]'>Branch</div>
                        <div className='py-2 border border-dashed  border-black rounded-lg  text-center w-[60rem] h-auto bg-[#F3F3F3]'>Subject</div>
                    </div>
                    <div className=' gap-5 h-screen py-4 flex px-28 justify-between'>
                        <div className='flex flex-col gap-4 py-2 border border-dashed  border-black rounded-lg w-[25rem] h-auto bg-[#F3F3F3]'>
                            <div className=' ml-5'>Computer Science Engineering</div>
                            <div className=' ml-5'>Electronics and Communication Engineering</div>
                            <div className=' ml-5'>Electrical Engineering</div>
                            <div className=' ml-5'>Mechanical Engineering</div>
                            <div className=' ml-5'>Civil Engineering</div>
                        </div>
                        <div className='py-2 border border-dashed  border-black rounded-lg  text-center w-[60rem] h-auto bg-[#F3F3F3]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
