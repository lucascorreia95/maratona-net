import { FavoriteTypes } from "@/types/favorite-types";
import { useState, useEffect, useCallback } from "react";

interface UseLocalStorageOptions {
  key: string;
  initialValue?: FavoriteTypes[];
}

export function useLocalStorage(options: UseLocalStorageOptions) {
  const { key, initialValue = [] } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [valuesList, setValuesList] = useState<FavoriteTypes[]>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        const parsed = JSON.parse(storedValue) as FavoriteTypes[];
        return Array.isArray(parsed) ? parsed : initialValue;
      }
      return initialValue;
    } catch (error) {
      console.error("Erro ao ler a lista do localStorage:", error);
      return initialValue;
    }
  });

  const updateLocalState = useCallback(() => {
    if (typeof window === "undefined") {
      return valuesList;
    }
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        const parsed = JSON.parse(storedValue) as FavoriteTypes[];
        return Array.isArray(parsed) ? setValuesList(parsed) : valuesList;
      }
      return valuesList;
    } catch (error) {
      console.error("Erro ao ler a lista do localStorage:", error);
      return valuesList;
    }
  }, [key, valuesList]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(valuesList));
      } catch (error) {
        console.error("Erro ao gravar informações no localStorage:", error);
      }
    }

    setIsLoading(false);
  }, [key, valuesList]);

  const valueExists = useCallback(
    (idValue: number): boolean => {
      return valuesList.some((value) => value.id === idValue);
    },
    [valuesList]
  );

  const addValue = useCallback(
    (newValue: FavoriteTypes) => {
      if (valueExists(newValue.id)) return;
      updateLocalState();
      setValuesList((prevList: FavoriteTypes[]) => [...prevList, newValue]);
    },
    [valueExists, updateLocalState, setValuesList]
  );

  const removeValue = useCallback(
    (idToRemove: number) => {
      setValuesList((prevList) =>
        prevList.filter((value) => value.id !== idToRemove)
      );
    },
    [setValuesList]
  );

  const clearList = useCallback(() => {
    setValuesList([]);
  }, [setValuesList]);

  return {
    valuesList,
    addValue,
    removeValue,
    valueExists,
    clearList,
    setValuesList,
    isLoading,
  };
}
