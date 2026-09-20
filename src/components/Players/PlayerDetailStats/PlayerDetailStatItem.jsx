export default function PlayerDetailStatItem({ title, value }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-secondary">{title}</span>

        <span className="text-sm font-semibold text-text-primary">{value}</span>
      </div>
    </>
  );
}
