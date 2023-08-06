import Image from "next/image";

export default function Header() {
  return (
    <div className="flex h-[70px] border-b-[1px] border-grey">

      <div className="flex max-[1150px]:mr-auto max-[1150px]:border-0 w-full max-w-[270px] items-center border-r-[1px] border-grey">
        <Image
          className="w-10 h-10 ml-6 cursor-pointer"
          src="/VUU Logo.png"
          width={30}
          height={30}
        />
        <div className="table mt-4 ml-8">
          <span className="table-cell align-middle text-[12px] text-[#928C8E]">
            UNIVERSITY
          </span>
        </div>
      </div>

      <div className="ml-10 flex items-center w-full max-[1150px]:hidden">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.88687 14.6976C1.90587 11.7166 1.90587 6.88344 4.88687 3.90244C7.86788 0.921436 12.701 0.921436 15.682 3.90244C18.4068 6.62723 18.641 10.8995 16.3846 13.8903L19.3964 16.9021C20.1821 17.6878 19.0036 18.8663 18.2179 18.0806L15.2421 15.1048C12.243 17.6718 7.72533 17.5361 4.88687 14.6976ZM14.5035 5.08095C12.1734 2.75082 8.39551 2.75082 6.06539 5.08095C3.73526 7.41108 3.73526 11.189 6.06539 13.5191C8.39551 15.8492 12.1734 15.8492 14.5035 13.5191C16.8337 11.189 16.8337 7.41108 14.5035 5.08095Z"
                fill="#92929D"
              />
            </svg>
          </span>
          <input
            class="w-64 placeholder:text-slate-400 block bg-white py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for Something..."
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="flex items-center">
        <Image
          className="w-5 h-5 mr-6 cursor-pointer"
          src="/notification.png"
          width={300}
          height={300}
        />
        <Image
          className="w-5 h-5 cursor-pointer"
          src="/notification2.png"
          width={300}
          height={300}
        />
      </div>

      <div className="flex ml-10 min-w-[275px] mr-2">
        <div className="flex items-center">
          <Image
            className="w-12 rounded-full h-12"
            src="/pfp1.png"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col ml-3 justify-center max-[620px]:hidden">
          <span className="text-[#171725] font-bold">Micheal Ricks</span>
          <span className="w-[140px] text-[10px] text-[#696974]">
            Interim Assistant Director of Undergraduate Admissions
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Image
            className="w-4 h-3 ml-8"
            src="/dropdown.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
