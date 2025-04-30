import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Event } from "@/lib/types";
import { parse, isValid } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch(
    "https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events"
  );

  if (!response.ok) throw new Error(`HTTP Error - Status: ${response.status}`);

  const data = await response.json();

  return data as Event[];
}
export function parseEventDate(dateString: string | null): Date | null {
  if (!dateString) {
    return null;
  }

  try {
    const formatString = "MMMM do, yyyy";

    const parsedDate = parse(dateString, formatString, new Date());

    if (isValid(parsedDate)) {
      return parsedDate;
    } else {
      console.warn(
        `parseEventDate: Failed to parse date string "${dateString}" with format "${formatString}"`
      );
      return null;
    }
  } catch (error) {
    console.error(
      `parseEventDate: Unexpected error processing date "${dateString}"`,
      error
    );
    return null;
  }
}
