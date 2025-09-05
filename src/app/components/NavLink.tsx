"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";


type Props = {
    href: string;
    children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "px-3 py-2 rounded-xl text-sm font-medium transition",
                active
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
            )}
            aria-current={active ? "page" : undefined}
        >
            {children}
        </Link>
    );
}
