import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "#/lib/cn";

export const textVariants = cva("antialiased", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
			"5xl": "text-5xl",
			"6xl": "text-6xl",
		},
		tone: {
			black: "text-black",
			gray: "text-gray",
			muted: "text-muted",
			white: "text-white",
			primary: "text-primary",
			["primary-neutral"]: "text-primary-neutral",
			danger: "text-danger",
		},
	},
	compoundVariants: [{ size: ["xl", "2xl", "3xl", "4xl"], className: "tracking-tight" }],
	defaultVariants: { size: "base", tone: "black" },
});

type TextVariants = VariantProps<typeof textVariants>;
type TextComponentProps<T extends keyof HTMLElementTagNameMap> = ComponentPropsWithoutRef<T> &
	TextVariants;

type ParagraphProps = TextComponentProps<"p">;
export function Paragraph({ children, className, size, tone, ...props }: ParagraphProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<p className={style} {...props}>
			{children}
		</p>
	);
}

type SpanProps = TextComponentProps<"span">;
export function Span({ children, className, size, tone, ...props }: SpanProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<span className={style} {...props}>
			{children}
		</span>
	);
}

type LabelProps = TextComponentProps<"label">;
export function Label({ children, className, size, tone, ...props }: LabelProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<label className={style} {...props}>
			{children}
		</label>
	);
}

type H1Props = TextComponentProps<"h1">;
export function H1({ children, className, size, tone, ...props }: H1Props) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<h1 className={style} {...props}>
			{children}
		</h1>
	);
}

type H2Props = TextComponentProps<"h2">;
export function H2({ children, className, size, tone, ...props }: H2Props) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<h2 className={style} {...props}>
			{children}
		</h2>
	);
}

type H3Props = TextComponentProps<"h3">;
export function H3({ children, className, size, tone, ...props }: H3Props) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<h3 className={style} {...props}>
			{children}
		</h3>
	);
}

type H4Props = TextComponentProps<"h4">;
export function H4({ children, className, size, tone, ...props }: H4Props) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<h4 className={style} {...props}>
			{children}
		</h4>
	);
}

type H5Props = TextComponentProps<"h5">;
export function H5({ children, className, size, tone, ...props }: H5Props) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<h5 className={style} {...props}>
			{children}
		</h5>
	);
}

type H6Props = TextComponentProps<"h6">;
export function H6({ children, className, size, tone, ...props }: H6Props) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<h6 className={style} {...props}>
			{children}
		</h6>
	);
}

type SmallProps = TextComponentProps<"small">;
export function Small({ children, className, size, tone, ...props }: SmallProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<small className={style} {...props}>
			{children}
		</small>
	);
}

type StrongProps = TextComponentProps<"strong">;
export function Strong({ children, className, size, tone, ...props }: StrongProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<strong className={style} {...props}>
			{children}
		</strong>
	);
}

type EmProps = TextComponentProps<"em">;
export function Em({ children, className, size, tone, ...props }: EmProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<em className={style} {...props}>
			{children}
		</em>
	);
}

type BlockquoteProps = TextComponentProps<"blockquote">;
export function Blockquote({ children, className, size, tone, ...props }: BlockquoteProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<blockquote className={style} {...props}>
			{children}
		</blockquote>
	);
}

type CodeProps = TextComponentProps<"code">;
export function Code({ children, className, size, tone, ...props }: CodeProps) {
	const style = cn(textVariants({ size, tone }), className);
	return (
		<code className={style} {...props}>
			{children}
		</code>
	);
}
