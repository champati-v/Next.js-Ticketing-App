import TicketForm from '@/app/(components)/TicketForm';
import React from 'react'

const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if(!res.status === 200){
      throw new Error("Failed to fetch ticket data");
    }

    const data = await res.json();
    return data;
}

const TicketPage = async ({params}) => {
  const {id} = await params;
  const EditMode = id === 'new' ? false : true;
  console.log("Edit Mode:", EditMode, id);
  let updateTicketData = {};

  if(EditMode){
    updateTicketData = await getTicketById(id);
  } else {
    updateTicketData = {
      _id: 'new'
    }
  }

  return (
    <div className='text-primary'>
        <TicketForm ticket={updateTicketData} />
    </div>
  )
}

export default TicketPage