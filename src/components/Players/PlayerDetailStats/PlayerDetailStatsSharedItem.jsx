export default function PlayerDetailStatsSharedItem({
  title,
  color,
  children,
}) {
  return (
    <div className="border-r border-border pr-4">
      <span className={`${color} font-medium`}>
        {title}
      </span>

      <div className="mt-3 space-y-1">
        {children}
      </div>
    </div>
  );
}