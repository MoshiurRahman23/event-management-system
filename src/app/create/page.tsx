"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getMyEvents, saveMyEvents, Event } from "../lib/storage";

export default function CreateEventPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
        location: "",
        category: "Conference",
    });
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!form.title || !form.description || !form.date || !form.location) {
            setError("All fields are required.");
            return;
        }

        const events = getMyEvents();
        const newEvent: Event = {
            id: Date.now(),
            ...form,
        };
        saveMyEvents([...events, newEvent]);

        // Redirect to "My Events"
        router.push("/my-events");
    };

    return (
        <section className="max-w-xl min-h-screen mx-auto space-y-4">
            <h1 className="text-2xl font-bold">Create Event</h1>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-xl"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-xl"
                />

                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-xl"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-xl"
                />

                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 bg-stone-500 rounded-xl"
                >
                    <option value="Conference">Conference</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Meetup">Meetup</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800"
                >
                    Create Event
                </button>
            </form>
        </section>
    );
}
