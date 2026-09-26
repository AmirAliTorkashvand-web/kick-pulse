export default function TeamInformationItem({ title, Icon, value }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-3 h-[60px]">
      <div className="flex items-center gap-3">
        <Icon color="#00e676"/>
        <span className="text-sm font-medium text-text-secondary">{title}</span>
      </div>

      <div className="text-sm font-medium text-white">{value}</div>
    </div>
  );
}
