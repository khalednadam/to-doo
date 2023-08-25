import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-3xl">To-Doo</h1>
				<Link className="border hover:shadow-gray-200 hover:shadow-2xl transition-all duration-150 px-2 py-1 rounded-lg hover:bg-slate-700 outline-none focus-within:bg-slate-600"
				href="/new">New</Link>
			</header>
			<ul>
				
			</ul>
		</>
	);
}
