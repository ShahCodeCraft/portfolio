import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for merging class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NeonGradientCard = ({
  as = <div />,  // Default as a <div> component
  className = "",  // Default empty className
  children = null,  // Default empty children
  borderSize = 4,  // Default border size
  borderRadius = 9999,  // Default border radius
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },  // Default neon gradient colors
  ...props  // Any other props
}) => {
  const containerRef = useRef(null);  // Reference for the card container
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });  // State for storing dimensions

  // Effect for updating the dimensions of the card
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);  // Add resize event listener

    return () => {
      window.removeEventListener("resize", updateDimensions);  // Cleanup on unmount
    };
  }, []);

  // Recalculate dimensions when children change
  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={{
        "--border-size": `${borderSize}px`,
        "--border-radius": `${borderRadius}px`,
        "--neon-first-color": neonColors.firstColor,
        "--neon-second-color": neonColors.secondColor,
        "--card-width": `${dimensions.width}px`,
        "--card-height": `${dimensions.height}px`,
        "--card-content-radius": `${borderRadius - borderSize}px`,
        "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
        "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
        "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
        "--after-blur": `${dimensions.width / 9}px`,
      }}
      className={cn(
        "relative z-10 h-full w-full rounded-[var(--border-radius)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full min-h-[inherit] w-full rounded-[var(--card-content-radius)] bg-gray-100",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-backgroundPositionSpin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:overflow-visible after:opacity-80",
          "after:animate-backgroundPositionSpin",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
