import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { profileLocked } from '../../utils/Constant'

const Notes = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <img className=' px-4 ' src={profileLocked} alt="" />
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
                        <div className=' py-2 border border-dashed  border-black text-center rounded-lg w-[25rem] h-auto bg-[#F3F3F3]'></div>
                        <div className='py-2 border border-dashed  border-black rounded-lg  text-center w-[60rem] h-auto bg-[#F3F3F3]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
