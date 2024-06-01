import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      title="Professional Cloud Hosting"
      imgData={homeImg}
      imgAlt="car factory"
    />
  );
}
