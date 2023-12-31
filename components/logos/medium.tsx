import { cn } from "@/lib/utils";
import { SVGProps } from "react";
const Medium = ({
  fill = "#606055",
  showOriginalOnHover = true,
  className: c,
  ...props
}: SVGProps<SVGSVGElement> & {
  showOriginalOnHover?: boolean;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 160 126.66667"
    height={126.66667}
    width={160}
    xmlSpace="preserve"
    id="svg2"
    className={cn(c, "group cursor-pointer")}
    {...props}
  >
    <defs id="defs6" />
    <g transform="matrix(1.3333333,0,0,-1.3333333,0,126.66667)" id="g10">
      <g transform="scale(0.1)" id="g12">
        <path
          id="path14"
          fill={fill}
          className={cn(
            showOriginalOnHover && "group-hover:fill-[#FFFFE3]",
            "transition-all duration-150"
          )}
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
          }}
          d="m 1200,810 -47.46,0 C 1134.92,810 1110,784.582 1110,768.309 l 0,-589.809 c 0,-16.293 24.92,-38.5 42.54,-38.5 l 47.46,0 0,-140 -430,0 0,140 90,0 0,620 -4.41,0 L 645.422,0 482.707,0 275.25,760 270,760 270,140 360,140 360,0 0,0 0,140 46.0977,140 C 65.082,140 90,162.207 90,178.5 l 0,589.809 C 90,784.582 65.082,810 46.0977,810 L 0,810 l 0,140 450.164,0 147.797,-550 4.066,0 149.164,550 448.809,0 0,-140"
        />
      </g>
    </g>
  </svg>
);
export default Medium;
