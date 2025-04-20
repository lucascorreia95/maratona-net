import { ExternalLink } from "@/icons/ExternalLink";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 mb-4">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <p className="text-base text-gray-500">Feito por Lucas Correia</p>
        <Link
          href="https://github.com/lucascorreia95/maratona-net"
          target="_blank"
          className="text-sm text-gray-500 flex justify-center items-center gap-2"
        >
          <span>Repositorio GitHub</span>
          <ExternalLink color="#6a707d" />
        </Link>
        <p className="text-sm text-gray-500">
          © 2025 Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
