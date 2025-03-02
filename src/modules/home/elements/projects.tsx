/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { TbStack2 } from 'react-icons/tb'
import { ContainerContext } from '@/context/ContainerProvider'
import { motion } from 'framer-motion'
import { Projects } from '@/common/constants/projects'
import FadeContent from '@/common/components/ui/FadeContent'
import { BorderBeam } from '@/common/components/ui/border-beam'
import { Badge } from '@/common/components/ui/badge'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectsSection() {
    const { setFullPathName } = useContext(ContainerContext)

    return (
        <FadeContent
            blur={true} duration={1000} easing="ease-in-out" initialOpacity={0} delay={400}>
            <section id='projects' className='px-[5%]'>
                <div className="absolute top-10 left-56 -z-[1] h-56 w-56 rounded-full bg-yellow-200 blur-3xl dark:bg-yellow-900"></div>
                <div className='relative flex flex-col items-center'>
                    <div className='flex gap-3'>
                        <TbStack2 strokeWidth='1' className='w-14 md:w-20 h-full text-blue-300' />
                        <div className='flex flex-col'>
                            <div className='flex gap-4'>
                                <h2 className='text-4xl font-semibold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600'>Last Projects</h2>
                            </div>
                            <p className='md:text-xl text-muted-foreground'>Here is my last project.</p>
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
                                {/* <a className='absolute px-7 py-1 rounded-bl-xl rounded-tr-xl right-0 bg-black bg-opacity-50 
                                flex gap-2 items-center text-white'
                                    href={project.urlDirect}>
                                    <span>
                                        Demo
                                    </span>
                                    <TbWorldShare className='w-5 h-5 animate-bounce' />
                                </a> */}
                                <img src={project.srcImage} alt="projectImage.webp" width={'100%'} height={'100%'}
                                    className='bg-cover rounded-t-xl' />
                                <BorderBeam
                                    size={200}
                                    duration={12}
                                    delay={9}
                                />
                                <div className='p-4'>
                                    <h3 className='font-semibold text-xl text-zinc-600'>{project.title}</h3>
                                    <p className='mt-4 text-muted-foreground'>{project.description}</p>
                                </div>
                                <ul className='h-full flex flex-wrap items-end gap-2 pb-4 px-4 justify-self-end'>
                                    {project.icons.map((icon: any, index_: number) => (
                                        <Badge
                                            key={index_}
                                            variant='secondary'
                                            className='border inline-flex items-center gap-2 rounded-lg px-2.5 py-0.5'
                                            style={{ backgroundColor: `${icon.BgClass}` }}
                                        >
                                            <icon.SvgIcon className={`w-4 h-4 ${icon.class} `} />
                                            <span className='text-sm font-medium text-white'>
                                                {icon.text}
                                            </span>
                                        </Badge>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </motion.div>
                <div className='w-full h-24 flex justify-center items-center'>
                    <Link href='/all-projects' onClick={() => setFullPathName('/all-projects')}
                        className='text-blue-600 dark:text-blue-300 flex gap-2 items-center hover:opacity-70 duration-100 self-end'>View All Project
                        <FiArrowUpRight className='h-full w-6' />
                    </Link>
                </div>
            </section>
        </FadeContent>
    )
}
