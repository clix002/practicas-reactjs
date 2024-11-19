import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

// Imaginate que puedes hacer un test(solo un test) a tu aplicacion que test arias?
// respuesta: e2e  --> punta a punta
// evalúa el funcionamiento de una aplicación completa desde la perspectiva del usuario

describe("<App/>", () => {
  test("should add item and remove  item", async () => {
    const user = userEvent.setup();

    render(<App />);
    // buscar el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // buscar el formulario
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    const randomText = crypto.randomUUID();

    await user.type(input, randomText);
    await user.click(button!);
    // await user.type(input, "mejia");
    // await user.click(button!);

    // asegurar que el elemento sea cuargado
    const list = screen.getByRole("list");
    expect(list).toBeDefined();
    // expect(list.childNodes.length).toBe(2);
    expect(list.childNodes.length).toBe(1);

    // asegurar que la podemos borrar
    const item = screen.getByText(randomText);
    const removeButton = item.querySelector("button");
    expect(removeButton).toBeDefined();

    await user.click(removeButton!);

    // si fuardamos un text y leuego borramos y al llamar el texto que muestra cuando no hay elementos exista
    // TODO: solo agrega run elemento y comprobar que solo hay un hijo
    const noResults = screen.getByText("No hay elementos en la lista !");
    expect(noResults).toBeDefined();
  });
});
