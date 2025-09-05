
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="flex justify-between items-center mx-auto p-4 shadow bg-white dark:bg-gray-900">
            <nav className="space-x-4 mx-auto">
                <Link href="/">Home</Link>
                <Link href="/create">Create Event</Link>
                <Link href="/my-events">My Events</Link>
            </nav>
            <ThemeToggle />
        </header>
    );
}
