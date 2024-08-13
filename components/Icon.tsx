import { SVGAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends SVGAttributes<SVGSVGElement> {
  icon: string;
}

const Icon = ({ icon, className, ...rest }: Props) => {
  const containerCs = cn("w-6 h-6", className);

  return (
    <svg {...rest} className={containerCs}>
      <use href={`#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
