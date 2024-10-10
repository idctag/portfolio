import { Link } from "@nextui-org/link";
import React from "react";
import { featureLinks } from "../constants";
import { AuroraBackground } from "../components/ui/aurora-background";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

interface FeatureLinkProps {
  href: string;
  name: string;
}

const FeatureLink = (props: FeatureLinkProps) => {
  const { href, name } = props;
  return (
    <Link className="px-20" href={href}>
      {name}
    </Link>
  );
};
const heading = "Hi I am OJ and this is my ever growing portfolio web page.";

const Home = () => {
  return (
    <AuroraBackground>
      <div>
        <div className="h-[80vh] max-w-screen-lg min-w-5/6 flex flex-col text-center justify-center pb-32">
          <h1 className="text-2xl lg:text-5xl">{heading}</h1>
          <h2 className="text-lg lg:text-2xl pt-10">
            I learn and develop different types of web features and list them
            here
          </h2>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-wrap gap-12 justify-center">
          {featureLinks.map((item) => {
            return (
              <FeatureLink key={item.name} href={item.href} name={item.name} />
            );
          })}
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Home;
