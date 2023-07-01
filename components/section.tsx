export const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="w-full max-w-5xl mx-auto my-4 md:my-8">
    {children}
  </section>
);

const Background = ({ children }: { children: React.ReactNode }) => (
  <div className=" px-2 md:px-8 py-4 pt-8 backdrop-blur-md bg-white/90 dark:bg-black/30 rounded-lg flex flex-col gap-12 ">
    {children}
  </div>
);

Section.Background = Background;
