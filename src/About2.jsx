import React from 'react'

const About2 = () => {
    return (
    <div className='py-16 duration-200 bg-white dark:bg-neutral-900 dark:text-white '>
    <div className='container'>
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 place-items-center'>

    {/* text-section */}
    <div className='space-y-4 '>
        <div className='flex items-center gap-4 '>
        <div className='text-primary text-7xl'>
            <h1 className='font-bold'>01</h1>
        </div>
        <div>
            <p className='text-primary'>Global Fitness</p>
            <h1 className='text-2xl font-bold sm:text-4xl '>About Us</h1>
        </div>
        </div>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime?
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempora.
        </p>
        <button className='outline-btn'>Get Started</button>
    </div>



     {/* image sextion */}
    <div>
        <img className='sm:scale-110 max-h-[350px] drop-shadow-md mx-auto' src={"https://gym-tcj.netlify.app/assets/banner2-RQ_Eavd8.png"} alt=''/>
    </div>


    </div>
    </div>
    </div>
    )
}

export default About2
