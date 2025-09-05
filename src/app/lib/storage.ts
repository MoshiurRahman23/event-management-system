export type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    category: string;
};

const STORAGE_KEY = "my-events";

export function getMyEvents(): Event[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveMyEvents(events: Event[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function deleteEvent(id: number) {
    const events = getMyEvents().filter((event) => event.id !== id);
    saveMyEvents(events);
    return events;
}

export function updateEvent(updated: Event) {
    const events = getMyEvents().map((e) => (e.id === updated.id ? updated : e));
    saveMyEvents(events);
    return events;
}
