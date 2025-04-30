import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Reservation } from "@/components/reservations";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";
import { Upcoming } from "@/components/upcoming";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Reservation />
      <Upcoming />
      <Location />
      <Footer />
    </>
  );
}
