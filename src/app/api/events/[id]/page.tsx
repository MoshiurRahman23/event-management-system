
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
};

export default function EventDetailsPage() {
  const { id } = useParams(); // dynamic [id]
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (!id) return;

    // Fetch from API
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event) {
    return <p className="text-gray-500">Loading event details...</p>;
  }

  return (
    <section className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
      <div className="space-y-2 text-sm">
        <p>📅 <strong>Date:</strong> {event.date}</p>
        <p>📍 <strong>Location:</strong> {event.location}</p>
        <p>🏷️ <strong>Category:</strong> {event.category}</p>
      </div>
    </section>
  );
}
