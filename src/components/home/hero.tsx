import { Link } from "@tanstack/react-router";

import { buttonVariants } from "#/components/ui/button";
import { H1, Paragraph, Span } from "#/components/ui/text";

export function Hero() {
	return (
		<div className="bg-radial-[at_20%_2%] from-white to-primary-neutral to-150% py-20 lg:py-28">
			<div className="mx-auto grid w-responsive grid-cols-1 gap-8 lg:grid-cols-12 xl:gap-0">
				<div className="flex flex-col gap-8 lg:col-span-6 xl:col-span-5">
					<TextSection />
					<hr className="max-w-120 text-white" />
					<ButtonsSection />
				</div>
				<ImageSection />
			</div>
		</div>
	);
}

function TextSection() {
	return (
		<div className="flex flex-col gap-4">
			<H1 size="5xl" className="leading-[1.05] font-bold lg:text-6xl xl:text-7xl" tone="primary">
				Fresh Laundry.
				<br />
				<Span
					size="5xl"
					className="leading-[1.05] font-bold lg:text-6xl xl:text-7xl"
					tone="primary-neutral">
					Spotless cars.
				</Span>
			</H1>
			<Paragraph tone="gray" size="lg" className="max-w-120 text-pretty">
				Laundry Basket Plus runs bright, modern laundromats and sparkling car washes across the
				city. Drop in, drive through, get on with your day.
			</Paragraph>
		</div>
	);
}

function ButtonsSection() {
	return (
		<div className="flex flex-col gap-3 md:flex-row md:gap-4">
			<Link
				to="/"
				hash="locations"
				activeOptions={{ includeHash: true }}
				className={buttonVariants({ color: "primary" })}>
				<MapMarkerIcon />
				Find Nearby Locations
			</Link>
			<Link
				to="/"
				hash="services"
				activeOptions={{ includeHash: true }}
				className={buttonVariants({ color: "white" })}>
				Explore Services
			</Link>
		</div>
	);
}

function MapMarkerIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-6">
			<path
				fillRule="evenodd"
				d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function ImageSection() {
	return (
		<img
			className="block aspect-video w-120 rounded-base lg:col-span-6 lg:w-auto xl:col-span-6 xl:col-start-7"
			src="./hero.jpg"
			alt=""
		/>
	);
}
