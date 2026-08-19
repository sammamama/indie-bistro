import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        /*
         * Printed-menu buttons: cream or ink stock inside a gold rule, with the
         * same dotted inner frame the menu, story, and review sheets carry.
         */
        menu:
          "relative border border-menu-gold/70 bg-menu-cream font-serif font-normal tracking-wide text-menu-ink shadow-[0_6px_16px_rgba(14,61,66,0.28)] hover:bg-menu-cream-deep before:pointer-events-none before:absolute before:inset-[3px] before:rounded-[inherit] before:border before:border-dotted before:border-menu-gold/55 before:content-['']",
        menuInk:
          "relative border border-menu-gold/70 bg-menu-ink font-serif font-normal tracking-wide text-menu-cream shadow-[0_6px_16px_rgba(14,61,66,0.4)] hover:bg-menu-ink/90 before:pointer-events-none before:absolute before:inset-[3px] before:rounded-[inherit] before:border before:border-dotted before:border-menu-gold/60 before:content-['']",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
