import { HomePage } from "@/pages/home";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	}
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
