'use client';

import React, {useState} from 'react'
import PriorityDisplay from './PriorityDisplay'
import ProgressBar from './ProgressBar'
import StatusDisplay from './StatusDisplay'
import { SquarePen, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const TicketCard = ({ticket}) => {
  
  const router = useRouter();

  const deleteTicket = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: 'DELETE',
    });

    if(res.status === 200){
      router.refresh();
    }
  } 

  const openDeleteModal = (id) => {
    setDeleteModalOpen(true);
    setTickerIdToDelete(id);
  }

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tickerIdToDelete, setTickerIdToDelete] = useState(null);

  return (
    <div className='flex flex-col bg-gray-700 hover:bg-gray-600 rounded-md shadow-lg p-4 m-2'>   
        <div className='flex justify-between mb-3'>
            <PriorityDisplay priority={ticket.priority} />
            <div className='flex items-center gap-3'>
              <Link href={`/TicketPage/${ticket._id}`}><SquarePen className='text-white' size={18} /></Link>
              <span className='ml-auto text-white cursor-pointer' onClick={() => openDeleteModal(ticket._id)}><X /></span>
            </div>
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

        {deleteModalOpen && (
          <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-md shadow-md'>
              <h3 className='text-lg font-semibold mb-4'>Confirm Deletion</h3>
              <p className='mb-4'>Are you sure you want to delete this ticket?</p>
              <div className='flex justify-end'>
                <button 
                  className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2'
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded cursor-pointer'
                  onClick={() => {
                    deleteTicket(tickerIdToDelete);
                    setDeleteModalOpen(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default TicketCard