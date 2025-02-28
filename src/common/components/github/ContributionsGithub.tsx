import { TbBrandGithub, TbEye } from "react-icons/tb";


export function Contributions() {
    return (
        <div className='mt-12 md:px-[5%]'>
            <div className='flex items-center gap-3'>
                <TbBrandGithub className='w-7 h-7 text-zinc-600' />
                <h2 className='text-2xl font-semibold text-zinc-600'>Contributions</h2>
            </div>
            <p className="text-muted-foreground">My contributions from last year on github.</p>
            <a href='https://github.com' target='_blank' aria-label='View On Github'
                className='text-blue-600 dark:text-blue-300 flex gap-1 items-center hover:opacity-70 duration-100'>View On Github
                <TbEye className='h-full w-6 animate-pulse' />
            </a>
            <div className='my-3 grid grid-cols-1 grid-rows-2 justify-around gap-3 md:grid-cols-3 md:grid-rows-1'>
                <div className="relative w-full overflow-hidden rounded-md p-3 shadow-2xl shadow-blue-200 backdrop-blur-md">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600 font-semibold">Past Year</span>
                    <p className="text-2xl font-semibold text-[#5046e6]">309</p>
                </div>

                <div className="relative w-full overflow-hidden rounded-md p-3 shadow-2xl shadow-blue-200 backdrop-blur-md">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600 font-semibold">This Month</span>
                    <p className="text-2xl font-semibold text-[#5046e6]">58</p>
                </div>

                <div className="relative w-full overflow-hidden rounded-md p-3 shadow-2xl shadow-blue-200 backdrop-blur-md">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600 font-semibold">This Week</span>
                    <p className="text-2xl font-semibold text-[#5046e6]">2</p>
                </div>
            </div>
        </div>
    )
}
