import Image from "next/image";
import SmallTitle from "../../custom/smalltitle";

export default function Testomonial() {
  return (
    <div className="grid bg-slate-100 grid-cols-12 min md:min-h-[40rem] gap-4 md:mx-4 relative overflow-hidden">
      <div className="col-span-12 md:col-span-6 relative p-4 min-h-[20rem]">
        <Image
          fill
          className="object-cover m-0"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <div className="col-span-12  md:col-span-6 p-2 md:p-0">
        <SmallTitle>Testimonials</SmallTitle>
        <h3 className="font-bold">HAPPY CLIENTS</h3>
        <p className="text-slate-900">
          In today's world, its important to harness technology to.
        </p>
        <p>
          Today we can tell you, thanks to your passion, hard work creativity,
          and expertise, you delivered us the most beautiful house ever! It's
          been a beautiful ride, there were up's and down's, frustrations,
          delays at the same time great looks.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium officiis ipsa numquam et quibusdam vel accusamus. Itaque architecto quae at, vero eligendi amet, iure repudiandae quibusdam provident sit hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque adipisci harum, aliquid veniam esse, sint sit dolore fugiat amet necessitatibus magnam aliquam tempore voluptas blanditiis ipsum, animi magni illo vel?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere id, repellat quae a nulla quos possimus ut? Odio accusantium consectetur nostrum quibusdam possimus at quis minima nobis, repellendus tenetur! Id?</p>
      </div>
    </div>
  );
}
