export default function TeamStadiumDetailItem({Icon , title , value}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <div>
            <Icon color="#00e676"/>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-text-secondary">{title}</span>
            <span className="text-white">{value}</span>
        </div>
      </div>
    </>
  );
}
