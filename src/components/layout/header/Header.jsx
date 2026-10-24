import { Standings } from "../../../assets/icons/navbar/NavbarIcons";
import logo from "../../../assets/images/msg23749023-16830-removebg-preview.png";

export default function Header({ setIsMenuopen }) {
  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="flex items-center justify-between gap-4">
        <div className="flex justify-self-start">
          <img src={logo} alt="KickPulse" className="w-10" />
          <span className="text-white text-lg font-semibold">KickPulse</span>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuopen((prev) => !prev)}
        >
          <Standings color="#fff" />
        </button>
      </div>
      <div className="justify-self-end">
        <div className="flex items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand"></span>
          </span>

          <span className="text-brand">Live</span>
        </div>
      </div>
    </div>
  );
}
