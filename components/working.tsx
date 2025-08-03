import React from 'react'

const working = () => {
  return (
    <div className='bg-black'>
        <nav className='bg-black flex text-white justify-between px-32 py-6 items-center'>
            <div className='font-bold text-4xl'>Brand</div>
            <ul className='flex gap-5 text-xl font-semibold items-center'>
                <li className='bg-white text-black px-4 py-2 rounded hover:bg-red-900 hover:text-white cursor-pointer'>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Feedback</li>
            </ul>
        </nav>

<div className='flex gap-4'>
        <div className='h-[200px] w-[200px] bg-blue-400 max-md:hidden max-lg:hidden'>Wide Screen</div>
        <div className='hidden h-[200px] w-[200px] bg-red-400 max-md:hidden max-lg:block'>Tablet Screen</div>
        <div className='hidden h-[200px] w-[200px] bg-green-400 max-md:block'>Mobile Screen</div>
</div>
       
    </div>
  )
}

export default working
