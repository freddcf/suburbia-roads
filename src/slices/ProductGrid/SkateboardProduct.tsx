import { ButtonLink } from "@/components/ButtonLink";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { FaStar } from "react-icons/fa6";
import { Scribble } from "./Scribble";

async function getDominantColor(url: string) {
  const paletteURL = new URL(url);
  paletteURL.searchParams.set("palette", "json");

  const res = await fetch(paletteURL);
  const json = await res.json();

  return (
    json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex
  );
}

type Props = {
  id: string;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 w-[3px] h-full bg-stone-300 transition-colors group-hover:bg-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "right-1/2 translate-x-1/2 absolute h-[3px] w-full bg-stone-300 transition-colors group-hover:bg-stone-400";

export async function SkateboardProduct({ id }: Props) {
  const client = createClient();
  const product = await client.getByID<Content.SkateboardDocument>(id);

  const price = isFilled.number(product.data.price)
    ? `R$${(product.data.price / 100).toFixed(2)}`
    : "Preço não disponível";

  const dominantColor = isFilled.image(product.data.image)
    ? await getDominantColor(product.data.image.url)
    : undefined;

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-6 pb-2">
      <div className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <div className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <div className={clsx(HORIZONTAL_LINE_CLASSES, "top-2")} />

      <div className="flex items-center justify-between ~text-sm/2xl font-semibold">
        <span>{price}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> {product.data.mostliked}
        </span>
      </div>
      <div className="-mb-1 overflow-hidden py-4">
        <Scribble
          className="absolute inset-0 h-full w-full"
          color={dominantColor}
        />
        <PrismicNextImage
          alt=""
          field={product.data.image}
          width={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform 
          duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
      <div className={HORIZONTAL_LINE_CLASSES} />
      <h3 className="my-2 text-center font-ant leading-tight ~text-lg/xl">
        {product.data.name}
      </h3>

      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity
      duration-100 group-hover:opacity-100"
      >
        <ButtonLink field={product.data.customizer_link[0]}>
          Customizar
        </ButtonLink>
      </div>
    </div>
  );
}
