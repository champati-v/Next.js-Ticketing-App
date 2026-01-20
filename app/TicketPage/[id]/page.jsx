import TicketForm from '@/app/(components)/TicketForm';
import React from 'react'

const TicketPage = async ({params}) => {
  return (
    <div className='text-primary'>
        <TicketForm />
    </div>
  )
}

export default TicketPage