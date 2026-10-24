import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeThirdKingsItems from "../HomeThird/HomeThirdKingsItems";
import HomeKingsSlider from "../HomeThird/HomeKingsSlider";
import { historicalKings } from "../HomeThird/HomeKings";

export default function HomeAllTimeKings() {
  return (
    <div className="col-span-8 md:col-span-4 lg:col-span-2 min-w-0">
      <HomeSharedContent title="All Time Kings">
        <HomeKingsSlider>
          {historicalKings.map((king) => (
            <HomeThirdKingsItems key={king.title} king={king} />
          ))}
        </HomeKingsSlider>
      </HomeSharedContent>
    </div>
  );
}
