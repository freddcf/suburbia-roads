import { ComponentPropsWithRef, CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
} & ComponentPropsWithRef<T>;

export function Bounded<T extends ElementType = "section">({
  as,
  className,
  id,
  children,
  ...restProps
}: BoundedProps<T>) {
  const Comp = as || "section";

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
