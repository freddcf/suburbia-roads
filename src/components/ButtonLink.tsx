import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export type ButtonProps = PrismicNextLinkProps & {
  color?: "orange" | "white" | "lime";
  size?: "sm" | "md" | "lg";
  icon?: "cart" | "skateboard" | "plus";
};

export function ButtonLink({
  color = "orange",
  size = "md",
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "button-cutout group mx-4 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
        size === "sm" && "gap-2.5 py-2 text-base",
        size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
        size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
        color === "orange" &&
          "from-white to-brand-lime text-black hover:text-black",
        color === "white" && "from-white to-brand-lime text-black",
        color === "lime" && "from-brand-lime to-brand-orange text-black",
        className
      )}
      {...props}
    >
      {icon ? (
        <>
          <div
            className={clsx(
              "flex size-6 items-center justify-center transition-transform group-hover:-rotate-[25deg] [&>svg]:h-full [&>svg]:w-full",
              size === "sm" && "size-5",
              size === "md" && "size-6",
              size === "lg" && "~size-6/8"
            )}
          >
            {icon === "cart" && <FaCartShopping />}
            {icon === "skateboard" && <SkateboardIcon />}
            {icon === "plus" && <FaPlus />}
          </div>
          <div className="w-px self-stretch bg-black/25" />
        </>
      ) : null}
      {children}
    </PrismicNextLink>
  );
}

function SkateboardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="87"
      height="40"
      viewBox="0 0 87 40"
    >
      <path
        d="M84.2684 3.23358L3.14766 24.9698"
        stroke="#000"
        strokeWidth="5"
        strokeLinecap="round"
        fillOpacity="0.8"
      />
      <circle
        cx="26.211"
        cy="32.3445"
        r="6.25065"
        transform="rotate(15 26.211 32.3445)"
        fill="#000"
        fillOpacity="0.8"
      />
      <circle
        cx="69.4686"
        cy="20.6392"
        r="6.25065"
        transform="rotate(15 69.4686 20.6392)"
        fill="#000"
        fillOpacity="0.8"
      />
    </svg>
  );
}
