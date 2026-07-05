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

function ImageSection() {
	return (
		<img
			className="block aspect-video w-120 rounded-base lg:col-span-6 lg:w-auto xl:col-span-6 xl:col-start-7"
			src="./hero.jpg"
			alt=""
		/>
	);
}
