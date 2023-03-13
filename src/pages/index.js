import HmePageSwiper from "@/lib/pagecomponents/pages/home/hmepageswiper";
import HowWeWork from "@/lib/pagecomponents/pages/home/howwework";
import Services from "@/lib/pagecomponents/pages/home/services";
import Testomonial from "@/lib/pagecomponents/pages/home/testomonial";
import Whoweare from "@/lib/pagecomponents/pages/home/whoweare";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/lib/firebase/auth_context";

export default function Home() {

  return (
    <div className="bg-white">
      <div className="not-prose">
        <HmePageSwiper />
      </div>

      <div className="max-w-6xl mx-auto mt-14">
        <Whoweare />
        <Services />
      </div>

      <HowWeWork />
      <Testomonial />
    </div>
  );
}
