/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import { ContainerContext } from '@/context/ContainerProvider';
import { Menu } from '../constants/menu';

export default function Navbar() {
    const { fullPathName, setFullPathName } = useContext(ContainerContext)
    const { theme, setTheme } = useTheme()
    const [navToggle, setNavToggle] = useState(false)

    function handleMobileNav(value: boolean, section?: string) {
        setNavToggle(value)
        if (section)
            setFullPathName(section)
    }

    return (
        <nav className='fixed w-screen h-0 z-50 dark:text-neutral-300'>
            {/* Show Sidebar Button */}
            <input type='submit' id='navbar' hidden onClick={() => handleMobileNav(!navToggle)} />
            <label htmlFor="navbar" className={`absolute z-10 duration-300
      top-5 cursor-pointer
      ${navToggle ? 'left-64 md:left-[350px] rotate-180' : 'left-5 rotate-0'}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                    viewBox="0 0 24 24" stroke="currentColor"
                    fill="none"
                    className='text-white'>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" ></path>
                    <path d="M7 7l5 5l-5 5"></path>
                    <path d="M13 7l5 5l-5 5"></path>
                </svg>
            </label>
            {navToggle ? <div onClick={() => setNavToggle(false)} className='absolute top-0 left-0 w-screen h-screen bg-black opacity-50'></div> : ''}
            <ul className={`absolute top-0 z-30 flex h-screen w-[80%] flex-col bg-[#0f172a] duration-300  md:h-[200vh] md:w-[400px] md:shadow-[200px_-50vh_150px_#0f172a]
        ${navToggle ? 'left-0' : '-left-full'}`}>
                <li>
                    <Link href='/' onClick={() => handleMobileNav(false, ' ')}
                        className='h-fit mx-[10%] mt-12 py-5 flex items-center gap-3 border-b border-stone-400'>
                        <img src="/profile.jpg" alt="profile.jpg" width='80' height='80' className='rounded-full' />
                        <div className='flex flex-col'>
                            <h2 className='text-4xl font-medium text-white'>WahabArf</h2>
                            <p className='text-dark'>Full-stack Website Developer</p>
                            <p className='text-dark'>@wahabarf</p>
                        </div>
                    </Link>
                </li>
                <li className='my-4 mx-[5%] flex flex-col gap-5 text-white'>
                    {Menu.map((menu: any, index: number) => (
                        <div key={index}>
                            {navLink(menu, handleMobileNav, fullPathName)}
                        </div>
                    ))}
                </li>
                <li className='flex flex-col items-center gap-2 my-4'>
                    <p className='text-dark'>Interested in Working Together?</p>
                    <Link href='/talk' onClick={() => handleMobileNav(false)}
                        className='m-auto bg-dark px-[20%] py-4
          rounded-md hover:opacity-70 drop-shadow-md duration-300 text-muted'>
                        Lets Talk
                    </Link>
                    <div className='flex gap-4 my-2'>
                        {brandLink(TbBrandInstagram, 'https://www.instagram.com/fiqtorr')}
                        {brandLink(TbBrandGithub, 'https://www.github.com/fiqtor')}
                        {brandLink(TbBrandYoutube, 'https://www.youtube.com/@fiqtor')}
                        {brandLink(TbBrandLinkedin, 'https://www.linkedin.com/in/taufiiqul-hakim2007')}
                        {brandLink(TbBrandTiktok, 'https://www.tiktok.com/@fiqtor')}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

const navLink = (menu: any, handle: any, fullPathName: string) => (
    <Link href={menu.pathName} onClick={() => handle(false, menu.pathName)} className={`w-full px-[5%] py-3
      hover:scale-105 flex items-center 
      gap-2 rounded-xl duration-300 ${(fullPathName == menu.pathName) ?
            'bg-neutral-300 dark:bg-neutral-800' : 'hover:bg-neutral-300 hover:dark:bg-neutral-800'}`}>
        <menu.Svg className='w-7 h-7' strokeWidth='1' /> {menu.label}
    </Link>
)

const brandLink = (Svg: any, url: string) => (
    <a href={url} target='_blank' className='flex text-white hover:opacity-70
    hover:scale-110 duration-300 dark:text-neutral-300' aria-label={url}>
        <Svg className='w-7 h-7' />
    </a>
)