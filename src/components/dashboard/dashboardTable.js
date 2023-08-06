import Image from "next/image";
import TableItem from "./tableItem";
import { useState } from "react";

export default function DashboardTable() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-[100px] px-4 items-center justify-end">
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="rounded-full relative p-2 w-10 h-10 cursor-pointer flex items-center bg-[#E2E2EA]">
          <Image src="/menu.png" width={30} height={30} />
          {isDropdownOpen ? <div className="w-[200px] text-[12px] px-2 text-[#696974] shadow-lg shadow-gray-300 flex flex-col gap-y-4 h-[270px] rounded right-[0px] top-[50px] absolute bg-white">
            <div className="flex gap-x-4 mt-4">
              <Image src="/noti_icon.png" width={20} height={20} />
              <span>Send Notification</span>
            </div>
            <div className="flex gap-x-4">
              <Image src="/sms_icon.png" width={20} height={20} />
              <span>Send SMS</span>
            </div>
            <div className="flex gap-x-4">
              <Image className="" src="/email_icon.png" width={20} height={20} />
              <span>Send Email</span>
            </div>
            <div className="flex gap-x-4">
              <Image className="" src="/check_icon.png" width={20} height={20} />
              <span>Send to "All Channels"</span>
            </div>
            <div className="flex gap-x-4">
              <Image className="" src="/clock-gray.png" width={20} height={20} />
              <span>Change Time Period</span>
            </div>
            <div className="flex gap-x-4">
              <Image className="" src="/3-lines.png" width={20} height={20} />
              <span>Filter attributes</span>
            </div>
            <div className="flex gap-x-4">
              <Image className="" src="/shield.png" width={20} height={20} />
              <span>Report Issue</span>
            </div>
          </div> : null}
        </div>
      </div>
      <div className={"flex-col w-full"}>
        <div
          className={
            "flex justify-between text-[#92929D] text-[14px] font-semibold border-[1px] border-[#E2E2EA] py-2 px-6 rounded-t-[10px]"
          }
        >
          <span className="w-[80px]">ID</span>
          <span className="w-[140px]">PROFILE</span>
          <span className="w-[80px]">GEN</span>
          <span className="w-[80px]">STATE</span>
          <span className="w-[120px]">MAJOR</span>
          <span className="w-[120px]">CLASSIFICATION</span>
          <span className="w-[80px]">DETAILS</span>
          <span className="w-[100px]">NOTIFICATION TYPE</span>
          <span className="w-[60px]">Item1</span>
          <span className="w-[60px]">Item2</span>
        </div>
        <TableItem
          id="923842"
          profile="/pfp1.png"
          username="Phet Putrie"
          gen="female"
          state="virginia"
          major="Marketting & Communication"
          classification="Transfer"
          details="/search-details.png"
          notificationType="/notification-bell.png"
          item1="/notification1.png"
          item2="/mail.png"
        />
        <TableItem
          id="923842"
          profile="/pfp1.png"
          username="Phet Putrie"
          gen="female"
          state="virginia"
          major="Marketting & Communication"
          classification="Transfer"
          details="/search-details.png"
          notificationType="/notification-bell.png"
          item1="/notification1.png"
          item2="/mail.png"
        />
        <TableItem
          id="923842"
          profile="/pfp1.png"
          username="Phet Putrie"
          gen="female"
          state="virginia"
          major="Marketting & Communication"
          classification="Transfer"
          details="/search-details.png"
          notificationType="/notification-bell.png"
          item1="/notification1.png"
          item2="/mail.png"
        />
        <TableItem
          id="923842"
          profile="/pfp1.png"
          username="Phet Putrie"
          gen="female"
          state="virginia"
          major="Marketting & Communication"
          classification="Transfer"
          details="/search-details.png"
          notificationType="/notification-bell.png"
          item1="/notification1.png"
          item2="/mail.png"
        />
        <TableItem
          id="923842"
          profile="/pfp1.png"
          username="Phet Putrie"
          gen="female"
          state="virginia"
          major="Marketting & Communication"
          classification="Transfer"
          details="/search-details.png"
          notificationType="/notification-bell.png"
          item1="/notification1.png"
          item2="/mail.png"
        />
      </div>
    </div>
  );
}
