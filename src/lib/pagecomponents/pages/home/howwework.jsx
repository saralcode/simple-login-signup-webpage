import { BsSearch } from "react-icons/bs";
import SmallTitle from "../../custom/smalltitle";
import {AiOutlineCalendar} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
const steps = [
  {
    icon: BsSearch,
    step: "One",
    description: "We'll fully understand your needs in a detailed site visit.",
  },
  {
    icon: AiOutlineCalendar,
    step: "One",
    description: "We'll fully understand your needs in a detailed site visit.",
  },
  {
    icon: BiEdit,
    step: "One",
    description: "We'll fully understand your needs in a detailed site visit.",
  },
];

export default function HowWeWork() {
  return (
    <div className=" py-4 mt-10 bg-slate-200 w-full flex flex-col items-center justify-center">
      <SmallTitle>STEP</SmallTitle>
      <h2>HOW WE WORK</h2>
      <p>All of our designs and hardware come with a 5-year warranty.</p>
      <div className="flex justify-around flex-col md:flex-row">
        {steps.map((value, index) => {
          return (
            <div className="flex group/item items-center justify-center flex-col py-2 relative">
              <div className=" flex items-center group-hover/item:border-4 transition-all ease-in-out border-blue-500 justify-center relative h-20 w-20 rounded-full bg-white">
                <value.icon className="h-8 w-8" />
              </div>
            <h3><span className="text-blue-700">0{index+1}.</span> Step {value.step}</h3>
            <p className="max-w-xl px-4">{value.description}</p>
            {index<steps.length-1 && <span className="md:h-0.5 h-36 w-0.5 md:w-36 md:absolute  left-[80%]  top-[30%] bg-white"></span> }
            </div>
          );
        })}
      </div>
    </div>
  );
}
