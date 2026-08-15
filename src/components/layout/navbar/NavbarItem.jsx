import { NavLink } from "react-router-dom";

function NavbarItem({ title, icon: Icon, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
          isActive
            ? "border-border bg-brand/10 text-brand"
            : "border-transparent text-white"
        }`
      }
    >
      <Icon />
      <span>{title}</span>
    </NavLink>
  );
}

export default NavbarItem;