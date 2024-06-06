import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Contact from "../Pages/Contact";

describe("Testing Contact component", () => {
  test("Should render h1 tag", () => {
    render(<Contact />);
    const title = screen.getByText(/envianos tu consulta/i);
    expect(title).toBeVisible();
  });
  test("Should render first input", () => {
    render(<Contact />);
    const email = screen.getByRole("email");
    expect(email).toBeDefined();
  });
  test("Should change second input", () => {
    render(<Contact />);
    const mensaje = screen.getByTestId("consulta");
    fireEvent.change(mensaje, {
      target: { value: "Hacen recetas para dieta keto" },
    });
    // mensaje.value = "Hacen recetas para dieta keto"
    expect(mensaje.value).toBe("Hacen recetas para dieta keto");
  });
  test("Should fire callback from button", () => {
    const handleClick = vi.fn();
    render(<Contact onClick={handleClick} />);
    const btn = screen.getByText("Enviar");
    fireEvent.click(btn);
    expect(handleClick).toBeCalledTimes(1);
  });
});
