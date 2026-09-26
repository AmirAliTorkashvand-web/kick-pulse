export default function TeamStadiumInfoItem({ title, Icon }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Icon color="#00e676" />
        <span className="text-white">{title}</span>
      </div>
    </>
  );
}
