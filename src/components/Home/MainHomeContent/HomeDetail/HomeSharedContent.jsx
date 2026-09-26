import HomeTitles from "../HomeTitles";

const colClasses = {
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
};

export default function HomeSharedContent({ children, title, col }) {
  return (
    <section
      className={`
        ${colClasses[col]}
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
