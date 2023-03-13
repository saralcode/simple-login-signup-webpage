import Image from "next/image";
import Link from "next/link";
// import { toast } from 'react-toastify';
import {MdLocationPin,MdOutlineEmail,MdPhone} from 'react-icons/md';

export const about = [
    {icon:MdLocationPin, description:"Morabadi ranchi near Sindhu Kanhoo Park, Jharkhand"},
    {icon:MdPhone, description:"+91223453234"},
    {icon:MdOutlineEmail, description:"yourmail@email.com"}

]

const AboutItems = [
  { name: "Terms & Conditions", url: "/terms-and-conditions" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Custome Service", url: "/about-us/developer" },
  { name: "FAQs", url: "/about-us/" },
];
const Social = [
  { name: "Facebook", url: "/" },
  { name: "Instagram", url: "/" },
  { name: "Youtube", url: "/" },
];
const QuickLinks = [
  { name: "Brochure", url: "/" },
  { name: "Portfolio", url: "/" },
  { name: "Events", url: "/" },
  { name: "Latest News", url: "/" },
];
const Footer = () => {
  return (
    <footer className="sticky top-full not-prose z-10  p-2 shadow-md flex bg-slate-800/60 items-center justify-between w-full flex-col">

      <div className="grid grid-cols-12 gap-2 h-auto text-white w-full p-8">
      <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
          <h4 className="font-bold text-lg font-serif">Information</h4>
          <ul className="p-2 pl-8 sm:pl-0">
            {about.map((value, index) => {
              return (
                <li key={"AboutUsFooter" + index} className="my-2 flex flex-wrap gap-4">
                  <value.icon className="h-6 w-6" />
                  <p>
                    {value.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
          <h4 className="font-bold text-lg font-serif">Information</h4>
          <ul className="p-2 pl-8 sm:pl-0">
            {AboutItems.map((value, index) => {
              return (
                <li key={"AboutUsFooter" + index}>
                  <Link
                    href={value.url}
                    className="inline-block dark:hover:text-sky-500 hover:font-medium py-1"
                  >
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
          <h4 className="font-bold text-lg font-serif">Social</h4>
          <ul className="p-2 pl-8 sm:pl-0">
            {Social.map((value, index) => {
              return (
                <li key={"LatestPostsFooter" + index}>
                  <Link
                    href={value.url}
                    className="inline-block dark:hover:text-sky-500 hover:font-medium py-1"
                  >
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3 ">
          <h4 className="font-bold text-lg font-serif">Our Apps</h4>
          <ul className="p-2 pl-8 sm:pl-0">
            {QuickLinks.map((value, index) => {
              return (
                <li key={"AboutUsFooter" + index}>

                  <Link
                    href={value.url}
                    className="inline-block dark:hover:text-sky-500 hover:font-medium py-1"
                  >
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      <div className="border-t-2 h-20 justify-center border-white p-2 px-4 w-11/12 text-white flex items-center flex-col sm:flex-row  ">

        <span>&copy; Copyright 2023</span>
        <span>&nbsp; All Rights Reserved.</span>

        {/* </div> */}
      </div>
    </footer>
  );
};
export default Footer;
