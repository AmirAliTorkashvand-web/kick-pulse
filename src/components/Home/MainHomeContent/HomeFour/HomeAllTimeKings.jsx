import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeThirdKingsItems from "../HomeThird/HomeThirdKingsItems";
import HomeKingsSlider from "../HomeThird/HomeKingsSlider";
import { historicalKings } from "../HomeThird/HomeKings";

export default function HomeAllTimeKings() {
  return (
    <div className="self-start min-h-0 w-full col-span-2">
      <HomeSharedContent title="All Times Kings">
        <HomeKingsSlider>
          {historicalKings.map((king) => (
            <HomeThirdKingsItems key={king.title} king={king} />
          ))}
        </HomeKingsSlider>
      </HomeSharedContent>
    </div>
  );
}
