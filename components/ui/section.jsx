import { cn } from "@/lib/utils";
import React from "react";

export function Section({ className, ...props }) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3", className)}
      {...props}
    />
  );
}
