interface FeatureLinkType {
  href: string;
  name: string;
}

export const featureLinks: FeatureLinkType[] = [
  { href: "/login", name: "Auth" },
  { href: "/dashboard", name: "Dashboard" },
  { href: "/chat", name: "Chat" },
  { href: "/list", name: "List" },
  { href: "/profile", name: "Profile" },
];
