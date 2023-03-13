import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import SmallTitle from "../../custom/smalltitle";
const servicesList = [
  {
    icon: "",
    title: "Site Recce",
    description:
      "Exercitation tempor nulla esse exercitation minim exercitation occaecat. Anim consectetur cupidatat est eiusmod anim tempor consequat exercitation ex ut magna. Anim duis ea commodo in reprehenderit amet ipsum pariatur.",
  },
  {
    icon: "",
    title: "Kitchen Consultancy",
    description:
      "Esse exercitation ad nisi veniam nostrud veniam consectetur magna. Dolore enim amet sunt mollit anim consectetur non officia consequat. Ad ut pariatur pariatur dolore nisi commodo excepteur minim quis enim proident reprehenderit. Sit pariatur veniam aute quis duis voluptate cupidatat sit. Laboris ea qui mollit minim reprehenderit fugiat deserunt magna. Aliqua cupidatat ad dolore amet ut. Cillum eu occaecat eu est excepteur qui sit proident.",
  },
  {
    icon: "",
    title: "Drawing",
    description:
      "Sint eiusmod exercitation incididunt laborum proident. Reprehenderit qui ipsum quis exercitation veniam culpa laborum et non. Nisi consequat enim labore velit excepteur id ut officia eu. Tempor aute magna amet fugiat ut veniam laboris amet. Est esse ea pariatur magna do ad aliqua commodo. Et ex qui tempor in cupidatat anim laboris voluptate culpa magna non occaecat eu occaecat. Amet mollit laboris sit non reprehenderit consequat minim irure adipisicing enim.",
  },
  {
    icon: "",
    title: "Installation",
    description:
      "Velit mollit incididunt voluptate id id pariatur excepteur aute magna. Aliquip incididunt dolore excepteur occaecat nisi duis sint velit nulla commodo. Excepteur culpa sint eu sunt consectetur reprehenderit adipisicing ipsum. Cillum cillum fugiat aliquip veniam laborum sint pariatur ex ea ipsum. Anim Lorem voluptate consectetur est consequat. Ut labore proident quis elit eiusmod nulla consequat amet ea. Velit cupidatat quis eu velit est.",
  },
  {
    icon: "",
    title: "Handover",
    description:
      "Non voluptate ad non incididunt dolore. Et mollit nulla elit commodo elit duis consequat velit minim exercitation aliqua proident enim sint. Tempor minim cillum qui aliqua excepteur. Sint id sit eiusmod officia excepteur sunt. Incididunt ut officia est nulla sit. In proident exercitation veniam quis nulla nulla adipisicing qui quis officia id anim enim pariatur. Adipisicing nisi deserunt consequat voluptate occaecat id.",
  },
  {
    icon: "",
    title: "Equipped with R&D Team",
    description:
      "Excepteur exercitation irure eu incididunt ex magna nostrud minim enim irure aliqua proident. Dolore sit proident ipsum cillum fugiat fugiat commodo laboris aliqua exercitation officia consequat. Proident laborum pariatur commodo nisi aliquip labore esse laboris non ad fugiat sit ea pariatur. Commodo et et tempor incididunt ad sunt culpa exercitation ipsum nulla. Non est fugiat consequat voluptate ex est magna. Officia ipsum pariatur elit laborum exercitation sit ullamco minim nostrud Lorem fugiat et velit est. Fugiat enim nulla quis consequat esse mollit proident aliqua elit amet.",
  },
];
export default function Services() {
  return (
    <div className="flex flex-col items-center mt-20">
      <SmallTitle>Services</SmallTitle>
      <h2 className="mt-0"> What We Do?</h2>
      <p className="max-w-xl mx-auto">
        We are a passionate group of professionals committed to delivers quality
        Modular Kitchens and Storage Wardrobes catering to the ultimate consumer
        satisfaction.
      </p>

      <div className="grid grid-cols-12 gap-2">
        {servicesList.map((value, index) => {
          return (
            <div
              key={"serviceList" + index}
              className="col-span-12  sm:col-span-6 md:col-span-4 relative overflow-hidden rounded-md"
            >
              <Image
                className="object-cover top-0 z-0 -translate-y-8 absolute "
                fill
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              />

              <div className=" z-10 relative border rounded-md h-full w-full bg-white hover:bg-black/60 ease-in-out duration-500 p-2 hover:text-white transition-all flex flex-col items-center justify-center">
                <BsBuilding className="h-6 w-6 mt-2" />
                <h3 className="text-inherit font-bold">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
