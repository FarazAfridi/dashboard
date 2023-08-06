import Image from "next/image";

export default function SidebarTab(props) {
  return (
    <div className="flex items-center justify-center cursor-pointer w-full px-5 border-l-4 hover:border-l-4 hover:border-[#AB0534]">
      <Image
        className="w-6 h-6 min-w-[24px] min-h-[24px] max-[1366px]:mr-0 mr-6"
        src={props.imageSrc}
        width={64}
        height={64}
      ></Image>
      <div className="table w-full max-[1366px]:hidden">
        <span className={`table-cell w-full align-middle max-[1366px]:hidden active:text-pink-400  font-normal`}>{props.text}</span>
      </div>
    </div>
  );
}
