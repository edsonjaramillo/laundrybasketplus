import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { H2, Span } from "#/components/ui/text";
import { cn } from "#/lib/cn";

export const sectionVariants = cva("px-5 py-20 lg:px-8 lg:py-28", {
	variants: { color: { primary: "bg-primary", light: "bg-primary-accent" } },
	defaultVariants: { color: "primary" },
});

type SectionVariants = VariantProps<typeof sectionVariants>;
type SectionRequiredPropsProps = { header: string; subheader: string; children: React.ReactNode };

type SectionProps = SectionRequiredPropsProps & SectionVariants & React.ComponentProps<"div">;
export function Section({ header, subheader, children, className, color, ...props }: SectionProps) {
	const headerStyle = cn(sectionVariants({ color }));
	return (
		<div className={cn(headerStyle, className)} {...props}>
			<div className="mx-auto w-responsive">
				<div className="mb-10 flex flex-col gap-1">
					<Span
						tone="primary-neutral"
						size="xs"
						className="font-semibold tracking-widest uppercase">
						{subheader}
					</Span>
					<H2 size="4xl" className="font-bold lg:text-5xl">
						{header}
					</H2>
				</div>
				{children}
			</div>
		</div>
	);
}
