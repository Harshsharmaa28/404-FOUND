import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Accordion = ({ title, answer, expanded, onToggle }) => {
  const toggleAccordion = () => {
    onToggle();
  };

  return (
    <div
      onClick={toggleAccordion}
      className="p-2 mb-4 border border-black font-semibold  rounded-md hover:shadow-lg cursor-pointer"
    >
      <div className="flex justify-between w-full">
        <span>{title}</span>
        <span>
          {expanded ? (
            <CiCircleMinus className="text-2xl" />
          ) : (
            <CiCirclePlus className="text-2xl" />
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
