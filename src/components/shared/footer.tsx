import { Link } from "@tanstack/react-router";
import type React from "react";

import { Paragraph, Small, Span, textVariants } from "#/components/ui/text";
import { cn } from "#/lib/cn";

const linkStyle = textVariants({ tone: "white", size: "sm" });

export function Footer() {
	return (
		<footer className="bg-primary py-14">
			<div className="mx-auto w-responsive">
				<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
					<div className="flex w-72 flex-col gap-2 lg:shrink-0">
						<Span size="3xl" tone="white" className="font-semibold">
							Hello
						</Span>
						<Paragraph className="text-pretty" tone="muted">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, at!
						</Paragraph>
					</div>
					<div className="flex flex-col gap-8 lg:flex-row lg:justify-end lg:gap-8">
						<FooterSection header="About" className="lg:w-40">
							<FooterLink to="/about" label="About Us" />
							<FooterLink to="/about" label="About Us" />
							<FooterLink to="/about" label="About Us" />
						</FooterSection>
						<FooterSection header="About" className="lg:w-40">
							<FooterLink to="/about" label="About Us" />
							<FooterLink to="/about" label="About Us" />
							<FooterLink to="/about" label="About Us" />
						</FooterSection>
						<FooterSection header="Contact Us" className="lg:min-w-56">
							<ContactLink icon={<EmailIcon />} href="mailto:laundrybasket@gmail.com">
								laundrybasket@gmail.com
							</ContactLink>
							<ContactLink icon={<PhoneIcon />} href="tel:1-256-503-8895">
								Adrian: (256) 503-8895
							</ContactLink>
							<ContactLink icon={<PhoneIcon />} href="tel:1-256-506-2153">
								Cameron: (256) 506-2153
							</ContactLink>
						</FooterSection>
					</div>
				</div>
				<div className="mt-12 flex flex-col gap-4 border-t border-gray/30 py-4 md:flex-row md:justify-between">
					<Small size="xs" tone="gray" className="md:text-center">
						© 2026 Laundry Basket Plus. All rights reserved.
					</Small>
					<div className="flex gap-2">
						<FacebookIcon />
					</div>
				</div>
			</div>
		</footer>
	);
}

type FooterSectionProps = React.ComponentProps<"div"> & {
	header: string;
};
function FooterSection({ header, className, children }: FooterSectionProps) {
	return (
		<div className={cn("flex flex-col", className)}>
			<Span size="sm" tone="gray" className="font-semibold uppercase">
				{header}
			</Span>
			<div className="mt-2 flex flex-col gap-2">{children}</div>
		</div>
	);
}

type FooterLinkProps = { to: string; label: string };
function FooterLink({ to, label }: FooterLinkProps) {
	return (
		<Link to={to} className={linkStyle}>
			{label}
		</Link>
	);
}

function ContactIconBase({ children }: { children: React.ReactNode }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-4 text-white">
			{children}
		</svg>
	);
}

function PhoneIcon() {
	return (
		<ContactIconBase>
			<path
				fillRule="evenodd"
				d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
				clipRule="evenodd"
			/>
		</ContactIconBase>
	);
}

function EmailIcon() {
	return (
		<ContactIconBase>
			<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
			<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
		</ContactIconBase>
	);
}

type ContactLinkProps = React.ComponentProps<"div"> & {
	icon: React.ReactNode;
	href: string;
};
function ContactLink({ icon, href, children }: ContactLinkProps) {
	return (
		<div className="flex items-center gap-2">
			{icon}
			<a className={linkStyle} href={href}>
				{children}
			</a>
		</div>
	);
}

function FacebookIcon() {
	return (
		<a
			href="https://www.facebook.com/p/Laundry-Basket--100063592373340/"
			rel="noopener nofollow noreferrer external"
			target="_blank">
			<svg
				fill="currentColor"
				className="size-4 text-white transition-colors duration-base hover:text-primary-neutral"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-337 273 123.5 256">
				<path
					d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3
		c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"
				/>
			</svg>
			<span className="sr-only">Facebook</span>
		</a>
	);
}
