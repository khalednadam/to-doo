import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length === 0 ){
        throw new Error("Invalid title");
    }

    await prisma.todo.create({ data: { title: title, complete: false } });
    redirect("/");
}

export default function Page() {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-3xl">Add new todoo</h1>
			</header>
			<form className="flex flex-col gap-2" action={createTodo} >
				<input
					placeholder="new note..."
					type="text"
					name="title"
					className="border border-slate-300 bg-transparent rounded-lg px-2 py-1 outline-none focus-within:border-slate-100"
				/>
                <div className="flex justify-end items-center gap-2">
				<Link
					className="border hover:shadow-gray-200 hover:shadow-2xl transition-all duration-150 px-2 py-1 rounded-lg hover:bg-slate-700 outline-none focus-within:bg-slate-600"
					href="/"
				>
					Cancel
				</Link>
                <button formAction={createTodo} className="border hover:shadow-gray-200 hover:shadow-2xl transition-all duration-150 px-2 py-1 rounded-lg hover:bg-slate-700 outline-none focus-within:bg-slate-600" type="submit">
                    Create
                </button>
                </div>
			</form>
		</>
	);
}
