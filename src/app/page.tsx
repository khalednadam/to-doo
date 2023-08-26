import TodooItem from "@/components/TodooItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos(){
	return prisma.todo.findMany();
}

const toggleTodo = async(id: string, complete: boolean) =>{
	"use server"

	await prisma.todo.update({ where: { id }, data: { complete }})
}

export default async function Home() {
	const todos = await getTodos();
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-3xl">To-Doo</h1>
				<Link className="border hover:shadow-gray-200 hover:shadow-2xl transition-all duration-150 px-2 py-1 rounded-lg hover:bg-slate-700 outline-none focus-within:bg-slate-600"
				href="/new">New</Link>
			</header>
			<ul>
				{
					todos.map(todo =>{
						return(
							<TodooItem id={todo.id} complete={todo.complete} title={todo.title} key={todo.id} toggleTodo={toggleTodo} />
						)
					}) 
				}
			</ul>
		</>
	);
}
