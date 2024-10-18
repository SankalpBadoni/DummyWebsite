import React from 'react'

export default function About() {
  return (
    <>
      <div className='flex p-5 items-center py-5 px-40'>
        <img src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-72 w-50' alt="logo" />
        <div className='flex flex-col justify-center gap-3 text-balance mx-0'>
            <h1 className='font-extrabold text-3xl  text-balance'>React is not for beginners</h1>

            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero error sit in, soluta odio laudantium ullam officia alias provident?</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus sequi consequatur veritatis repellat quam earum ea accusantium?</p>
        </div>
      </div>
    </>
  )
}
