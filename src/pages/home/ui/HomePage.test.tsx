import { screen, render } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("Home Page", () => {
	it("should display 'Home Page'", () => {
		render(<HomePage />);

		expect(screen.getByText("Home Page")).toBeInTheDocument();
	});
});
