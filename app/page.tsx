import { ThemeToggler } from '@components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center dark:bg-slate-900">
      <div className='mb-8 flex justify-between gap-8'>
        <h1 className='text-lg font-semibold mb-1 dark:text-white text-gray-900'>Theme Toggler</h1>
        <div className='flex gap-6'>
          <ThemeToggler type='dark' />
          <ThemeToggler type="light" />
          <ThemeToggler type="system" />
        </div>
      </div>
      <div className="border border-gray-200 rounded-md p-8 shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex justify-between">
          <div className="max-w-md">
            <h1 className='text-2xl font-semibold mb-1 dark:text-white text-gray-900'>Building a theme toggler in NextJs with tailwind</h1>
            <div className='text-sm text-gray-500 dark:text-gray-400 font-medium'>By Sarad Singh</div>
          </div>
          <div className="w-16 h-16 bg-emerald-500 flex justify-center items-center rounded-full">
            <span className='text-white text-3xl font-semibold'>S</span>
          </div>
        </div>
        <div className='max-w-lg mt-6'>
          <p className='text-sm text-gray-500 dark:text-gray-400' >
            This feature is typically used to change the color scheme, font style, and other visual elements to better suit the user's preferences or needs. It can be useful for improving accessibility, reducing eye strain, or simply providing a more personalized user experience.
          </p>

          <div className='mt-6 text-sm flex gap-20'>
            <div className='flex flex-col'>
              <span className='text-gray-500 dark:text-gray-400'>31st June 2023</span>
              <span className='text-gray-500 dark:text-gray-300 font-semibold'>Published</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-500 dark:text-gray-400'>12 minute</span>
              <span className='text-gray-500 dark:text-gray-300 font-semibold'>Reading Time</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
