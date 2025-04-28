import Image from "next/image";
import farmers_market from "@/public/Assets/FarmersMarket_-2797.jpg";
import mag from "@/public/Assets/MAG-382.jpg";
import mag_mushroom from "@/public/Assets/MAG-MushroomPasta-1578.jpg";

export function About() {
	return (
		<div className="mb-10 flex h-fit w-full flex-col items-start justify-center p-[2rem] md:flex-row">
			<div className="flex flex-wrap items-center justify-between gap-2 md:hidden">
				<Image
					src={farmers_market}
					width={0}
					height={0}
					style={{ width: "55%", height: "auto", objectFit: "contain" }}
					alt="farmers_market.jpg"
				/>
				<Image
					src={mag_mushroom}
					width={0}
					height={0}
					style={{ width: "40%", height: "auto", objectFit: "contain" }}
					alt="mag_mushroom.jpg"
				/>
				<Image
					src={mag}
					width={0}
					height={0}
					style={{ width: "100%", height: "auto", objectFit: "contain" }}
					alt="mag.jpg"
				/>
			</div>
			<div className="hidden w-1/2 flex-wrap items-end justify-end gap-6 self-start md:flex lg:self-center ">
				<Image
					src={farmers_market}
					width={0}
					height={0}
					priority
					style={{ width: "60%", height: "auto", objectFit: "contain" }}
					alt="farmers_market.jpg"
				/>
				<Image
					src={mag_mushroom}
					width={0}
					height={0}
					priority
					style={{ width: "30%", height: "auto", objectFit: "contain" }}
					alt="mag_mushroom.jpg"
				/>
				<Image
					src={mag}
					width={0}
					height={0}
					priority
					style={{ width: "80%", height: "auto", objectFit: "contain" }}
					alt="mag.jpg"
				/>
			</div>
			<div className="xl:p-15 flex w-full flex-col  md:w-1/2 md:justify-center md:p-10 lg:max-w-[480px] lg:p-12 2xl:self-center">
				<h3 className="font-heading my-3 text-2xl md:my-2">About</h3>
				<div>
					<p className="inline font-light">
						Mon Ami Gabi is a classic French bistro that embraces a passion for
						food, wine and culture. Whether you come for the Onion Soup Au
						Gratin, Steak Frites or decadent Profiteroles, Mon Ami Gabi offers
						something to satisfy all tastes. For those looking to indulge in a{" "}
					</p>
					<p className="inline italic text-[#751a2b]">unique dish</p>,
					<p className="inline font-light">
						{" "}
						the Escargots de Bourgogne with garlic-herb butter is literally a
						sizzling experience. <br /> <br />
						To complement the menu, an extensive selection of more than{" "}
					</p>
					<p className="inline italic text-[#751a2b]">
						80 boutique French wine varietals
					</p>
					,
					<p className="inline font-light">
						{" "}
						handpicked by renowned chef and owner Gabino Sotelino, are served by
						the glass or bottle from our signature rolling wine cart. <br />{" "}
						<br /> While the favorites are here in abundance, there&apos;s
						always something new when you&apos;re ready to fall in love all over
						again.
					</p>
				</div>
			</div>
		</div>
	);
}
