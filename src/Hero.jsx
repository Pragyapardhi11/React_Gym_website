import React from 'react';


const Bgstyle = {
  backgroundImage: `url(${"https://gym-tcj.netlify.app/assets/hero-eOt2URp1.jpg"})`,
  backgroundPosition : "center",
  backgroundRepeat : "no-repeat",
  backgroundSize: "cover",
  minHeight : "100%",
  width : "100%",

};

const Hero = () => {
  return (
    <div style={Bgstyle} className=  'duration-200 bg-white dark:bg-black dark:text-white'>
      <div className='duration-200 bg-white/70 dark:bg-black/70'>
      <div className='container  min-h-[620px]'>
      <div className='w-full md:w-[550px] mx-auto text-center space-y-5 pt-20 sm:pt-44  items-center '>
        <p className='text-2xl text-primary'>Start Your Fitness Journey</p>
        <h1 className='text-5xl font-bold md:text-7xl'>Your Fitness Journey Begins!</h1>
        <p>"The body achieves what the mind believes."</p>
        <button className='primary-btn'>Get Started</button>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Hero