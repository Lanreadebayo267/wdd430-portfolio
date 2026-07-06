import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-green-700 text-white shadow-md">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl font-bold">
                    Lanre Adebayo Portfolio
                </h1>

                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/" className="hover:text-gray-200">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" className="hover:text-gray-200">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}