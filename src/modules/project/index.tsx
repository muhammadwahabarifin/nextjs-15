import React from 'react'
import { TbStack2 } from 'react-icons/tb'
import Card from './elements/card';

const Project = () => (
    <section id='projects' className='px-[5%] py-24 min-h-full'>
        <div className='flex gap-3'>
            <TbStack2 strokeWidth='1' className='w-14 md:w-16 h-full text-blue-300' />
            <div>
                <h2 className='text-2xl font-semibold md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600'> My Projects</h2>
                <p className='md:text-xl text-muted-foreground'>Here is my all projects.</p>
            </div>
        </div>
        <Card />
    </section>
)

export default Project;