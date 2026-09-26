export function TeamDetailRecentFormItem({ result, color }) {
  return (
    <span
      className={`${color} flex h-9 w-9 items-center justify-center rounded-full font-bold text-black`}
    >
      {result}
    </span>
  );
}
