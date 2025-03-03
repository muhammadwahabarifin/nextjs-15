import React from 'react'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Footer = () => (
    <footer className='w-full h-fit py-7 flex flex-col items-center 
    gap-5 dark:text-neutral-300 relative'>
        {/* <div className="absolute bottom-10 right-56 -z-[1] h-56 w-56 rounded-full bg-blue-200 blur-3xl dark:bg-yellow-900"></div> */}
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
        <span className='text-zinc-400'>Made by Wahabarf. All rights reserved.</span>
    </footer>
)

export default Footer;