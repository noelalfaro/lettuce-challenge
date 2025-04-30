"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents, parseEventDate } from "@/lib/utils";
import { Event } from "@/lib/types";
import EventCard from "@/components/eventcard";
import { compareAsc } from "date-fns";
import { useMemo, useState } from "react";
import { UpcomingSkeleton } from "@/components/upcoming-skeleton";
import { Button } from "@/components/ui/button";

export function Upcoming() {
  const { data, error, isLoading } = useQuery<Event[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const processedEvents = useMemo(() => {
    if (!data) return [];

    const cityFilteredEvents = selectedCity
      ? data.filter((event) => event.cities.includes(selectedCity))
      : data;

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const relevantEvents = cityFilteredEvents
      .map((event) => ({
        ...event,
        parsedDate: parseEventDate(event.date),
      }))
      .filter((event) => {
        return !event.parsedDate || event.parsedDate >= now;
      });

    relevantEvents.sort((a, b) => {
      const dateA = a.parsedDate;
      const dateB = b.parsedDate;

      if (dateA && !dateB) return -1;

      if (!dateA && dateB) return 1;

      if (!dateA && !dateB) return 0;

      if (dateA && dateB) {
        return compareAsc(dateA, dateB);
      }

      return 0;
    });

    return relevantEvents;
  }, [data, selectedCity]);

  const uniqueCities = useMemo(() => {
    if (!data) return [];

    let citiesSet = new Set<string>();

    data.forEach((event) => {
      if (Array.isArray(event.cities))
        event.cities.forEach((city) => {
          citiesSet.add(city);
        });
    });

    const cityArray = Array.from(citiesSet);
    cityArray.sort();

    return cityArray;
  }, [data]);

  if (isLoading) return <UpcomingSkeleton />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="h-fit min-h-[900px] p-[2rem]">
        <h3 className="font-heading mb-3 text-center text-3xl">
          Upcoming Events
        </h3>
        <div className="mb-2 flex w-full justify-center gap-2">
          <Button
            variant={"ghost"}
            className={`${selectedCity === null ? "bg-primary text-background" : ""}`}
            onClick={() => setSelectedCity(null)}
          >
            All
          </Button>
          {uniqueCities &&
            uniqueCities.map((city) => (
              <Button
                variant={"ghost"}
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`${selectedCity === city ? "bg-primary text-background" : ""}`}
              >
                {city}
              </Button>
            ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {processedEvents &&
            processedEvents.map((event: Event) => (
              <EventCard key={event.ID} event={event} />
            ))}
        </div>
      </div>
    </>
  );
}
