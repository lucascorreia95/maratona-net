import Image from "next/image";

export function Header() {
  return (
    <header className="flex-1 flex flex-col items-center justify-between p-4">
      <div className="flex-1 w-full grid grid-cols-3">
        <h1 className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="MaratonaNET Logo"
          />
          <span className="text-2xl font-semibold">MaratonaNET</span>
        </h1>
        <span className="text-2xl font-semibold text-center">
          Seu catálogo online de séries e filmes!
        </span>
        <span className="text-2xl font-semibold flex justify-end">
          github do projeto???
        </span>
      </div>
      <div className="h-1 w-14 rounded-2xl bg-gray-600" />
    </header>
  );
}
