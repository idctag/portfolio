import { Link } from "@nextui-org/link";
import React from "react";
import { featureLinks } from "../constants";

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

const Home = () => {
  return (
    <div>
      <div>
        <h1>Hi I am OJ and this is my ever growing portfolio web page</h1>
        <h2>
          I learn and develop different types of web features and list them here
        </h2>
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
    </div>
  );
};

export default Home;
