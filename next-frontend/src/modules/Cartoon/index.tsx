"use client";
import { Menu } from "@/components/Menu";
import { Loading, ShowCase } from "@/components/ShowCase";
import useDiscover from "@/hooks/useDiscover";
import { Error } from "@/icons/Error";
import { CartoonCategories } from "@/types/cartoon-categories";
import { Categories } from "@/types/category-types";
import { ShowType } from "@/types/show-types";
import { useCallback, useState } from "react";

const list = [CartoonCategories.POPULAR, CartoonCategories.TOP_RATED];

export function CartoonModule() {
  const [category, setCategory] = useState<Categories>(
    CartoonCategories.POPULAR
  );
  const { data, error, loading } = useDiscover(ShowType.CARTOON, category);

  const handleMenuItemClick = useCallback((name: Categories) => {
    setCategory(name);
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 w-full p-12">
        <span className="text-2xl text-center font-semibold text-gray-500">
          Tivemos um erro ao carregar os desenhos animados.
        </span>
        <span className="font-semibold text-gray-500">
          Tente novamente mais tarde.
        </span>
        <Error />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full w-max-full">
      <h2 className="text-xl md:text-3xl text-center font-semibold mb-4">
        Veja a vitrine das animações!
      </h2>
      <div className="h-1 w-14 rounded-2xl bg-gray-600" />
      <Menu list={list} onMenuChange={handleMenuItemClick} />
      {loading ? (
        <Loading />
      ) : (
        <ShowCase list={data!.results} type={ShowType.TV} />
      )}
    </div>
  );
}
