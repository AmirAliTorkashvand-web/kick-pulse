import { ArrowRightIcon } from "../../../assets/icons/Home/HomeIcons";

export default function HomeTitles({ title }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-bold text-white">{title}</span>
      <span className="text-brand flex gap-2 items-center">
        see all
        <ArrowRightIcon color="text-brand" />
      </span>
    </div>
  );
}
