import Link from "next/link";
import React from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 md:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <Link href="/" className="justify-self-start">
          <Logo className="text-zinc-900 ~h-12/16" />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-10 font-semibold">
            {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink field={item.link} className="~text-lg/xl" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink
            href="/"
            icon="cart"
            color="white"
            aria-label="Carrinho (1)"
          >
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Carrinho (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
