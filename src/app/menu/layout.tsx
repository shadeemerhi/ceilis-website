import MenuSelect from "../components/pages/menu/MenuSelect";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative pt-24">
      <MenuSelect />
      {children}
    </section>
  );
}
