import React from 'react'
import PriorityDisplay from './PriorityDisplay'
import ProgressBar from './ProgressBar'
import StatusDisplay from './StatusDisplay'
import { X } from 'lucide-react'

const TicketCard = ({ticket}) => {
  return (
    <div className='flex flex-col bg-gray-700 hover:bg-gray-600 rounded-md shadow-lg p-4 m-2'>   
        <div className='flex mb-3'>
            <PriorityDisplay priority={ticket.priority} />
            <span className='ml-auto text-white cursor-pointer'><X /></span>
        </div>
        <h4 className='text-gray-200 font-semibold'>{ticket.title}</h4>
        <hr className='h-px border-0 bg-gray-200 mb-2' />
        <p className='whitespace-pre-wrap text-gray-400'>{ticket.description}</p>

        <div className='grow'></div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1 text-gray-200'>{ new Date(ticket.createdAt).toLocaleString()}</p> 
            <ProgressBar progress={ticket.progress} />
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
    </div>
  )
}

export default TicketCard