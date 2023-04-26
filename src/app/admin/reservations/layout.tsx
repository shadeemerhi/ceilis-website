/**
 * Adding bottom padding to prevent clash with Footer.
 * There might be a better solution
 */

export default async function ReservationsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pb-[400px]">{children}</div>;
}
