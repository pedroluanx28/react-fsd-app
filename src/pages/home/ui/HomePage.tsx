import { getTasks } from "../api/getTasks";
import { TaskList } from "./TaskList";

export function HomePage() {
	const { data: tasks, isLoading, error } = getTasks();

	if (error) return <>{error.message}</>;

	if (isLoading) return <>Carregando...</>;

	return (
		<>
			{!tasks && <strong>Nenhum resultado encontrado</strong>}
			{tasks && <TaskList tasks={tasks} />}
		</>
	);
}
