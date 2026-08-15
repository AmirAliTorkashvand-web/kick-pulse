import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MatchFixtureItem from "./MatchFeatureItem";
import { getLeagueBackground } from "./LeagueBackGround";

function MatchFixture({ matches }) {
  if (!matches.length) {
    return <div className="h-95 w-full animate-pulse rounded-2xl bg-surface" />;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
      }}
      loop={matches.length > 1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {matches.map((match) => (
        <SwiperSlide key={match.fixture.id}>
          <MatchFixtureItem
            match={match}
            background={getLeagueBackground(match.league.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MatchFixture;