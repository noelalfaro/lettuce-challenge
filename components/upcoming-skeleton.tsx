import { Card, CardHeader, CardFooter } from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

export function UpcomingSkeleton() {
  return (
    <div className="min-h-[900px] p-[2rem]">
      <h3 className="font-heading mb-3 text-center text-3xl">
        Upcoming Events
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            className="grid-cols-1 justify-start gap-4 px-0 pt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <CardHeader className="flex grow flex-col gap-1 px-0">
              <Skeleton className="h-[200px] w-full rounded" />
              <div className="mt-3.5 flex flex-col gap-1 px-4">
                <Skeleton className="h-[30px] w-[250px]" />
                <Skeleton className="h-[20px] w-[100px]" />
              </div>
            </CardHeader>
            <CardFooter className="flex-wrap items-start gap-2 px-4">
              <Skeleton className="h-[40px] w-[100px]" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
