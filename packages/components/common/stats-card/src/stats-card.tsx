import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import { Text } from "@stackshift-ui/text";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

type VariantType = "inline" | "stacked";

export interface StatsCardProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  variant?: VariantType;
  icon: string;
  value: string;
  label: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "StatsCard";

/**
 * @deprecated Redundant since Card component was added
 * @use Card component
 *  */
export const StatsCard: React.FC<StatsCardProps> = ({
  variant = "inline",
  icon,
  value,
  label,
  alt,
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonClass = `w-full px-4`;
  const variantClass = {
    inline: `${commonClass} flex items-center`,
    stacked: `${commonClass} block`,
  };

  const imageVariantClass = {
    inline: `inline-block p-4 mr-4 rounded bg-secondary/50`,
    stacked: `inline-block p-4 mx-auto rounded bg-secondary/50`,
  };

  const classes = variantClass[variant] ?? variantClass["inline"];
  const imageClasses = imageVariantClass[variant] ?? imageVariantClass["inline"];

  return (
    <Component as={as} className={cn(classes, className)} {...props}>
      {icon && (
        <div className={imageClasses}>
          <img src={icon} width={24} height={24} alt={alt ?? "statistics-icon"} />
        </div>
      )}
      <div>
        <p className="text-2xl text-gray-500 font-bold">{value}</p>
        <Text muted>{label}</Text>
      </div>
    </Component>
  );
};

StatsCard.displayName = displayName;
