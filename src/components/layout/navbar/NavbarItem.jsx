import { NavLink } from "react-router-dom";

export default function NavbarItem({
  title,
  icon: Icon,
  to,
  showTitle = false,
  onNavigate,
}) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
          isActive
            ? "border-border bg-brand/10 text-brand"
            : "border-transparent text-white"
        }`
      }
    >
      <Icon />
      <span
        className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ${
          showTitle ? "max-w-32 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {title}
      </span>
    </NavLink>
  );
}
