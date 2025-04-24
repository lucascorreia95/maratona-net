import { Heart } from "@/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../SearchInput";

export function Header() {
  return (
    <header
      className="flex-1 flex flex-col items-center justify-between p-4"
      pulse-shadow="true"
    >
      <div className="flex-1 w-full flex flex-row justify-between flex-wrap gap-3 lg:grid grid-cols-3">
        <Link href="/">
          <h1 className="flex items-center justify-center gap-2">
            <Image
              src="/images/logo.png"
              width={30}
              height={40}
              alt="MaratonaNET Logo"
            />
            <span className="text-xl md:text-2xl font-semibold">
              Maratona<span className="text-amber-500">NET</span>
            </span>
          </h1>
        </Link>

        <div className="w-full order-3 lg:order-0">
          <SearchInput />
        </div>

        <Link
          href="/favorites"
          className="text-md font-semibold flex justify-center items-center gap-2"
        >
          <span>
            <span className="hidden sm:inline">Ver Meus </span>Favoritos!
          </span>
          <Heart />
        </Link>
      </div>
    </header>
  );
}
