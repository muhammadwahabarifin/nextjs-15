'use client'

import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { TbBrandGithub, TbEye } from "react-icons/tb";


export function Contributions() {
    const contributions = [
        {
            title: 'Past Year',
            value: 3,
        },
        {
            title: 'This Month',
            value: 14,
        },
        {
            title: 'This Week',
            value: 12,
        }
    ]
    return (
        <div className='mt-12 md:px-[5%]'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='flex items-center gap-3'>
                    <TbBrandGithub className='w-7 h-7 text-zinc-600' />
                    <Fade
                        direction={'right'}
                        delay={500}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}
                        className='text-2xl font-semibold text-zinc-600'>Contributions</Fade>
                </div>
                <Fade
                    direction={'right'}
                    delay={500}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                    className="text-muted-foreground">My contributions from last year on github.
                </Fade>
                <Fade
                    direction={'left'}
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}>
                    <a href='https://github.com' target='_blank' aria-label='View On Github'
                        className='text-blue-600 dark:text-blue-300 flex gap-1 items-center hover:opacity-70 duration-100'>View On Github
                        <TbEye className='h-full w-6 animate-pulse' />
                    </a>
                </Fade>
            </motion.div>
            <div
                className='my-3 grid grid-cols-1 grid-rows-2 justify-around gap-3 md:grid-cols-3 md:grid-rows-1'>
                {contributions.map((item, idx) => (
                    <div

                        className="relative w-full overflow-hidden rounded-md p-3 shadow-2xl shadow-blue-200 backdrop-blur-md"
                        key={idx}
                    >
                        <div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-600 font-semibold">{item.title}</span>
                            <p className="text-2xl font-medium text-[#46e6b6]">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
