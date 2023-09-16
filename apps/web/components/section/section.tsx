export interface SectionProps {
  children: React.ReactNode;
  spacing?: keyof typeof styles;
}

const styles = {
  default: "px-3",
  none: "",
};

export const Section = ({ children, spacing = "default" }: SectionProps) => (
  <section
    className={`${styles[spacing]} w-full max-w-5xl mx-auto my-4 md:my-8`}
  >
    {children}
  </section>
);

const Background = ({ children }: { children: React.ReactNode }) => (
  <div className="px-3 md:px-8 py-4 pt-8 backdrop-blur-md bg-black/30 rounded-lg flex flex-col gap-12 ">
    {children}
  </div>
);

Section.Background = Background;
