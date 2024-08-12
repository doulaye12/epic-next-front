import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface StrapiImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function StrapiImage({
  src,
  alt,
  width,
  height,
  className,
}: Readonly<StrapiImageProps>) {
  if (!src) {
    return null;
  }

  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
      priority
    />
  );
  
}
