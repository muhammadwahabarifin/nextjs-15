import React from 'react'
import Header from './elements/header'
import About from './elements/about'
import SkillsSection from './elements/skills'
import ProjectsSection from './elements/projects'

const Home = () => {
    return (
        <>
            <Header />
            <main className='my-[20vw] md:my-[5vw] flex flex-col gap-52'>
                <About />
                <SkillsSection />
                <ProjectsSection />
            </main>
        </>
    )
}

export default Home