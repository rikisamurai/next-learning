export default function DashboardLayout({
  // will be a page or nested layout
  children,
  head,
  team,
}: {
  children: React.ReactNode;
  head: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <section className={'b'}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {head}
      {children}
      {team}
    </section>
  );
}
