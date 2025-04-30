"use client";
import Image from "next/image";
import salmon from "@/public/Assets/MAG-Salmon_Anjali Pinto.jpg";
import eventcharcuterie from "@/public/Assets/Charcuterie-7151.jpg";
import { useForm, formOptions } from "@tanstack/react-form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Reservation() {
  interface Reservation {
    people: string;
    date: Date | undefined;
    time: string;
  }

  const defaultReservation: Reservation = {
    people: "",
    date: undefined,
    time: "",
  };

  const partySizeOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  const timeOptions = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formOpts = formOptions({
    defaultValues: defaultReservation,
    validators: {
      onSubmit: ({ value }: { value: Reservation }) => {
        const errors: Partial<Record<keyof Reservation, string>> = {};
        if (!value.people) {
          errors.people = "Please select party size";
        }
        if (!value.time) {
          errors.time = "Please select a time";
        }
        if (!value.date) {
          errors.date = "Please select a date";
        }

        const hasErrors = Object.keys(errors).length > 0;
        return hasErrors ? { fields: errors } : undefined;
      },
    },
  });

  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      console.log(
        "Date of Reservation:",
        value.date ? format(value.date, "MM-dd-yyyy") : undefined
      );
      console.log("Number of Guests: " + value.people);
      console.log("Time of reservation: " + value.time);

      alert("Reservation details logged to console!");
    },
  });

  return (
    <>
      <div className="flex w-full flex-col-reverse md:flex-row">
        <div className="bg-card font-heading mb-4 flex w-full content-center items-center justify-center font-bold md:mb-0 md:w-1/2">
          <div className="flex w-full flex-col p-[2rem] text-center text-3xl md:w-fit">
            <h3 className="my-2 font-normal">Make a Reservation</h3>
            <div className="mt-3 w-full">
              <form.Field
                name="people"
                children={(field) => (
                  <>
                    <label htmlFor={field.name} className="sr-only">
                      Number of Guests
                    </label>
                    <select
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-background font-body w-full border p-2 text-center text-lg font-normal"
                    >
                      <option value="" disabled>
                        Number of Guests
                      </option>
                      {partySizeOptions.map((size) => (
                        <option key={size} value={size}>
                          {size} {size === 1 ? "person" : "people"}
                        </option>
                      ))}
                    </select>

                    {field.state.meta.errors ? (
                      <em className="font-body block text-left text-sm font-normal text-red-600">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    ) : null}
                  </>
                )}
              />
            </div>
            <div className="mt-3 w-full">
              <form.Field
                name="date"
                children={(field) => (
                  <>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "bg-background font-body w-full justify-center text-center font-normal",
                            !field.state.value && "text-muted-foreground"
                          )}
                        >
                          {field.state.value ? (
                            format(field.state.value, "MMM dd, yyyy")
                          ) : (
                            <span className="text-foreground">Pick a Date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarPicker
                          mode="single"
                          selected={field.state.value}
                          onSelect={(date: Date | undefined) => {
                            field.handleChange(date);
                          }}
                          initialFocus
                          disabled={(date) => date < today}
                        />
                      </PopoverContent>
                    </Popover>
                    {field.state.meta.errors ? (
                      <em className="font-body block text-left text-sm font-normal text-red-600">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    ) : null}
                  </>
                )}
              />
            </div>

            <div className="mt-3 w-full">
              <form.Field
                name="time"
                children={(field) => (
                  <>
                    <select
                      id={field.name}
                      name={field.name}
                      aria-label={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-background font-body w-full border p-2 text-center text-lg font-normal"
                    >
                      <option value="" disabled>
                        Time
                      </option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>

                    {field.state.meta.errors ? (
                      <em className="font-body block text-left text-sm font-normal text-red-600">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    ) : null}
                  </>
                )}
              />
            </div>
            <form.Subscribe
              selector={(state) => [
                state.isValid,
                state.isDirty,
                state.isSubmitting,
              ]}
              children={([isValid, isDirty, isSubmitting]) => (
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 mt-3 w-full py-3 text-base font-normal text-white uppercase"
                  disabled={!isValid || !isDirty || isSubmitting}
                  onClick={form.handleSubmit}
                >
                  {isSubmitting ? "Finding..." : "Find a Table"}
                </Button>
              )}
            />
          </div>
        </div>
        <div className="w-full md:flex md:w-1/2">
          <Image
            src={salmon}
            alt="salmon_anjali.jpg"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}
