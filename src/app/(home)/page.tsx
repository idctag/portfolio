import { Link } from "@nextui-org/link";
import React from "react";
import { featureLinks } from "../constants";
import { BackgroundBeams } from "../components/ui/background-beams";

interface FeatureLinkProps {
  href: string;
  name: string;
}

const FeatureLink = (props: FeatureLinkProps) => {
  const { href, name } = props;
  return (
    <Link
      size="lg"
      className="hover:bg-neutral-900 px-12 mx-8 rounded-xl"
      href={href}
      color="foreground"
    >
      {name}
    </Link>
  );
};
const heading = "Hi I am OJ and this is my ever growing portfolio web page.";

const Home = () => {
  return (
    <div className="rounded-md bg-neutral-950 relative antialiased">
      <div className="h-[100vh] flex flex-col items-center text-center justify-center pb-32">
        <div className="max-w-screen-lg">
          <h1 className="text-2xl lg:text-5xl">{heading}</h1>
          <h2 className="text-lg lg:text-2xl pt-10">
            I learn and develop different types of web features and list them
            here
          </h2>
        </div>
      </div>
      <div className="w-full relative z-10">
        <div className="flex flex-wrap gap-12 justify-center">
          {featureLinks.map((item) => {
            return (
              <FeatureLink key={item.name} href={item.href} name={item.name} />
            );
          })}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Home;
