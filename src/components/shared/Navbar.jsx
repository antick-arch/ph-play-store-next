"use client"
import { clonePageVaryPathWithNewSearchParams } from 'next/dist/client/components/segment-cache/vary-path';
import Image from 'next/image';
import React from 'react';
import navImg from '@/assets/img/logo.png'
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/apps",
            text: "Apps"
        },
        {
            path: "/installation",
            text: "Installation"
        },
        {
            path: "/dashboard",
            text: "Dashboard"
        }
    ]
    const pathname = usePathname();
    return (
        <nav className='shadow'>
            <div className='container mx-auto p-2 flex justify-between items-center'>
                <Link href={"/"}><Image loading="eager" src={navImg} width={50} height={50} alt='nav logo'></Image></Link>
                <ul className='flex justify-between gap-5'>
                    {
                        navItems.map((item,index)=>(<li key={index}><Link className={`border-b ${pathname === item.path ? "active border-purple-500 text-purple-500 p-1" : "border-none"}`} href={item?.path}>{item?.text}</Link></li>))
                    }
                </ul>
                <button className='btn bg-purple-500 text-white border-none'><SiGithub /> Contribute</button>
            </div>
        </nav>
    );
};

export default Navbar;