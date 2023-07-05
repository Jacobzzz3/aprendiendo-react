import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Bubble from './Components/Icons/Bubble'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' bg-gray-900 h-screen w-screen'>
      <div className=' flex  m-0 px-auto p-6  rounded-lg bg-white shadow-xl max-w-sm mx-auto'>
        <div className=' flex-shrink-0'>
          <picture className='h-12 w-12'>
            <Bubble />
          </picture>
        </div>
        <div className=' ml-6 pt-1'>
          <h4 className=' text-cyan-950 font-medium leading-5'>ChitChat</h4>
          <p className=' text-gray-600 font-normal leading-5'>You have a new message!</p>
        </div>
      </div>


      <div className=' py-8 px-8 max-w-sm mx-auto my-6 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <img src="https://tailwindcss.com/img/erin-lindford.jpg" alt="" className=' block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' />
        <div className='text-center space-y-2 sm:text-left'>
          <div className=' space-y-0.5'>
            <p className='text-lg text-black font-semibold'>
              Erin lindford
            </p>
            <p className=' text-slate-600 font-medium'>
              Product engineer
            </p>
          </div>
          <button className=' px-4 py-1 font-medium text-purple-600 rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Message</button>
        </div>
      </div>


    </main>
  )
}

export default App
