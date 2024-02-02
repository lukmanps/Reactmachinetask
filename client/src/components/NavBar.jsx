import React from 'react';
import { Bell } from 'lucide-react';
import ProfileImage from '../assets/media.png';

const NavBar = () => {
    return (
        <main className='bg-slate-100 shadow-md'>
            <div className='flex justify-between items-center max-w-sm px-6 h-16 py-2 sm:max-w-6xl p-1'>
                <div>
                    <h1 className='font-bold text-base md:text-lg flex flex-wrap'>
                        <span className='text-slate-500'>STATBOARD</span>
                    </h1>
                </div>
                <div className='flex flex-row items-center gap-5'>
                    <Bell />
                    <div className='flex flex-row items-center gap-3'>
                        <img src={ProfileImage} className='rounded-full h-12 w-12 object-cover' />
                        <div>
                            <h2 className='font-medium text-sm'>John Doe</h2>
                            <h2 className='font-normal text-xs'>johndoe@gmail.com</h2>
                        </div>
                    </div>
                </div>


            </div>

        </main>
    )
}

export default NavBar