import CustomNavbar from "../components/CustomNavbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <CustomNavbar />
      <div>{children}</div>
    </div>
  );
}
