import { Header } from "@/components/ui/header";
import { About } from "@/components/ui/about";
import { Reservation } from "@/components/ui/reservations";
import { Location } from "@/components/ui/location";
import { Footer } from "@/components/ui/footer";
export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Reservation />
			<Location />
			<Footer />
		</>
	);
}
