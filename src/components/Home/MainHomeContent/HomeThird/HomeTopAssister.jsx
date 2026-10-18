import { Link } from "react-router-dom";

import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeTopAssiterItem from "./HomeTopAssisterItem";

export default function HomeTopAssister({ topAssisters }) {
  return (
    <>
      <HomeSharedContent title="Top Assisters cl 24" col={3}>
        {topAssisters?.map((topAssister, index) => (
          <Link to={`/players/${topAssister.player.id}`}>
            <HomeTopAssiterItem
              key={topAssister.player.id}
              topAssister={topAssister}
              index={index}
            />
          </Link>
        ))}
      </HomeSharedContent>
    </>
  );
}
