import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "#/components/home/hero";
import { Section } from "#/components/ui/section";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<>
			<Hero />
			<LocationsSection />
		</>
	);
}

function LocationsSection() {
	return (
		<Section id="locations" header="Locations" subheader="Find Us" color="light">
			Hello
		</Section>
	);
}
