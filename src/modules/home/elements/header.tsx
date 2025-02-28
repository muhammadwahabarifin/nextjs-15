/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import '../../../../public/profile.jpg'
// import Orb from '@/common/components/ui/Orb'
import { ArrowRight } from 'lucide-react'
import { ShinyButton } from '@/common/components/ui/shine-border'
import { TextGenerateEffect } from '@/common/components/ui/Text-generate'
import { word } from '@/common/constants/text'
import Orb from '@/common/components/ui/Orb'


export default function Header() {
    return (
        <AnimatePresence>
            <header className='relative w-full h-screen flex flex-col gap-14 md:flex-row items-center overflow-hidden pt-28'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full h-1/3 md:w-1/2 md:h-full flex flex-col gap-2 justify-center lg:pt-14 px-[5%]
                    z-[1] text-4xl md:text-7xl'>
                    <h1
                        className='font-medium text-zinc-400'>Hello,
                    </h1>
                    <span
                        className=' font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600'>
                        I'm Wahabarf
                    </span>
                    <TextGenerateEffect
                        words={word} />

                    <div className='flex w-fit gap-1 lg:gap-4'>
                        <ShinyButton className="flex group items-center mt-4">
                            <span className="flex items-center text-white">
                                Let's Talk
                                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </ShinyButton>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='relative z-10 flex h-1/2 w-full max-w-xs items-center justify-center md:h-full md:w-1/2 md:pr-14 lg:w-1/2 lg:max-w-none'
                >
                    <div className='z-[-1] h-full w-full fill-neutral-300 dark:fill-neutral-800 md:w-full md:scale-150 lg:w-96'>
                        <Orb
                            hoverIntensity={0.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false} />
                    </div>
                    <div className='animate-up-down absolute z-[1] flex h-full w-fit items-center py-7 md:h-fit md:py-0'>
                        <img src="/wahab.jpg" alt="mobile.webp" width={'100%'} height={'100%'} className='h-full max-h-[450px]' />
                    </div>
                </motion.div>
            </header>
        </AnimatePresence >
    )
}
