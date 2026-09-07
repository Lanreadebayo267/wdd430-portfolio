import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-900 text-white shadow-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-tight hover:text-slate-300"
                >
                    Lanre Adebayo
                </Link>

                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                          href="/"
                          className="transition hover:text-slate-300"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                          href="/about"
                          className="transition hover:text-slate-300"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}