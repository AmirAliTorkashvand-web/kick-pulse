import {
  getEventMeta,
  getEventSide,
} from "../../../../utils/MatchesUtils/MatchUtils";
import HomeSharedContent from "../../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import MatchTimelineItem from "./MatchTimelineItem";

export default function MatchTimeline({ fixtureData }) {
  const eventsSide = getEventSide({
    events: fixtureData?.events,
    homeId: fixtureData?.teams?.home?.id,
    awayId: fixtureData?.teams?.away?.id,
  });

  return (
    <>
      {fixtureData.events && (
        <HomeSharedContent title="Events" col={8}>
          {eventsSide.map((item) => {
            const meta = getEventMeta({ event: item.event });
            return (
              <MatchTimelineItem
                Icon={meta.Icon}
                iconColor={meta.iconColor}
                side={item.side}
                player={meta.player}
                secondaryText={meta.secondaryText}
                minute={item.event.time.elapsed}
              />
            );
          })}
        </HomeSharedContent>
      )}
      {!fixtureData.events && (
        <span>Match has not started yet</span>
      )}
    </>
  );
}
