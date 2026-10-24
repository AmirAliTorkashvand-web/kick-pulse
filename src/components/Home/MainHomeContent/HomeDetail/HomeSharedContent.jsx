import HomeTitles from "../HomeTitles";

const colClasses = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
};

export default function HomeSharedContent({ children, title, col }) {
  return (
    <section
      className={`
        col-span-8
        md:col-span-4
        ${colClasses[col] ?? "lg:col-span-4"}
        min-w-0
        h-full
        flex
        min-h-0
        flex-col
        rounded-xl
        bg-surface
        p-4
      `}
    >
      <HomeTitles title={title} />

      <div className="mt-4 flex min-h-0 flex-1 flex-col">{children}</div>
    </section>
  );
}
