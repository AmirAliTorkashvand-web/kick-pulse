import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeThirdKingsItems from "./HomeThirdKingsItems";
import HomeKingsSlider from "./HomeKingsSlider";
import { currentKings } from "./HomeKings";

export default function HomeThirdKings() {
  return (
    <HomeSharedContent col={2} title="Kings">
      <HomeKingsSlider>
        {currentKings.map((king) => (
          <HomeThirdKingsItems key={king.title} king={king} />
        ))}
      </HomeKingsSlider>
    </HomeSharedContent>
  );
}
