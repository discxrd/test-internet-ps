import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timestampToDate(timestamp: number) {
  const date = new Date(timestamp);

  return (
    date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
    }) +
    " " +
    date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
}
