"use client";

import { useEffect, useState } from "react";
import { deleteEvent, getMyEvents, updateEvent, Event } from "../lib/storage";
import EventCard from "../components/EventCard";
import EditEventModal from "../components/EditEventModal";


export default function MyEventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [editing, setEditing] = useState<Event | null>(null);

    useEffect(() => {
        setEvents(getMyEvents());
    }, []);

    const handleDelete = (id: number) => {
        const updated = deleteEvent(id);
        setEvents(updated);
    };

    const handleSave = (updatedEvent: Event) => {
        const updated = updateEvent(updatedEvent);
        setEvents(updated);
    };


    return (
        <section className="space-y-4 min-h-screen">
            <h1 className="text-2xl font-bold">My Events</h1>

            {events.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            onDelete={handleDelete}
                            onEdit={setEditing}
                        />
                    ))}
                </div>

            ) : (
                <p className="text-gray-500">You have not created any events yet.</p>
            )}
            {editing && (
                <EditEventModal
                    event={editing}
                    onClose={() => setEditing(null)}
                    onSave={handleSave}
                />
            )}
        </section>
    );
}
