import { FireExtinguisher, StarIcon } from 'lucide-react'
import React from 'react'

const PriorityDisplay = ({priority}) => {
  return (
    <div className='flex justify-start items-baseline'>
        {[...Array(priority)].map((_, index) => (
            <StarIcon key={index} className='text-yellow-400 fill-yellow-400 mr-1' />
        ))}
    </div>
  )
}

export default PriorityDisplay