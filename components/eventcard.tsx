import React from "react";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Event } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card
      key={event.ID}
      className="grid-cols-1 justify-start gap-4 pt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <Image
        src={event.featured_image!.url}
        alt={event.featured_image?.alt_text!}
        width={0}
        height={0}
        priority
        unoptimized={true}
        style={{
          maxHeight: "200px",
          width: "100%",
          height: "auto",
          minHeight: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      />
      <CardHeader className="bg-card gap-1 px-4">
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <div className="flex w-full justify-between">
          {event.date && (
            <CardDescription className="mr-2">{event.date}</CardDescription>
          )}

          <div className="flex grow gap-2">
            {event.cities.map((city) => (
              <Badge variant={"outline"} key={`${event.ID}-${city}`}>
                {city}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      <Dialog>
        <CardFooter className="flex-wrap items-start gap-2 px-4">
          <DialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex h-9 shrink-0 cursor-pointer items-center justify-center gap-2 px-4 py-2 text-base font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            Read More
          </DialogTrigger>

          <DialogContent aria-description="Dialog showcasing event information">
            <DialogHeader>
              <DialogTitle className="text-xl">{event.title}</DialogTitle>

              <DialogDescription className="flex w-full justify-center gap-2 md:justify-start">
                {event.date ? event.date : null}
                {event.cities.map((city) => (
                  <Badge variant={"outline"} key={`${event.ID}-${city}`}>
                    {city}
                  </Badge>
                ))}
              </DialogDescription>
            </DialogHeader>
            <div
              className="prose prose-sm"
              dangerouslySetInnerHTML={{
                __html: event.content.replace(/\r\n|\n|\r/g, "<br />"),
              }}
            />
            {event.cta_url && (
              <Link href={event.cta_url}>
                <Button className="text-base">{event.cta_btn}</Button>
              </Link>
            )}
          </DialogContent>

          {event.cta_url && (
            <Link href={event.cta_url}>
              <Button className="text-base">{event.cta_btn}</Button>
            </Link>
          )}
        </CardFooter>
      </Dialog>
    </Card>
  );
}

export default EventCard;
