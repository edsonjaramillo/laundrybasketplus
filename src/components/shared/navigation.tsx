import { Link } from "@tanstack/react-router";

import { textVariants } from "#/components/ui/text";
import { cn } from "#/lib/cn";
import { useMobileMenu } from "#/lib/context";

export const links = [
	{ name: "Locations", to: "/locations" },
	{ name: "About", to: "/about" },
	{ name: "Contact", to: "/contact" },
] as const;

function MobileNavigation() {
	return (
		<nav className="fixed block h-navigation w-full bg-white md:hidden">
			<div className="mx-auto flex h-full w-responsive items-center justify-between">
				<Link to="/">Logo</Link>
				<HamburgerMenu />
			</div>
			<MobileMenu />
		</nav>
	);
}

function DesktopNavigation() {
	return (
		<nav className="fixed hidden h-navigation w-full bg-white md:block">
			<div className="mx-auto flex h-full w-responsive items-center justify-between">
				<Link to="/">Logo</Link>
				<div className="flex gap-8">
					{links.map((link) => (
						<DesktopLink key={link.name} name={link.name} to={link.to} />
					))}
				</div>
			</div>
		</nav>
	);
}

function NavigationSpacer() {
	return <div className="h-navigation" aria-hidden="true" />;
}

function HamburgerMenu() {
	const { open } = useMobileMenu();
	return (
		<button type="button" className="cursor-pointer" onClick={open}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8 text-black">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
			<span className="sr-only">Open Menu</span>
		</button>
	);
}

function XButton() {
	const { close } = useMobileMenu();
	return (
		<button type="button" className="ml-auto block cursor-pointer pt-3 pr-5" onClick={close}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-8 text-white">
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
			<span className="sr-only">Close Menu</span>
		</button>
	);
}

function MobileMenu() {
	const { isOpen } = useMobileMenu();
	const menuStyle = cn(
		"absolute top-0 -right-80 z-modal h-screen w-80 rounded-l-base bg-primary-accent transition-all duration-base",
		isOpen && "right-0",
	);
	return (
		<div className={menuStyle}>
			<XButton />
			<div className="flex flex-col">
				{links.map((link) => (
					<MobileLink key={link.name} name={link.name} to={link.to} />
				))}
			</div>
		</div>
	);
}

type MobileLinkProps = { name: string; to: string };
function MobileLink({ name, to }: MobileLinkProps) {
	const { close } = useMobileMenu();
	return (
		<Link
			to={to}
			className="bg-primary-accent px-8 py-2 text-lg font-medium text-white transition-colors duration-base hover:bg-primary"
			onClick={close}>
			{name}
		</Link>
	);
}

type DesktopLinkProps = { name: string; to: string };
function DesktopLink({ name, to }: DesktopLinkProps) {
	return (
		<Link
			to={to}
			className={cn(
				textVariants(),
				"rounded-base font-semibold transition-colors duration-base hover:text-primary-accent",
			)}>
			{name}
		</Link>
	);
}

export function Navigation() {
	return (
		<>
			<MobileNavigation />
			<DesktopNavigation />
			<NavigationSpacer />
		</>
	);
}
