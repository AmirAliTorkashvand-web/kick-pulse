import {
  capacity,
  location,
  surface,
} from "../../../assets/icons/Teams/TeamsIcons";

import TeamDetailShared from "../TeamDetail/TeamDetailShared";

import TeamStadiumDetailItem from "./TeamStadiumDetailItem";
import TeamStadiumInfoItem from "./TeamStadiumInfoItem";

export default function TeamStadium({ team }) {
  if (!team?.length) return null;
  return (
    <div className="col-span-8 mt-8 rounded-xl bg-surface p-4">
      <div className="grid grid-cols-8 gap-5">
        <div className="col-span-4 h-[240px] overflow-hidden rounded-xl">
          <img
            src={team[0].venue.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-4">
          <TeamDetailShared col={4} title="Stadium">
            <div className="border-b border-border pb-4">
              <TeamStadiumInfoItem Icon={location} title={team[0].venue.name} />

              <TeamStadiumInfoItem Icon={location} title={team[0].venue.city} />

              <TeamStadiumInfoItem
                Icon={location}
                title={team[0].venue.address}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <TeamStadiumDetailItem
                title="Capacity"
                value={team[0].venue.capacity}
                Icon={capacity}
              />

              <TeamStadiumDetailItem
                title="Surface"
                value={team[0].venue.surface}
                Icon={surface}
              />
            </div>
          </TeamDetailShared>
        </div>
      </div>
    </div>
  );
}
