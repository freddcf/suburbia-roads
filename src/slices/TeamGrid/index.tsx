import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/SlideIn";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid: FC<TeamGridProps> = async ({ slice }) => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");

  return (
    <Bounded
      id="team"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-full bg-brand-gray relative overflow-hidden"
    >
      <div className="absolute top-44 left-1/2 w-[150vw] h-[341px] bg-texture transform -translate-x-1/2 rotate-[-5deg]"></div>
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-zinc-900">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.data.firstname && (
              <SlideIn>
                <Skater skater={skater} index={index} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
