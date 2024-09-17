import React from 'react';

type OptionArray = string[];
type Title = string;

interface CustomSelectProps {
  options: OptionArray;
  label: Title;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-full min-h-[1px]">
      <div className="gap-0 items-center flex flex-wrap">
        <div className="flex-none relative max-w-full min-h-[1px]">
          <span className="font-sans text-xs leading-5 font-normal text-[#a7adb2] mr-2">{label}</span>
        </div>
        <div className="flex-none relative max-w-full min-h-[1px]">
          <div
            className="min-w-[110px] bg-[#ffffff0c] rounded-lg box-border m-0 p-0 text-[#000d] text-sm font-variant-numeric-tabular-nums leading-[1.5715] list-none relative inline-block cursor-pointer"
            onClick={handleSelectClick}
          >
            <div className="border-none shadow-none p-1 px-4 h-fit bg-transparent relative w-full rounded-sm transition-all duration-300 ease-in-out flex">
              <div className="absolute top-0 right-[25px] bottom-0 left-[11px]">
                <input
                  type="search"
                  className="opacity-0 m-0 p-0 bg-transparent border-none outline-none appearance-none h-[30px] cursor-pointer w-full"
                />
              </div>
              <div className="relative pr-[18px] select-none p-0 leading-[30px] transition-all duration-300 text-[#a7adb2] font-normal text-xs flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                {selectedOption}
              </div>
            </div>
            <span className="select-none absolute right-4 text-inherit font-normal leading-none uppercase align-baseline text-[rgba(0,0,0,.25)] text-xs w-3 h-3 mt-[-6px] text-center pointer-events-none">
              <svg
                className="inline-block w-[10px] h-[6px] leading-none mt-[-35px]"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6038 8.48532C6.80395 8.74532 7.19605 8.74532 7.3962 8.48532L13.3085 0.804996C13.5616 0.476213 13.3272 0 12.9123 0H1.08769C0.672767 0 0.438385 0.476213 0.691484 0.804997L6.6038 8.48532Z"
                  fill="#999999"
                />
              </svg>
            </span>
          </div>
          {isOpen && (
            <ul className="w-full absolute z-10 mt-1 bg-[#ffffff0c] border border-none  rounded-lg shadow-lg">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-[#f6f5f50c] text-[#a7adb2]"
                  style={{ fontSize: '10px' }}
                  >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;