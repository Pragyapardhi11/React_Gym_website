
const PricingData = [
  {
    name :"Gold Card",
    price : "499",
    link : "#",
    description : [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration :"Duration : 12 month",
    aosDelay:"0",

  },
  {
    name :"Gold Card",
    price : "499",
    link : "#",
    description : [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration :"Duration : 12 month",
    aosDelay:"0",

  },
  {
    name :"Gold Card",
    price : "499",
    link : "#",
    description : [
      "Monthly access to fitness area.",
      "Training sessions on demand.",
      "Personal trainer on demand.",
      "Live classes on demand.",
    ],
    duration :"Duration : 12 month",
    aosDelay:"0",

  },
]



const Card = () => {
  return (
    <div className='my-14'>
      <div className='container'>
        <h1 className='py-6 text-3xl font-bold text-center sm:text-4xl'> Why <span className='text-primary'>Choose</span> Us </h1>

        {/* card -section */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>

            {PricingData.map((data,index) => (

              <div key={index} className='p-4 space-y-3 text-center text-black duration-200 bg-gray-200 rounded-lg shadow-xl dark:bg-neutral-900 dark:text-white sm:py-16 group hover:bg-primary/20 dark:hover:bg-primary/50' >

                <h1 className='text-3xl font-bold'>{data.name}</h1>
                <h1 className='text-4xl font-bold text-primary' >${data.price}</h1> 

                {data.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}

              <p className='py-3 text-xl font-semibold'> Duration: {data.duration}</p>

                <button className='primary-btn'>Learn More</button>

              </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Card;