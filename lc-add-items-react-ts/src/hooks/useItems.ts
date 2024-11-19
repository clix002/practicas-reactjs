import { useState } from "react";
import { itemId, type Item } from "../App";

export const useItems = () => {
  const [items, setIems] = useState<Item[]>([]);
  const addItem = (text: string) => {
    // creamos en nuevo objeto
    // accedesmos a value de input para text
    const newItem: Item = {
      id: crypto.randomUUID(),
      text: text,
      timestamp: Date.now(),
    };

    // actualizamos estado
    setIems((prevState) => {
      return [...prevState, newItem];
    });
  };

  const removeItem = (id: itemId) => {
    setIems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return {
    items,
    addItem,
    removeItem,
  };
};
