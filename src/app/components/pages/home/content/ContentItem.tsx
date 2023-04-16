"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface IContentItemProps {
  titleText: string;
  supplementalText: string;
  actionButton: ReactNode;
  imageUrl: string;
  flexDirection: "row" | "row-reverse";
}

const ContentItem = ({
  titleText,
  supplementalText,
  actionButton,
  imageUrl,
  flexDirection,
}: IContentItemProps) => {
  return (
    <div
      className={`flex flex-col gap-10 md:flex-${flexDirection} px-6 md:px-20 py-16`}
    >
      <div className="relative aspect-square w-full md:w-1/2">
        <Image
          src={imageUrl}
          alt="image"
          fill
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 flex-1">
        <span className="text-4xl">{titleText}</span>
        <span className="text-lg font-light">{supplementalText}</span>
        {actionButton}
      </div>
    </div>
  );
};

export default ContentItem;
