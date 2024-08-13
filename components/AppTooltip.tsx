import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const AppTooltip = ({
  children,
  title,
  titleClasses,
}: {
  children: React.ReactNode;
  title: any;
  titleClasses?: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-background/50 backdrop-blur-sm opacity-100">
          <div className={`text-base font-semibold ${titleClasses}`}>{title}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AppTooltip;
