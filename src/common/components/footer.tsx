import React from 'react'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Footer = () => (
    <footer className='w-full h-fit py-7 flex flex-col items-center 
    gap-5 dark:text-neutral-300'>
        <span className='flex items-center gap-3 font-semibold text-zinc-400'><span className='text-right'>Powered by <br /> New technologies</span>

            <div className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
          before:dark:bg-white before:content-[attr(data-tooltip)]'
                data-tooltip='NextJS'>
                <SiNextdotjs className={`w-8 h-8 fill-black`} />
            </div>
            <div className='tooltip before:text-neutral-700 dark:text-white before:bg-neutral-200 
          before:dark:bg-white before:content-[attr(data-tooltip)]'
                data-tooltip='TailwindCSS'>
                <SiTailwindcss className={`w-8 h-8 fill-blue-400 `} />
            </div>
        </span>
        <span className='text-white'>Made by Wahabarf. All rights reserved.</span>
    </footer>
)

export default Footer;