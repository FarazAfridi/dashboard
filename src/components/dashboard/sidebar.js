import Image from "next/image";
import SidebarTab from "./sidebarTab";
export default function Sidebar() {
  return (
    <div className="border-r-[1px] border-grey max-[1366px]:w-[75px] h-[100vh] w-[270px] py-10 justify-center max-[1366px]:flex max-[1366px]:justify-center">
      <div className="flex flex-col  gap-y-8 w-[270px]">
        <SidebarTab text="Enrollment Journey" imageSrc="/enrollment.png" />
        <SidebarTab text="Document Library" acitve={true} imageSrc="/document-library.png" />
        <SidebarTab text="Messaging" imageSrc="/messaging.png" />
        <SidebarTab text="Student Records" imageSrc="/student-records.png" />
        <SidebarTab text="Campus Content" imageSrc="/campus-content.png" />
        <SidebarTab text="Mobile App Stats" imageSrc="/mobile-app-stats.png" />

        {/* Additional */}
        <div className="max-[1366px]:hidden flex justify-between items-center px-5">
          <div className="table max-[1366px]:hidden">
            <span className="table-cell align-middle uppercase font-semibold text-gray-400">
              Additional
            </span>
          </div>

          <Image
            className="w-3 h-3"
            src="/arrow-down.png"
            width={64}
            height={64}
          />
        </div>

        <SidebarTab text="Messages" imageSrc="/messages.png" />
        <SidebarTab text="Settings" imageSrc="/settings.png" />
        <SidebarTab text="Email Support" imageSrc="/email-support.png" />
      </div>
    </div>
  );
}
