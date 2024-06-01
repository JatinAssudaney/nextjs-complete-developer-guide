import Hero from "@/components/hero";
import React from "react";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      title="Super high reliability hosting"
      imgData={reliabilityImg}
      imgAlt="welding"
    />
  );
}
