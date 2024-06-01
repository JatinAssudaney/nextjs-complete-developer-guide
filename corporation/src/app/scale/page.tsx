import Hero from "@/components/hero";
import React from "react";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      title="Scale your app to infinity"
      imgData={scaleImg}
      imgAlt="steel factory"
    />
  );
}
