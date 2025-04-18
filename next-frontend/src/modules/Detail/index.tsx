import { BackDrop } from "@/components/BackDrop";
import { Cast } from "@/components/Cast";
import Image from "next/image";

export default function DetailModule({ id }: { id: string }) {
  return (
    <div className="relative flex flex-row items-center justify-center gap-2 w-full max-w-full p-11">
      <BackDrop
        imgSrc="https://image.tmdb.org/t/p/w1920/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg"
        width={1920}
        height={1080}
        imgAlt="movie poster"
      />
      <div className="rounded-lg overflow-hidden flex-[0_0_auto]">
        <Image
          src={
            "https://image.tmdb.org/t/p/w500/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg"
          }
          width={500}
          height={750}
          alt="movie poster"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-3 max-w-full">
        <h1 className="text-4xl font-bold">Movie Title</h1>

        <span className="text-sm">Apr 18, 2025</span>
        <span>Aprovacao: 8.584%</span>

        <span className="text-lg font-semibold">
          Drama | Action | Adventure | Sci-Fi
        </span>

        <p className="text-base mt-2 mb-8 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quisquam voluptatibus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam voluptatibus, quisquam
          voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam voluptatibus, quisquam voluptatibus.
        </p>
        <Cast />
        <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded font-semibold">
          Acessar pagina
        </button>
      </div>
    </div>
  );
}
