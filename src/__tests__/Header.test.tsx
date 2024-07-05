import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

it("Debería mostrar un encabezado con nombre, perfil de nombre de usuario e imagen de perfil.", () => {
  render(<Header name="Jhon Doe" profileImage="/images/profile.jpg" />);
  expect(screen.getByText("Jhon Doe")).toBeInTheDocument();
  expect(screen.getByText("@JhonDoe")).toBeInTheDocument();
});
