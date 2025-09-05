import { NextResponse } from "next/server";

const events = [
    {
        id: 1,
        title: "Next.js Workshop",
        description: "Learn Next.js step by step with practical examples.",
        date: "2025-09-10",
        location: "Dhaka",
        category: "Workshop",
    },
    {
        id: 2,
        title: "React Meetup",
        description: "Meet React developers, share knowledge, and network.",
        date: "2025-09-15",
        location: "Online",
        category: "Meetup",
    },
];

// GET /api/events/[id]
export async function GET(
    req: Request,
    { params }: {  params: { id: string } }
) {
    const event = events.find((e) => e.id === Number(params.id));

    if (!event) {
        return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event);
}
