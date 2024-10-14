import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { Text } from "@stackshift-ui/text";
import cn from "classnames";

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
    inline: `inline-block p-4 mr-4 rounded bg-secondary-foreground`,
    stacked: `inline-block p-4 mx-auto rounded bg-secondary-foreground`,
  };

  const classes = variantClass[variant] ?? variantClass["inline"];
  const imageClasses = imageVariantClass[variant] ?? imageVariantClass["inline"];

  return (
    <Component as={as} className={cn(classes, className)} {...props} data-testid={displayName}>
      {icon && (
        <div className={imageClasses}>
          <img src={icon} width={24} height={24} alt={alt ?? "statistics-icon"} />
        </div>
      )}
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <Text muted>{label}</Text>
      </div>
    </Component>
  );
};

StatsCard.displayName = displayName;
