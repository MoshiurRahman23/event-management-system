
"use client";

import { useEffect, useState } from "react";
import EventCard from "./components/EventCard";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
};

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ? true : event.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border rounded-xl focus:outline-none focus:ring"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-1/3 px-3 py-2 bg-stone-500 border rounded-xl focus:outline-none focus:ring"
        >
          <option value="All">All Categories</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Meetup">Meetup</option>
        </select>
      </div>

      {/* Event List */}
      {filteredEvents.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No events found.</p>
      )}
    </section>
  );
}
