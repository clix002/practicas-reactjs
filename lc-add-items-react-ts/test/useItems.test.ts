import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useItems } from "../src/hooks/useItems";

describe("useItems hook", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems());

    expect(result.current.items.length).toBe(0);

    act(() => {
      result.current.addItem("Jugar video juegos 🎮");
      //result.current.addItem("ir a correr 🏃‍♂️");
    });

    expect(result.current.items.length).toBe(1);

    act(() => {
      result.current.removeItem(result.current.items[0].id);
    });

    expect(result.current.items.length).toBe(0);
  });
});
