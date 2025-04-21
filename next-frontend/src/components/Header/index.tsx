import { Heart } from "@/icons/Heart";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="flex-1 flex flex-col items-center justify-between p-4"
      pulse-shadow="true"
    >
      <div className="flex-1 w-full md:grid grid-cols-3">
        <Link href="/">
          <h1 className="flex items-center justify-center gap-2">
            <Image
              src="/images/logo.png"
              width={30}
              height={40}
              alt="MaratonaNET Logo"
            />
            <span className="text-2xl font-semibold">
              Maratona<span className="text-amber-500">NET</span>
            </span>
          </h1>
        </Link>

        <span className="text-base text-center md:flex justify-center items-center hidden">
          Encontre algo legal para assistir!
        </span>

        <Link
          href="/favorites"
          className="text-md font-semibold md:flex justify-center items-center gap-2 hidden"
        >
          <span>Ver Meus Favoritos!</span>
          <Heart />
        </Link>
      </div>
    </header>
  );
}
