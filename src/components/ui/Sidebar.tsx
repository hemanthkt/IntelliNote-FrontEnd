import { LogoIcon } from "../../icons/LogoIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { Sidebaritem } from "./SidebarItem";

export function Sidebar() {
  return (
    <div className="w-72 pl-4  pt-2 left-0 top-0 fixed border-r border-slate-200 h-screen bg-white  ">
      <div className="flex  text-2xl items-center ">
        <div className="pr-2 text-purple-600">{<LogoIcon />}</div>
        Intelli Note
      </div>
      <div className=" pt-6 pl-6">
        <Sidebaritem text={"X"} icon={<TwitterIcon />} />
        <Sidebaritem text={"Youtube"} icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
