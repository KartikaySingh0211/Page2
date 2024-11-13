// @/components/ui/card.jsx
import * as React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"rounded-lg border-[16px] border-[#adadad] bg-card text-card-foreground shadow-sm",
			className
		)}
		{...props}
	/>
));
Card.displayName = "Card";

export { Card };
