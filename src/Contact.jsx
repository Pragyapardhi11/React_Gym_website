
const Contact = () => {
  return (
    <div className='my-8'>
      <div className='container bg-gray-100 dark:bg-neutral-900 py-7 '>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-3'>


           <div className='col-span-2'>
            <h1 className='text-2xl font-bold sm:text-3xl text-black/80 dark:text-white'>
                <span className='text-primary'>Sweat now , Shine later.</span> Your body is a reflection of your lifestyle choice.
            </h1>
           </div>

           <div className='grid text-center place-items-center'>
            <button className='primary-btn'>Contact</button>
           </div>


        </div>
      </div>
    </div>
  )
}

export default Contact
