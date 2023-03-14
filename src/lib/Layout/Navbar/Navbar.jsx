import { useAuthContext } from "@/lib/firebase/auth_context";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const authItems = [
  { url: "/", name: "Home" },
  { url: "/about-us", name: "About Us" },
  { url: "/contact-us", name: "Contact Us" },
  { url: "/profile", name: "Profile" },

];
const unAuthItems = [
  { url: "/login", name: "Login" },
  { url: "/signup", name: "SignUp" },
];
export default function Navbar() {
  const router = useRouter();
  const [navItems, setNavItems] = useState([]);
  const { user } = useAuthContext();
  useEffect(() => {
    if (user) {
        setNavItems(authItems);
    }else{
      setNavItems(unAuthItems);
    }
  }, [user]);
  const pathname = router.pathname;
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex lg:px-20 sticky top-0 z-60  transition-all items-center justify-between drop-shadow-md flex-wrap bg-white p-6">
      <div className="flex flex-1 items-center text-purple-600 flex-shrink-0 mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Your Title
        </span>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="flex items-center px-3 py-2 border rounded text-blue-400 border-blue-400 hover:border-blue-600 hover:text-blue-600"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-col justify-center md:flex-row md:border-0 max-w-xl md:w-auto absolute top-20 md:relative md:top-0 left-0 transition-all duration-500 ease-in-out bg-white ${
          open
            ? "w-[60vw] translate-x-0"
            : "w-0 p-0 overflow-hidden -translate-x-2"
        } border-2 md:h-auto md:border-r-0 h-[calc(100vh-5rem)]`}
      >
        {navItems.map((value, index) => {
          return (
            <Link
              key={"nav" + index}
              className={`mx-4 px-2 h-full navbarbefore  ${
                pathname == value.url
                  ? "before:w-full text-blue-500"
                  : "text-slate-700"
              } hover:before:w-full relative hover:text-blue-500 transition-all py-2 whitespace-nowrap`}
              href={value.url}
            >
              {value.name}
            </Link>
          );
        })}

      </div>
    </nav>
  );
}
