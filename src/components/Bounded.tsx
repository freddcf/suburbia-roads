import { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({
  as: Comp = "section",
  className,
  id,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      id={id}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
