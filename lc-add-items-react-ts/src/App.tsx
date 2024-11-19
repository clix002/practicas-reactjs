import "./App.css";
import Item from "./components/Item";
import { useItems } from "./hooks/useItems";
import { useSEO } from "./hooks/useSEO";

export type itemId = `${string}-${string}-${string}-${string}-${string}`;

export interface Item {
  id: itemId;
  timestamp: number;
  text: string;
}

// const INITIAL_ITEMS = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "VideoJuegos 🎮",
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Libros 📚",
//   },
// ];

function App() {
  const { items, addItem, removeItem } = useItems();
  useSEO({
    title: `[${items.length}]Prueba tecnica de React`,
    description: "Añadir y eliminar elementos de una lista",
  });

  // una manera no controlada
  //  lo bueno es el tema del rendimiento
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // acceder al que inicia el evento

    const { elements } = event.currentTarget;
    // sabesmos que es form y sacamos el input
    const input = elements.namedItem("item");

    // validar que exista el input (que sea un HTMLInputElement)
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input === null) return;
    addItem(input.value);

    // resetear input
    input.value = "";
  };

  // esta funcion genera
  // pero es creada cuando llamamos con ()=> function(id) f directa
  /*
  const handleDelete = (id: itemId) => {
    setIems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };
  */

  // crear y generar la funcion
  const handleDelete2 = (id: itemId) => () => {
    removeItem(id);
  };

  return (
    <main>
      <aside>
        <h1>React + Ts</h1>
        <h2>Añaidr y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
          <label htmlFor="">
            Elemento a introducir:
            <input
              type="text"
              name="item"
              required
              placeholder="ir a comprar pan 🍞"
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de Elementos </h2>

        {items.length === 0 ? (
          <strong>No hay elementos en la lista !</strong>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <Item
                  {...item}
                  key={item.id}
                  handleDelete2={handleDelete2(item.id)}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
