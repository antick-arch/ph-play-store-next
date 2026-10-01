import Link from 'next/link';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

const layout = ({children}) => {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col justify-center items-center bg-gray-300 min-h-[95vh] w-[15%]'>
                <h2>sidebar</h2>
                <Link className='btn' href={'/'}><BiArrowBack></BiArrowBack><span>Go Home</span></Link>
            </div>
            {children}
        </div>
    );
};

export default layout;