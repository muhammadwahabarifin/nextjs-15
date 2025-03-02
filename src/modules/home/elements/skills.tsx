'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { motion } from 'framer-motion'
import {
    TbLanguage, TbLayoutDashboard, TbDatabase,
    TbGitFork,
    TbArrowsSort
} from 'react-icons/tb';
import { Processor } from '@/common/components/lottie';
import { BackendSkills, DevopsSkills, FrontendSkills, LanguageSkills } from './skill_icon';
import { Skills } from '@/common/constants/skills';
import { Fade } from 'react-awesome-reveal';
import FadeContent from '@/common/components/ui/FadeContent';

const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};
const sectionListVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export default function SkillsSection() {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} delay={300}>
            <section id='skills' className='w-full px-[5%] flex flex-col gap-5 '>
                <div className="relative flex flex-col items-center">
                    {/* <div className="absolute -right-[100px] top-[400px] hidden h-[400px] w-[400px] rounded-full bg-pink-200 opacity-70 blur-3xl md:block"></div> */}
                    {/* <div className="absolute -right-[100px] top-0 hidden h-[500px] w-[800px] rounded-full bg-blue-200 opacity-70 blur-3xl md:block"></div> */}
                    <div className="flex gap-3 md:items-center">
                        <Fade
                            direction="left"
                            cascade
                            damping={0.2}
                            triggerOnce>
                            <svg
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-full w-14 md:w-20 text-blue-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16 3v18l4 -2.5v-13z"></path>
                                <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141"></path>
                                <path d="M16 16.5l-11 -10l-2 1l13 13.5"></path>
                            </svg>
                        </Fade>
                        <div className="flex flex-col">
                            <div className="flex gap-4">
                                <Fade
                                    direction="left"
                                    cascade
                                    damping={0.2}
                                    triggerOnce>
                                    <h2 className="text-4xl font-semibold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600">My Stack</h2>
                                </Fade>
                            </div>
                            <Fade
                                direction="right"
                                cascade
                                damping={0.2}
                                triggerOnce>
                                <p className="md:text-xl text-zinc-400">Skills in software engineering.</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <div className='z-10 flex w-full flex-col items-start gap-7 text-neutral-600 md:w-1/2'>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
                            <h3 className='flex h-fit w-fit min-w-[180px] items-center gap-2 rounded-full border-t border-neutral-300 py-3 pl-7 shadow-xl backdrop-blur-md dark:border-neutral-700 md:text-xl '>
                                <TbLanguage strokeWidth='1' className='w-7 h-7' />
                                Language
                            </h3>
                            <ul className='flex flex-wrap gap-3 md:gap-5 mt-2'>
                                <LanguageSkills />
                            </ul>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
                            <h3 className='flex h-fit w-fit min-w-[180px] items-center gap-2 rounded-full border-t border-neutral-300 py-3 pl-7 shadow-xl backdrop-blur-md dark:border-neutral-700 md:text-xl'>
                                <TbLayoutDashboard strokeWidth='1' className='w-7 h-7' />
                                Frontend
                            </h3>
                            <ul className='flex flex-wrap gap-3 md:gap-5 mt-2'>
                                <FrontendSkills />
                            </ul>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
                            <h3 className='flex h-fit w-fit min-w-[180px] items-center gap-2 rounded-full border-t border-neutral-300 py-3 pl-7 shadow-xl backdrop-blur-md dark:border-neutral-700 md:text-xl'>
                                <TbDatabase strokeWidth='1' className='w-7 h-7' />
                                Backend
                            </h3>
                            <ul className='flex flex-wrap gap-3 md:gap-5 mt-2'>
                                <BackendSkills />
                            </ul>
                        </div>

                        <div className='flex flex-col md:flex-row gap-5 md:gap-7'>
                            <h3 className='flex h-fit w-fit min-w-[180px] items-center gap-2 rounded-full border-t border-neutral-300 py-3 pl-7 shadow-xl backdrop-blur-md dark:border-neutral-700 md:text-xl'>
                                <TbGitFork strokeWidth='1' className='w-7 h-7' />
                                DevOps
                            </h3>
                            <ul className='flex flex-wrap gap-3 md:gap-5 mt-2'>
                                <DevopsSkills />
                            </ul>
                        </div>
                    </div>


                    <div className='absolute left-0 w-full md:relative md:w-1/2 z-[1]'>
                        <Processor />
                    </div>
                </div>

                <div className='flex flex-col gap-7 my-8'>
                    <h1 className='text-2xl flex gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600 font-semibold'>
                        <TbArrowsSort className='w-7 h-7 animate-bounce text-blue-300' />
                        API mastery</h1>

                    <motion.div
                        initial='hidden'
                        animate='show'
                        variants={sectionVariants}
                        className='grid grid-cols-1 md:grid-cols-3 gap-5'
                    >
                        {Skills.API?.map((item: any, index: number) => (
                            <motion.div
                                variants={sectionListVariants}
                                key={index}
                                className='w-full border p-5 rounded-xl flex flex-col gap-5 md:hover:scale-105 md:duration-300 backdrop-blur-md shadow-2xl shadow-blue-200'>

                                <h2 className='flex items-center gap-3 text-lg text-zinc-600 font-semibold'>
                                    <item.SvgIcon className={`w-5 h-5 md:w-10 md:h-10 ${item.class}`} />
                                    {item.title}
                                </h2>
                                <p className='text-muted-foreground'>{item.description}</p>

                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </section >
        </FadeContent>
    )
}
