"use client"

type TodooItemProps = {
	id: string;
	title: string;
	complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void
};
export default function TodooItem({ id, title, complete, toggleTodo }: TodooItemProps) {
	return (
		<li className="flex gap-1 items-center">
			<input
				id={id}
				type="checkbox"
				className="cursor-pointer peer"
				defaultChecked={complete}
                onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className="peer-checked:opacity-60 peer-checked:line-through cursor-pointer"
			>
				{title}
			</label>
		</li>
	);
}
 