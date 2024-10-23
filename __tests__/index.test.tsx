import { render, screen } from "@testing-library/react";
import Home from "app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "App Router",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<Home />);

    const loginLink = screen.getByRole("link");
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });
});
