/* eslint-disable @next/next/no-img-element */
'use client'
import { Fade } from 'react-awesome-reveal'
import { Contributions } from '@/common/components/github/ContributionsGithub';
import Loading from '@/common/components/loading';
import React, { Suspense } from 'react'
import { TbCloudComputing } from 'react-icons/tb';

export default function About() {
    return (
        <section id='about' className='w-full pt-12 px-[5%]'>
            <div className='flex flex-col-reverse gap-5 md:gap-0 md:flex-row items-center'>
                <Fade
                    direction={'left'}
                    delay={600}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                    className='w-full md:w-1/2 h-full flex justify-center'>
                    <div className='w-fit h-full'>
                        <img src="/myabout.png" alt="mobile" width={'100%'} height={'100%'} className='bg-cover max-h-[500px]' />
                    </div>
                </Fade>
                <div className='w-full md:w-1/2 flex flex-col gap-7'>
                    <Fade
                        direction={'right'}
                        delay={600}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}>
                        <div className='flex gap-3 items-center'>
                            <TbCloudComputing strokeWidth='1' className='w-14 md:w-20 h-full text-blue-300' />
                            <div className='flex flex-col'>
                                <h2 className='text-4xl font-semibold md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600'>About Me</h2>
                                <p className='md:text-xl text-center text-zinc-400'>My description in website development.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade
                        direction={'right'}
                        delay={700}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}>
                        <p className='w-full text-zinc-600'>
                            <span className='text-4xl font-semibold'>Hello,</span> <br />
                            My name is wahabarf. I am a web developer specializing in React and Laravel frameworks, along with MySQL and PostgreSQL databases. My primary focus is on delivering high-performance websites that are interactive and responsive. With my experience in web application development, I strive to provide users with an optimal experience through attractive designs and exceptional functionality. I enjoy exploring new technologies and continuously learning the best practices to enhance website performance and responsiveness.</p>
                    </Fade>
                    <Fade
                        direction={'right'}
                        delay={800}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}>
                        <div>
                            <h3 className='text-2xl font-semibold text-zinc-600'>Education</h3>
                            <p className='flex gap-3 text-zinc-500'>Dian Nuswantoro Univercity
                                <a target='_blank' aria-label='School Location'
                                    href="https://www.google.co.id/maps/place/SMK+Telekomunikasi+Darul+Ulum+Jombang/@-7.5432097,112.2804037,20.08z/data=!4m6!3m5!1s0x2e78155242695597:0xa470b7d93a5e14f6!8m2!3d-7.5432031!4d112.280603!16s%2Fg%2F11gzytsc5?hl=id&entry=ttu">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        className='w-5 h-5 fill-stone-950 dark:fill-white animate-bounce'>
                                        <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"></path>
                                    </svg>
                                </a>
                            </p>
                            <p className='text-zinc-400'>July 2022</p>
                        </div>
                    </Fade>
                    <Fade
                        direction={'right'}
                        delay={900}
                        cascade
                        damping={1e-1}
                        triggerOnce={true}>
                        <div>
                            <h3 className='font-semibold text-zinc-600'>Expected year of Graduation</h3>
                            <p className='text-zinc-400'>2025 June</p>
                        </div>
                    </Fade>
                </div>
            </div>
            <Suspense fallback={Loading()}>
                <Contributions />
            </Suspense>

        </section>
    )
}