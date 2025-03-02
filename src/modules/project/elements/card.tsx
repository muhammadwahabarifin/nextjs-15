/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Badge } from '@/common/components/ui/badge'
import { BorderBeam } from '@/common/components/ui/border-beam'
import { Projects } from '@/common/constants/projects'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function Card() {
    return (
        <AnimatePresence>
            <motion.div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
                    {Projects.slice(0, 5).map((project: any, index: number) => (
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
        </AnimatePresence>
    )
}
