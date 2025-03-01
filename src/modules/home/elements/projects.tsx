/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { TbStack2, TbEye, TbWorldShare } from 'react-icons/tb'
import { ContainerContext } from '@/context/ContainerProvider'
import { motion } from 'framer-motion'
import { Projects } from '@/common/constants/projects'

export default function ProjectsSection() {
    const { setFullPathName } = useContext(ContainerContext)

    return (
        <section id='projects' className='px-[5%]'>
            <div className='relative flex flex-col items-center'>
                <div className='flex gap-3'>
                    <TbStack2 strokeWidth='1' className='w-14 md:w-20 h-full text-blue-300' />
                    <div className='flex flex-col'>
                        <div className='flex gap-4'>
                            <h2 className='text-4xl font-semibold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600'>Last Projects</h2>
                        </div>
                        <p className='md:text-xl text-center text-muted-foreground'>Here is my last project.</p>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-5'>
                    {Projects.slice(0, 3).map((project: any, index: number) => (
                        <div key={index}
                            className='w-full h-auto border rounded-xl hover:scale-105 duration-300 flex flex-col shadow-2xl shadow-blue-200 relative'>
                            <a className='absolute px-7 py-1 rounded-bl-xl rounded-tr-xl right-0 bg-black bg-opacity-50 
                                flex gap-2 items-center text-white'
                                href={project.urlDirect}>
                                <span>
                                    Demo
                                </span>
                                <TbWorldShare className='w-5 h-5 animate-bounce' />
                            </a>
                            <img src={project.srcImage} alt="projectImage.webp" width={'100%'} height={'100%'}
                                className='bg-cover rounded-t-xl' />
                            <div className='p-4'>
                                <h3 className='font-semibold text-xl text-zinc-600'>{project.title}</h3>
                                <p className='mt-4 text-muted-foreground'>{project.description}</p>
                            </div>
                            <ul className='h-full flex flex-wrap items-end gap-2 pb-4 px-4 justify-self-end'>
                                {project.icons.map((icon: any, index_: number) => (
                                    <div
                                        key={index_}
                                        className='border bg-zinc-200 inline-flex items-center gap-2 rounded-lg px-2.5 py-0.5'
                                    >
                                        <icon.SvgIcon className={`w-4 h-4 ${icon.class} `} />
                                        <span className='text-sm font-semibolds text-zinc-500'>
                                            {icon.text}
                                        </span>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </motion.div>
            <div className='w-full h-24 flex justify-center items-center'>
                <Link href='/all-projects' onClick={() => setFullPathName('/all-projects')}
                    className='text-blue-600 dark:text-blue-300 flex gap-2 items-center hover:opacity-70 duration-100 self-end'>View All Project
                    <TbEye className='h-full w-6 animate-pulse' />
                </Link>
            </div>
        </section>
    )
}
