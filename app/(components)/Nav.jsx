import { HomeIcon, TicketIcon, TicketPlusIcon, User2Icon } from "lucide-react"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex items-center justify-around bg-nav text-white p-4"> 
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 hover:underline"> 
          <HomeIcon className="icon" />
          <span className="hidden lg:block">Home</span>
        </Link>
        <Link href="/TicketPage/new" className="flex items-center gap-2 hover:underline">
          <TicketPlusIcon className="icon"/>
          <span className="hidden lg:block">New Ticket</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <User2Icon className="icon mx-auto border border-white rounded-full p-1"/>
        <p className="text-primary">user@gmail.com</p>
      </div>
    </nav>
  )
} 

export default Nav