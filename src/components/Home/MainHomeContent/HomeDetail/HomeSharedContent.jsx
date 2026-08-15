import HomeTitles from "../HomeTitles";

const colClasses = {
  2: "col-span-2",
  3: "col-span-3",
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
