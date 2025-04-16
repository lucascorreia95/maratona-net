"use client";
import { updateDataFromServer } from "@/actions";
import { Menu } from "@/components/Menu";

const list = [
  { name: "Populares" },
  {
    name: "Mais Bem Aavaliados",
  },
  { name: "Nos Cinemas" },
  {
    name: "Lançado em Breve",
  },
];

export function MoviesModule() {
  const handleMenuItemClick = async (name: string) => {
    console.log("client side", name);
    console.log(await updateDataFromServer(name));
  };

  return (
    <div>
      <Menu list={list} onMenuChange={handleMenuItemClick} />
      <h1>Modulo dos filmes!</h1>
    </div>
  );
}
