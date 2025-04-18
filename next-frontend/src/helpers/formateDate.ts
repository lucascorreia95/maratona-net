export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("pt-BR", options);
  } catch (error) {
    console.error("Erro ao formatar a data:", error);
    return "Data inválida";
  }
}
