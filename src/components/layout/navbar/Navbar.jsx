import {
  Home,
  Leagues,
  Matches,
  Standings,
  Players,
  Transfers,
  Teams,
} from "../../../assets/icons/navbar/NavbarIcons";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav>
      <NavbarItem title="Home" icon={Home} to="/" />
      <NavbarItem title="Matches" icon={Matches} to="/matches" />
      <NavbarItem title="Leagues" icon={Leagues} to="/leagues" />
      <NavbarItem title="Standings" icon={Standings} to="/standings" />
      <NavbarItem title="Players" icon={Players} to="/players" />
      <NavbarItem title="Teams" icon={Teams} to="/teams" />
      <NavbarItem title="Transfers" icon={Transfers} to="/transfers" />
    </nav>
  );
}

export default Navbar;
