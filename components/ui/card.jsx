import * as React from "react";

import { cn } from "@/lib/utils";

const Card = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg bg-card text-card-foreground", className)}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-pretty font-mono text-sm text-muted-foreground",
      className,
    )}
    {...props}
  />
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
