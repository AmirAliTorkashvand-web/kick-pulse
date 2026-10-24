import {
  Home,
  Leagues,
  Matches,
  Players,
  Teams,
} from "../../../assets/icons/navbar/NavbarIcons";
import NavbarItem from "../navbar/NavbarItem";

export default function Navbar({ showTitle = false, onNavigate }) {
  return (
    <nav className="flex flex-col gap-2">
      <NavbarItem
        title="Home"
        icon={Home}
        to="/"
        showTitle={showTitle}
        onNavigate={onNavigate}
      />
      <NavbarItem
        title="Matches"
        icon={Matches}
        to="/matches"
        showTitle={showTitle}
        onNavigate={onNavigate}
      />
      <NavbarItem
        title="Leagues"
        icon={Leagues}
        to="/leagues"
        showTitle={showTitle}
        onNavigate={onNavigate}
      />
      <NavbarItem
        title="Players"
        icon={Players}
        to="/players"
        showTitle={showTitle}
        onNavigate={onNavigate}
      />
      <NavbarItem
        title="Teams"
        icon={Teams}
        to="/teams"
        showTitle={showTitle}
        onNavigate={onNavigate}
      />
    </nav>
  );
}
