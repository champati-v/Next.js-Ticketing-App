import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-sm ${status == "Not Started" ? "bg-red-200 text-red-800" : status == "In Progress" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"}`}>
        {status}
    </span>
  )
}

export default StatusDisplay