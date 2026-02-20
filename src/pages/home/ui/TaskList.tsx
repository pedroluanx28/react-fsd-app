import type { Task } from "@/pages/home/api/getTasks";

type Props = {
	tasks: Task[];
};

export function TaskList({ tasks }: Props) {
	return tasks.map((task) => {
		const categoryName = task.category.name;

		return (
			<ul>
				<li>Título: {task.title}</li>
				<li>Descrição: {task.description}</li>
				<li>Categoria: {categoryName}</li>
			</ul>
		);
	});
}
