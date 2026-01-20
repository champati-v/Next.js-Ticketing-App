import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='flex items-baseline gap-3'> 
      <div className='w-full bg-gray-200 rounded-full h-2.5'>
          <div className='bg-green-600 h-2.5 rounded-full' style={{width: `${progress}%`}}> 
          </div> 
      </div>
      <p className='text-sm text-gray-200 mt-1'>{progress}%</p>
    </div>
  )
}

export default ProgressBar