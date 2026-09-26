export default function TeamInfoFixtureItem({ Icon, title, value }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Icon color="white" />
        <div className="flex flex-col gap-2">
          <span className="text-[#94A3B8]">{title}</span>
          <span className="text-white">{value}</span>
        </div>
      </div>
    </>
  );
}
