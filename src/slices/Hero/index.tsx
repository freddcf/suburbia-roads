import { FC } from "react";
import { asImageSrc, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { InteractiveSkateboard } from "./InteractiveSkateboard";

const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_WHEEL_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = async ({ slice }) => {
  const deckTextureURL =
    asImageSrc(slice.primary.skateboard_deck_texture) || DEFAULT_DECK_TEXTURE;
  const wheelTextureURL =
    asImageSrc(slice.primary.skateboard_wheel_texture) || DEFAULT_WHEEL_TEXTURE;
  const truckColor =
    slice.primary.skateboard_truck_texture || DEFAULT_TRUCK_COLOR;
  const boltColor = slice.primary.skateboard_bolt_texture || DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white relative  h-dvh overflow-hidden text-zinc-800"
    >
      <div className="absolute top-80 left-1/2 w-[150vw] h-[341px] bg-texture transform -translate-x-1/2 rotate-[5deg]"></div>
      <div className="absolute hidden lg:flex top-52 left-1/2 w-[150vw] h-[391px] bg-texture transform -translate-x-1/3 rotate-[50deg]"></div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end ~py-10/16">
        <div
          className={
            "font-ant text-[100px] leading-[110px] sm:text-[120px] sm:leading-[130px] md:text-[220px] md:leading-[210px] lg:text-[280px] lg:leading-[260px] text-end text-zinc-300 absolute right-0 top-0 mt-24"
          }
        >
          SUBURBIA ROADS
        </div>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            color="lime"
            className="z-20 mt-2"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>
      <InteractiveSkateboard
        deckTextureURL={deckTextureURL}
        wheelTextureURL={wheelTextureURL}
        truckColor={truckColor}
        boltColor={boltColor}
      />
    </Bounded>
  );
};

export default Hero;
