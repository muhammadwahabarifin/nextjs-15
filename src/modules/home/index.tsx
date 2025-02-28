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
                <div className="blob-animate absolute -z-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl"></div>
                <About />
                <SkillsSection />
                <ProjectsSection />
            </main>
        </>
    )
}

export default Home