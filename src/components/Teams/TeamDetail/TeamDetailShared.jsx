export default function TeamDetailShared({ children, title , col }) {
  return (
    <section
      className={`
        col-span-${col}
        min-w-0
        h-full
        flex
        min-h-0
        flex-col
        rounded-xl
        bg-surface
        p-4
        mt-4
      `}
    >
        <span className="font-bold text-white">{title}</span>
      <div className="mt-4 flex min-h-0 flex-1 flex-col">{children}</div>
    </section>
  );
}
