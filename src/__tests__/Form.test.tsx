import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm/ContactForm";

describe("ContactForm", () => {
  it("renderiza el formulario de contacto con los campos obligatorios", () => {
    render(
      <>
        <ContactForm />
      </>
    );

    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });

  it("muestra errores de validación cuando los campos se dejan vacíos", async () => {
    render(
      <>
        <ContactForm />
      </>
    );

    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    expect(
      await screen.findByText(/El nombre es requerido/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El correo es requerido/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El mensaje es requerido/i)
    ).toBeInTheDocument();
  });
});
