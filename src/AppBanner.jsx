// import React from 'react';
const BannerImg = {
    backgroundImage: `url(${"https://gym-tcj.netlify.app/assets/dumbell-gHD5KhKR.jpg"})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    // minHeight : "100%",
    // width : "100%",

};

const AppBanner = () => {
    return (
    <div>
        <div className='container text-white '>
            <div style={BannerImg} className='sm:min-h-[350px] sm:flex sm:justify-end sm:items-center rounded-xl'>
                <div>
                    <div className='max-w-xl mx-auto space-y-6 '>
                        <h1 className='text-2xl font-semibold text-center sm:text-4xl '>Get Started with our app</h1>
                        <p className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?</p>

                        <div className='flex items-center justify-center gap-4'>
                            <a href='/'>
                                <img
                                    src="https://gym-tcj.netlify.app/assets/play_store-25MAnoNl.png"
                                    className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt=''/>

                            </a>
                            <a href='/'>
                                <img
                                    src="https://gym-tcj.netlify.app/assets/app_store-aoAyJ2T_.png"
                                    className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt=''/>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AppBanner;
// sm:flex sm:justify-end sm:items-center rounded-xl