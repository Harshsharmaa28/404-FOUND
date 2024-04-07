import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
const Accordion = ({ id, title, answer, expanded, onToggle }) => {
  const toggleAccordion = () => {
    onToggle();
  };

  return (
    <div
      onClick={toggleAccordion}
      className="p-2 mb-4 w-full border-b-2 border-black font-semibold  rounded-md hover:shadow-lg cursor-pointer"
    >
      <div className="flex justify-between w-full">
        <span>
          {" "}
          Q{id + 1}. {title}
        </span>
        <span>
          {expanded ? (
            <RiArrowDropUpLine className="text-4xl" />
          ) : (
            <RiArrowDropDownLine className="text-4xl" />
          )}
        </span>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-1000 ease-in-out  text-sm ${
          expanded ? "h-fit" : "h-0"
        }`}
      >
        <div className="overflow-hidden font-bold ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
