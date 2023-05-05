import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center  ">
      <div className="border border-gray-200 rounded-md p-8">
        <div className=" flex justify-between">
          <div className="max-w-md">
            <h1 className='text-2xl font-semibold mb-1'>Building a theme toggler in NextJs with tailwind</h1>
            <div className='text-sm text-gray-700 font-medium'>By Sarad Singh</div>
          </div>
          <div className="w-16 h-16 bg-slate-500 flex justify-center items-center rounded-full">
            <span className='text-white text-3xl font-semibold'>S</span>
          </div>
        </div>
        <div className='max-w-lg mt-6'>
          <p className='text-sm' >
            This feature is typically used to change the color scheme, font style, and other visual elements to better suit the user's preferences or needs. It can be useful for improving accessibility, reducing eye strain, or simply providing a more personalized user experience.
          </p>

          <div className='mt-6 text-sm text-gray-700 flex gap-20'>
            <div className='flex flex-col'>
              <span className=''>31st June 2023</span>
              <span className='font-semibold'>Published</span>
            </div>
            <div className='flex flex-col'>
              <span className=''>12 minute</span>
              <span className='font-semibold'>Reading Time</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
