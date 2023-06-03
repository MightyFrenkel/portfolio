export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="col-span-2">{children}</div>
        <div className="col-span-1">Sidebar</div>
      </div>
    </section>
  );
}
