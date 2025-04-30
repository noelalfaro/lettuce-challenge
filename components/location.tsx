import Charcuterie from "@/public/Assets/Charcuterie.png";
import Image from "next/image";

export function Location() {
  return (
    <div className="bg-primary flex w-full flex-col lg:flex-row">
      <div className="relative hidden w-1/2 md:w-2/3 lg:flex lg:w-1/2">
        <Image
          src={Charcuterie}
          alt="charcuterie.png"
          width={0}
          height={0}
          style={{
            width: "100%",

            objectFit: "contain",
          }}
        />
      </div>
      <div className="text-primary-foreground flex w-full items-center justify-center p-[2rem] lg:w-1/2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text font-heading text-3xl">Mon Ami Gabi Chicago</h3>
            <h4 className="italic">
              <a href="#">Change Location</a>
            </h4>
          </div>

          <div className="flex w-full justify-between font-normal">
            <div className="flex flex-col">
              <p>Mon - Thu</p>
              <p>Fri - Sat</p>
              <p>Sun Brunch</p>
              <p>Sunday</p>
            </div>
            <div className="flex flex-col text-end">
              <p>5:00pm - 9:30pm</p>
              <p>5:00pm - 10:30pm</p>
              <p>10:00am - 2:00pm</p>
              <p>5:00pm - 8:30pm</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="background"
                stroke="#2F3B44"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <p>Contact Us</p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="background"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p>773.348.8886</p>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="background"
                width="24"
                height="24"
                viewBox="0 0 90 90"
              >
                <g>
                  <path d="m50 10c-14.551 0-26.391 11.84-26.391 26.391 0 10.379 13.09 31.172 20.898 42.641 1.2383 1.8203 3.2891 2.9102 5.4883 2.9102 2.1992 0 4.25-1.0898 5.4883-2.9102 7.8086-11.469 20.898-32.25 20.898-42.641 0-14.551-11.84-26.391-26.391-26.391zm0 39.578c-7.2695 0-13.18-5.9219-13.18-13.191s5.9102-13.18 13.18-13.18 13.18 5.9102 13.18 13.18-5.9102 13.191-13.18 13.191z" />
                  <path d="m37.32 75.238c-6.8086 1.8516-8.3398 7.5391-1.9297 11.328 4.5312 2.6016 9.6289 3.3398 14.609 3.4219 6.0703-0.19922 13.34-1.0508 17.641-6.0508 2-2.5391 0.98047-5.6406-1.5781-7.2109-1.0586-0.71094-2.2188-1.1289-3.3789-1.5 9.7305 5.8281 1.4609 10.141-5.7383 11.199-4.5586 0.76172-9.3203 0.76172-13.879 0-7.2188-1.0703-15.461-5.3906-5.7383-11.211z" />
                </g>
              </svg>
              <p>
                2300 N. Lincoln Park West <br /> Chicago IL 60614
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
