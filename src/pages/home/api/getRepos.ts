import { useQuery } from "@tanstack/react-query";

import { backend } from "@/shared/api";

type Category = {
	id: number;
	name: string;
};

export type Task = {
	id: number;
	categoryId: number;
	title: string;
	description: string;
	completed: boolean;
	category: Category;
	createdAt: string;
	updatedAt: string;
};

export function getRepos() {
	return useQuery<Task[]>({
		queryKey: ["taskData"],
		async queryFn() {
			const { data } = await backend.get("/task");

			return data;
		}
	});
}
