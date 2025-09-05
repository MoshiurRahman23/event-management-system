import Link from "next/link";
import { Event } from "../lib/storage";

type Props = {
    event: Event;
    onDelete?: (id: number) => void;
    onEdit?: (event: Event) => void;
};

export default function EventCard({ event, onDelete, onEdit }: Props) {
    return (
        <div className="rounded-xl border bg-white p-4 text-black shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
                <Link href={`/events/${event.id}`}>
                    <h2 className="text-lg font-semibold hover:underline">{event.title}</h2>
                </Link>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-500">{event.description}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                    {event.category}
                </span>
            </div>

            <div className="mt-4 flex gap-2">
                {onEdit && (
                    <button
                        onClick={() => onEdit(event)}
                        className="flex-1 bg-blue-500 text-white py-1.5 rounded-lg text-sm hover:bg-blue-600"
                    >
                        Edit
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(event.id)}
                        className="flex-1 bg-red-500 text-white py-1.5 rounded-lg text-sm hover:bg-red-600"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}
