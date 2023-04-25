import MenuSelect from "../components/pages/menu/common/MenuSelect";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <MenuSelect />
      {children}
    </section>
  );
}
