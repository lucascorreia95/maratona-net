import { ExternalLink } from "@/icons/ExternalLink";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="flex-1 flex flex-col items-center justify-between p-4"
      pulse-shadow="true"
    >
      <div className="flex-1 w-full grid grid-cols-3">
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

        <span className="text-base font-semibold text-center flex justify-center items-center">
          Encontre algo legal para assistir!
        </span>

        <Link
          href="https://github.com/lucascorreia95/maratona-net"
          target="_blank"
          className="text-md font-semibold flex justify-center items-center gap-2"
        >
          <span>Repositorio GitHub</span>
          <ExternalLink />
        </Link>
      </div>
    </header>
  );
}
