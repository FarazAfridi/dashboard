import Image from "next/image";

export default function TableItem({
  id,
  profile,
  username,
  gen,
  state,
  major,
  classification,
  details,
  notificationType,
  item1,
  item2
}) {
  return (
    <div className={"flex justify-between px-6 text-[14px] pt-4"}>
      <span className="w-[80px]">{id}</span>
      <div className="flex w-[140px] gap-x-3">
        <Image src={profile} className="w-6 h-6" width={24} height={24} />
        <span>{username}</span>
      </div>
      <span className="w-[80px]">{gen}</span>
      <span className="w-[80px]">{state}</span>
      <span className="w-[120px]">{major}</span>
      <span className="w-[120px]">{classification}</span>
      <div className="w-[80px]">
        <Image src={details} width={24} height={24} />
      </div>
      <div className="w-[100px]">
        <Image src={notificationType} width={24} height={24} />
      </div>
      <div className="w-[60px]">
        <Image src={item1} width={24} height={24} />
      </div>
      <div className="w-[60px]">
        <Image src={item2} width={24} height={24} />
      </div>
    </div>
  );
}
