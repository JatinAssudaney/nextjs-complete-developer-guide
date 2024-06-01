import Hero from "@/components/hero";
import React from "react";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      title="We serve high performance applications"
      imgData={performanceImg}
      imgAlt="welding"
    />
  );
}
