import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
        const body = await req.json();
        await Ticket.create(body);
        return NextResponse.json({message: 'Ticket created successfully'}, {status: 201});
    }
    catch (error) {
        return NextResponse.json({message: 'Failed to create ticket', error: error.message}, {status: 500});
    }
}

export async function GET() {
    try{
        const tickets = await Ticket.find();
        return NextResponse.json({ tickets }, {status: 200});
    }
    catch (error) {
        return NextResponse.json({message: 'Failed to fetch tickets', error: error.message}, {status: 500});
    }
}

