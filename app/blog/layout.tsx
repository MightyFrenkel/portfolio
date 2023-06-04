export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="col-span-3">{children}</div>
      </div>
    </section>
  );
}
