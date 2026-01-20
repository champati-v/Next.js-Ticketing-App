import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const res = await Ticket.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Ticket deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const foundTicket = await Ticket.findOne({ _id: id });
    return NextResponse.json(foundTicket, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}

export async function PUT(req, {params}) {
    try{
        const {id} = await params; 
        const body = await req.json();
        const ticketData = body;
        await Ticket.findByIdAndUpdate(id, {
            ...ticketData
        });

        return NextResponse.json({message: 'Ticket updated successfully'}, {status: 200});
    }
    catch (error) {
        return NextResponse.json({message: 'Failed to update ticket', error: error.message}, {status: 500});
    }
}